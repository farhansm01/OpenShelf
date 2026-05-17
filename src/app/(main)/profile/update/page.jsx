"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaBookOpen } from "react-icons/fa";
import { toast } from "react-toastify";

const UpdateProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUpdate = async (data) => {
    const { error } = await authClient.updateUser({
      name: data.name,
      image: data.image,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Profile updated successfully!");
    router.push("/profile");
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-8">
      <div className="bg-base-100 w-full max-w-xl rounded-2xl p-10 shadow-md">
        <div className="flex justify-center mb-4">
          <FaBookOpen className="text-primary text-4xl" />
        </div>

        <h1 className="text-2xl font-bold text-center text-neutral mb-1">
          Update Information
        </h1>
        <p className="text-center text-sm opacity-50 mb-6">
          Update your name and profile photo
        </p>
        <hr className="border-base-200 mb-6" />

        <form className="space-y-5" onSubmit={handleSubmit(handleUpdate)}>
          <fieldset className="fieldset p-0">
            <legend className="fieldset-legend text-neutral font-semibold mb-2">
              Full Name
            </legend>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              defaultValue={user?.name}
              className="input w-full bg-base-200 border-none text-neutral"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset p-0">
            <legend className="fieldset-legend text-neutral font-semibold mb-2">
              Photo URL
            </legend>
            <input
              {...register("image", { required: "Photo URL is required" })}
              type="url"
              defaultValue={user?.image}
              className="input w-full bg-base-200 border-none text-neutral"
              placeholder="Enter your photo URL"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </fieldset>

          <button className="btn btn-primary w-full font-semibold">
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
