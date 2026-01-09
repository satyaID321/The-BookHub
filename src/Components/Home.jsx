import React from "react";
import { Link } from "react-router-dom";
import categories from "../Utils/Categories";
import { popularBooks } from "../Utils/PopularBooks";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <div className="py-20 flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4">
            Welcome to BookHub 📚
          </h1>

          <p className="text-gray-600 text-lg max-w-xl mx-auto mb-10">
            Discover amazing books, explore categories, and manage your personal
            book collection with ease.
          </p>

          <Link to="/books" className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium 
                       hover:bg-indigo-700 transition duration-300 shadow-md" > Explore Books
          </Link>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center"> Browse by Category </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <Link to={`/books/${item.toLowerCase()}`} key={index} className="bg-violet-200 p-6 rounded-xl text-center hover:-translate-y-1 transition-all duration-300" >
              <h3 className="text-lg font-semibold text-indigo-700">{item}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Books */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Explore Popular Books
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {popularBooks.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              {/* Image */}
              <img src={item.image} alt={item.title} className="w-full h-72 object-cover" />

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate"> {item.title} </h3>

                <p className="text-sm text-gray-500 mt-1">by {item.author}</p>

                <p className="text-sm text-indigo-600 mt-2 font-medium"> {item.category} </p>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-lg">★</span>
                    <span className="ml-1 text-gray-700 font-medium"> {item.rating} </span>
                  </div>

                  {/* View Details */}
                  <Link to={`/book/${item.id}`} className="text-sm text-indigo-600 font-semibold hover:underline">View Details →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
