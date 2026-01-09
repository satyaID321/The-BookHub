import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-5xl font-bold text-white tracking-wide"> BookHub </h1>

        {/* Links */}
        <div className="flex items-center gap-8 text-white font-medium">
          <Link to="/" className="hover:text-yellow-300 transition duration-300" > Home </Link>

          <Link to="/books" className="hover:text-yellow-300 transition duration-300"> Browse Books </Link>

          <Link to="/AddBook" className="bg-white text-indigo-700 px-5 py-2 rounded-full font-semibold 
           hover:bg-yellow-300 hover:text-black transition duration-300 shadow-md" > + Add Book </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
