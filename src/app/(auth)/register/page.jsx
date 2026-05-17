"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaBookOpen, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = async (data) => {
    const { data: res, error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      image: data.photoURL,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    if (res) {
      toast.success("Signed Up Successfully!");
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen bg-base-300 flex items-center justify-center px-4 py-8">
      <div className="bg-base-100 w-full max-w-xl rounded-2xl p-10 shadow-md">
        <div className="flex justify-center mb-4">
          <FaBookOpen className="text-primary text-4xl" />
        </div>

        <h1 className="text-2xl font-bold text-center text-neutral mb-1">
          Create an Account
        </h1>
        <p className="text-center text-sm opacity-50 mb-6">
          Join OpenShelf and start borrowing today
        </p>
        <hr className="border-base-200 mb-6" />

        <form className="space-y-5" onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset p-0">
            <legend className="fieldset-legend text-neutral font-semibold mb-2">
              Full Name
            </legend>
            <input
              {...register("name", {
                required: "Name is required",
              })}
              type="text"
              className="input w-full bg-base-200 border-none text-neutral"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset p-0">
            <legend className="fieldset-legend text-neutral font-semibold mb-2">
              Email Address
            </legend>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              className="input w-full bg-base-200 border-none text-neutral"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset p-0">
            <legend className="fieldset-legend text-neutral font-semibold mb-2">
              Photo URL
            </legend>
            <input
              {...register("photoURL", {
                required: "Photo URL is required",
              })}
              type="url"
              className="input w-full bg-base-200 border-none text-neutral"
              placeholder="Enter your photo URL"
            />
            {errors.photoURL && (
              <p className="text-red-500 text-sm">{errors.photoURL.message}</p>
            )}
          </fieldset>

          <fieldset className="relative fieldset p-0">
            <legend className="fieldset-legend text-neutral font-semibold mb-2">
              Password
            </legend>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type={isShowPassword ? "text" : "password"}
              className="input w-full bg-base-200 border-none text-neutral"
              placeholder="Enter your password"
            />
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              className="absolute right-3 top-4 cursor-pointer opacity-50 hover:opacity-100"
            >
              {isShowPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </fieldset>

          <button className="btn btn-primary w-full font-semibold">
            Register
          </button>

          <div className="divider text-xs opacity-40">OR</div>

          <button
            type="button"
            onClick={() =>
              authClient.signIn.social({ provider: "google", callbackURL: "/" })
            }
            className="btn w-full bg-base-200 border-none hover:bg-base-300 font-semibold flex items-center gap-2"
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>

          <p className="text-center text-sm opacity-60 pt-1">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-bold hover:underline text-[#111111]"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
