import BookCard from "@/components/BookCard";
import books from "@/lib/data.json";

const featuredBooks = books.slice(0, 4);

const FeaturedBooks = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-neutral mb-2 text-center">
        Featured Books
      </h2>
      <p className="text-center opacity-50 mb-8 text-sm">
        Handpicked titles just for you
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
