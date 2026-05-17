"use client";

import BookCard from "@/components/BookCard";
import CategorySidebar from "@/components/books/CategorySidebar";
import SearchBar from "@/components/books/SearchBar";
import books from "@/lib/data.json";
import { useState } from "react";

const BooksPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-neutral mb-8">All Books</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="sticky top-20">
          <CategorySidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
          ) : (
            <p className="text-neutral opacity-50 col-span-3">
              No books found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
