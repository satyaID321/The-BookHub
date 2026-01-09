import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
    image: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.title ||
      !formData.author ||
      !formData.category ||
      !formData.description ||
      !formData.rating
    ) {
      alert("Please fill all fields");
      return;
    }

    const newBook = {
      id: Date.now(),
      ...formData,
      rating: Number(formData.rating)
    };

    dispatch(addBook(newBook));
    navigate("/books");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6"> Add New Book </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text"  name="title" placeholder="Book Title" value={formData.title} onChange={handleChange}
            className="w-full p-3 border rounded"/>

          <input type="text" name="author" placeholder="Author Name" value={formData.author}
            onChange={handleChange} className="w-full p-3 border rounded"/>

          <input type="text" name="category" placeholder="Category" value={formData.category}
            onChange={handleChange} className="w-full p-3 border rounded"/>

          <input type="number" step="0.1" name="rating" placeholder="Rating (1-5)"
            value={formData.rating} onChange={handleChange} className="w-full p-3 border rounded" />

          <input type="text" name="image" placeholder="Image URL" value={formData.image}
            onChange={handleChange} className="w-full p-3 border rounded" />

          <textarea name="description" placeholder="Book Description" value={formData.description} onChange={handleChange}
            className="w-full p-3 border rounded"/>

          <button type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition" >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
