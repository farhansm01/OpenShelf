import Link from "next/link";
import { FaBookOpen } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center text-center px-6">
      <FaBookOpen className="text-primary text-6xl mb-6" />
      <h1 className="text-8xl font-extrabold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-bold text-neutral mb-2">Page Not Found</h2>
      <p className="text-sm opacity-50 mb-8">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
