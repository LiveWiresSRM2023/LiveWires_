import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import LwFullW from '../assets/LwFullW.png';

const Popup = ({ onClose }) => {
  const popupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-md z-50">
      <div
        ref={popupRef}
        className="bg-gray-800 text-white p-10 rounded-lg w-4/5 md:w-3/5 lg:w-1/2" // Increased size
        style={{ height: '70vh' }} // Set height to 70% of the viewport height
      >
        <h2 className="text-2xl font-bold mb-4">Ongoing Events</h2>
        <p>Your event details go here...</p>
      </div>
    </div>
  );
};

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      const isNavbarHidden = scrollY > navbarHeight;
      setIsScrolled(isNavbarHidden);
      setShowScrollToTop(isNavbarHidden);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <nav className={`bg-black text-white py-11 px-3 h-16 flex items-center w-full top-0 left-0 z-30 ${isScrolled ? 'hidden' : ''}`}>
        <div className="container mx-auto flex justify-between items-center h-full">
          <div className="text-xl font-bold">
            <a href="#hero" className="hover:text-green-500">
              <img src={LwFullW} alt="Logo" className="h-12 w-auto object-contain" />
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => navigate('/elvy')}
              className="bg-none border-green-600 border-2 text-white px-6 py-3 hover:bg-green-600 transition duration-300"
            >
              Chat With ELVY
            </button>
            <button
              onClick={() => setShowPopup(true)}
              className="bg-none text-white border-2 border-green-600 px-6 py-3 hover:bg-green-600 transition duration-300"
            >
              Ongoing Events
            </button>
            <button
              onClick={() => navigate('/join')}
              className="bg-none text-white border-2 border-green-600 px-6 py-3 hover:bg-green-600 transition duration-300"
            >
              Join Us
            </button>
          </div>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars fa-2x"></i>
          </button>
        </div>
        <div className={`fixed top-0 right-0 bg-green-700 text-white w-64 h-full transform transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-40`}>
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuOpen(false)} className="text-white">
              <i className="fas fa-times fa-2x"></i>
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6 mt-8">
            <button
              onClick={() => navigate('/elvy')}
              className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition duration-300"
            >
              Chat With ELVY
            </button>
            <button
              onClick={() => setShowPopup(true)}
              className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition duration-300"
            >
              Ongoing Events
            </button>
            <button
              onClick={() => navigate('/join')}
              className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition duration-300"
            >
              Join Us
            </button>
          </div>
        </div>
      </nav>

      {showScrollToTop && (
        <div className="fixed bottom-4 right-4 z-20">
          <button
            onClick={scrollToTop}
            className="text-white bg-green-600 p-3 rounded-full shadow-lg focus:outline-none hover:scale-125 transition-all hover:bg-green-600"
            aria-label="Scroll to top"
          >
            <i className="bg-transparent fas fa-chevron-up h-5 w-6"></i>
          </button>
        </div>
      )}

      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </>
  );
}

export default Navbar;
