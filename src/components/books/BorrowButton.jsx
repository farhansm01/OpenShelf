"use client";

import { toast } from "react-toastify";

const BorrowButton = ({ book }) => {
  const handleBorrow = () => {
    toast.success(`Successfully borrowed "${book.title}"!`);
  };

  return (
    <button onClick={handleBorrow} className="btn btn-primary w-fit px-8">
      Borrow This Book
    </button>
  );
};

export default BorrowButton;
