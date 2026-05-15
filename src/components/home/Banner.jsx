import Link from "next/link";

const Banner = () => {
  return (
    <section
      className="relative min-h-[520px] flex items-center justify-center text-center px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Find Your Next <span className="text-secondary">Read</span>
        </h1>
        <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">
          Discover thousands of books across every genre. Borrow digitally, read
          freely.
        </p>
        <Link href="/books" className="btn btn-secondary btn-lg">
          Browse Now
        </Link>
      </div>
    </section>
  );
};

export default Banner;
