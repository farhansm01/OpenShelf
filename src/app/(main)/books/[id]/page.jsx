import BorrowButton from "@/components/books/BorrowButton";
import books from "@/lib/data.json";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-neutral">Book not found!</h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left - Book Cover */}
        <div className="shrink-0 flex justify-center">
          <Image
            src={book.image_url}
            alt={book.title}
            width={280}
            height={400}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Right - Book Details */}
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-3xl font-extrabold text-neutral">{book.title}</h1>

          <p className="flex items-center gap-2 text-sm opacity-60">
            <FaUser /> {book.author}
          </p>

          <p className="flex items-center gap-2 text-sm opacity-60">
            <MdCategory /> {book.category}
          </p>

          <p className="text-sm leading-relaxed opacity-70">
            {book.description}
          </p>

          <div className="badge badge-primary badge-outline py-3 px-4 text-sm font-medium">
            {book.available_quantity} copies left
          </div>

          <BorrowButton book={book} />
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
