import React from 'react';
import { Link } from 'react-router-dom';
import LwFullW from '../assets/LwFullW.png'; // Adjust the path and extension if necessary

function Navbar() {
  return (
    <nav className="bg-black text-white py-4 px-6 shadow-md h-16 flex items-center">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-green-500">
            <img src={LwFullW} alt="Logo" className="h-12 w-auto object-contain" /> {/* Adjust the size as needed */}
          </Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-green-500">Home</Link>
          <Link to="/about" className="hover:text-green-500">About</Link>
          <Link to="/services" className="hover:text-green-500">Services</Link>
          <Link to="/contact" className="hover:text-green-500">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
