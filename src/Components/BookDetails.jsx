import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();

  const booksData = useSelector((state) => state.books.list);

  // Find the book using id
  const book = booksData.find((item) => item.id === Number(id));

  // If book not found
  if (!book) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-red-600">Book Not Found</h2>
        <Link to="/books" className="mt-4 text-indigo-600 font-medium hover:underline">← Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* Book Info */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image */}
          <img src={book.image} alt={book.title} className="w-full md:w-1/3 h-72 object-cover rounded-lg"/>

          {/* Details */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800">{book.title}</h1>

            <p className="text-gray-600 mt-2 text-lg">by
               <span className="font-medium">{book.author}</span>
            </p>

            <p className="text-indigo-600 mt-2 font-medium"> Category: {book.category} </p>

            <p className="text-yellow-500 font-semibold mt-2">⭐ Rating: {book.rating} </p>

            <p className="text-gray-700 mt-6 leading-relaxed"> {book.description} </p>

            {/* Back Button */}
            <Link to="/books" className="inline-block mt-8 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition" >
              ← Back to Browse
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
