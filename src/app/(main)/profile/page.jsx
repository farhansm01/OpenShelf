"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { FaEdit, FaEnvelope, FaUser } from "react-icons/fa";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-neutral mb-8">My Profile</h1>

      <div className="bg-base-100 rounded-2xl shadow-md p-8 flex flex-col items-center gap-6">
        {/* Avatar */}
        <div className="relative">
          {user?.image && user.image !== "" ? (
            <img
              src={user.image}
              alt="avatar"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
              className="w-24 h-24 rounded-full object-cover border-4 border-primary"
            />
          ) : null}
          <div
            style={{ display: user?.image ? "none" : "flex" }}
            className="w-24 h-24 rounded-full bg-primary flex items-center justify-center"
          >
            <span className="text-3xl font-bold text-primary-content">
              {user?.name?.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>

        {/* User Info */}
        <div className="w-full space-y-4">
          <div className="flex items-center gap-3 bg-base-200 px-4 py-3 rounded-lg">
            <FaUser className="text-primary" />
            <div>
              <p className="text-xs opacity-50">Full Name</p>
              <p className="font-semibold text-neutral">{user?.name}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-base-200 px-4 py-3 rounded-lg">
            <FaEnvelope className="text-primary" />
            <div>
              <p className="text-xs opacity-50">Email Address</p>
              <p className="font-semibold text-neutral">{user?.email}</p>
            </div>
          </div>
        </div>

        {/* Update Button */}
        <Link
          href="/profile/update"
          className="btn btn-primary w-full flex items-center gap-2"
        >
          <FaEdit /> Update Information
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
