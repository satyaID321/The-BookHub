import React from "react";
import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-6xl font-extrabold text-indigo-600 mb-4"> 404 </h1>

      <p className="text-xl font-semibold text-gray-700 mb-2"> Page Not Found </p>

      <p className="text-gray-500 mb-6"> The page <span className="font-medium">{location.pathname}</span> does not exist.</p>

      <Link to="/" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
