import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import categories from "../Utils/Categories";

function BrowseBook() {
  const { category } = useParams();
  const navigate = useNavigate();
  const booksData = useSelector((state) => state.books.list);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sync dropdown with URL
  useEffect(() => {
    if (category) {
      setSelectedCategory(category.toLowerCase());
    } else {
      setSelectedCategory("all");
    }
  }, [category]);

  // Handle category change + route update
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    if (value === "all") {
      navigate("/books");
    } else {
      navigate(`/books/${value}`);
    }
  };

  // Filter by category
  const categoryFilteredBooks = selectedCategory === "all" ? booksData : booksData.filter((book) => book.category.toLowerCase() === selectedCategory );

  // Search filter
  const filteredBooks = categoryFilteredBooks.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase())
   || book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">{selectedCategory === "all" ? "All Books" : `${selectedCategory} Books`}</h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
        {/* Category Dropdown */}
        <select value={selectedCategory} onChange={handleCategoryChange}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option value="all">All Categories</option>
          {categories.map((cat, index) => (<option key={index} value={cat.toLowerCase()}>{cat} </option>
          ))}
        </select>

        {/* Search Bar */}
        <input  type="text" placeholder="Search by title or author..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-80"
        />
      </div>

      {/* Books Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredBooks.length > 0 ? (filteredBooks.map((book) => (
          <div key={book.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden" >
              <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800"> {book.title} </h3>

                <p className="text-sm text-gray-500 mt-1">by {book.author}</p>

                <p className="text-sm text-indigo-600 mt-2 font-medium"> {book.category} </p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-yellow-500 font-semibold">⭐ {book.rating}</span>
                  <Link to={`/book/${book.id}`} className="text-indigo-600 font-medium hover:underline">
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500"> No books found. </p>
        )}
      </div>
    </div>
  );
}

export default BrowseBook;
