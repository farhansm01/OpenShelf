"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaBars,
  FaBookOpen,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <nav className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left - Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-primary font-bold text-xl"
        >
          <FaBookOpen className="text-2xl" />
          <span>OpenShelf</span>
        </Link>

        {/* Center - Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-primary transition"
          >
            <IoHomeSharp /> Home
          </Link>
          <Link
            href="/books"
            className="flex items-center gap-1 hover:text-primary transition"
          >
            <MdMenuBook /> All Books
          </Link>
          <Link
            href="/profile"
            className="flex items-center gap-1 hover:text-primary transition"
          >
            <FaUser /> My Profile
          </Link>
        </div>

        {/* Right - Auth */}
        <div className="hidden md:flex items-center gap-3">
          {isPending ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : user ? (
            <div className="flex items-center gap-3">
              {user?.image ? (
                <Image
                  src={user.image}
                  alt="user avatar"
                  width={35}
                  height={35}
                  className="rounded-full"
                />
              ) : (
                <FaUser className="text-2xl text-primary" />
              )}
              <span className="font-medium text-sm">{user?.name}</span>
              <button
                onClick={handleLogout}
                className="btn btn-sm bg-primary text-white flex items-center gap-1"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="btn btn-sm btn-primary flex items-center gap-1"
            >
              <FaSignInAlt /> Login
            </Link>
          )}
        </div>

        {/* Mobile - Hamburger */}
        <div className="md:hidden dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
            <FaBars className="text-xl" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box shadow-lg w-52 p-2 mt-2 z-50"
          >
            <li>
              <Link href="/">
                <IoHomeSharp /> Home
              </Link>
            </li>
            <li>
              <Link href="/books">
                <MdMenuBook /> All Books
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <FaUser /> My Profile
              </Link>
            </li>
            <li>
              {user ? (
                <button onClick={handleLogout} className="text-error">
                  <FaSignOutAlt /> Logout
                </button>
              ) : (
                <Link href="/login">
                  <FaSignInAlt /> Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
