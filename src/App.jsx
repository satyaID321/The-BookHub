import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes, useLocation } from "react-router";
import Home from "./Components/Home";
import BrowseBook from "./Components/BrowseBook";
import AddBook from "./Components/AddBook";
import BookDetails from "./Components/BookDetails";
import NotFound from "./Components/NotFound";

function App() {
  const location = useLocation();

  const hideNavbar = location.pathname === "*";
  return (
    <>
      {!location.pathname.includes("404") && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BrowseBook />} />
        <Route path="/books/:category" element={<BrowseBook />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
