import Link from "next/link";
import {
  FaBookOpen,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-bold text-xl mb-3"
          >
            <FaBookOpen /> OpenShelf
          </Link>
          <p className="text-sm opacity-60 leading-relaxed">
            Your modern digital library. Discover, borrow, and enjoy thousands
            of books — anytime, anywhere.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm opacity-70">
            <li>
              <Link
                href="/"
                className="hover:opacity-100 hover:text-primary transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/books"
                className="hover:opacity-100 hover:text-primary transition"
              >
                All Books
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="hover:opacity-100 hover:text-primary transition"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="hover:opacity-100 hover:text-primary transition"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm opacity-70">
            <li className="flex items-center gap-2">
              <MdEmail /> openshelf@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MdPhone /> +880 1700 000000
            </li>
            <li className="flex items-center gap-2">
              <MdLocationOn /> Dhaka, Bangladesh
            </li>
          </ul>
          <div className="flex gap-4 mt-5 text-lg">
            <a href="#" className="hover:text-primary transition opacity-70">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-primary transition opacity-70">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-primary transition opacity-70">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-primary transition opacity-70">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 text-center text-xs opacity-40 py-4">
        © {new Date().getFullYear()} OpenShelf. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
