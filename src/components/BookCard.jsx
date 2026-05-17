import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

const BookCard = ({ book }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 border border-base-200 mx-auto w-full">
      <figure className="px-4 pt-4">
        <img
          src={book.image_url}
          alt={book.title}
          className="rounded-lg h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h3 className="card-title text-sm font-bold line-clamp-1">
          {book.title}
        </h3>
        <p className="text-xs opacity-60 flex items-center gap-1">
          <FaUser /> {book.author}
        </p>
        <p className="text-xs opacity-60 flex items-center gap-1">
          <MdCategory /> {book.category}
        </p>
        <div className="card-actions mt-3">
          <Link
            href={`/books/${book.id}`}
            className="btn btn-primary btn-sm w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
