import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import LwFullW from '../assets/LwFullW.png'; // Replace with the path to your logo

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center text-center px-8 w-full">
        
        {/* Left Section: Logo and Contact Us */}
        <div className="w-full flex flex-col items-center justify-center mb-8 md:mb-0">
          <img src={LwFullW} alt="Club Logo" style={{ width: '450px', height: 'auto' }} className="mb-6 mx-auto" />
          <div>
            <h3 className="font-bold text-2xl mb-2">Contact Us</h3>
            <div className="flex justify-center items-center space-x-2">
              <FaEnvelope className="text-xl" />
              <p className="text-lg">livewire@srmist.edu.in</p>
            </div>
          </div>
        </div>

        {/* Right Section: Follow Us */}
        <div className="w-full flex flex-col items-center justify-center">
          <h3 className="font-bold text-2xl mb-6">Follow Us</h3>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <FaInstagram className="text-2xl" />
              <p className="text-lg">InstagramUsername</p>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <FaFacebookF className="text-2xl" />
              <p className="text-lg">FacebookUsername</p>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <FaLinkedinIn className="text-2xl" />
              <p className="text-lg">LinkedInUsername</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





// import React from 'react';
// import { FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter, FaDribbble, FaEnvelope } from 'react-icons/fa';
// import LwFullW from '../assets/LwFullW.png'; // Replace with your logo path

// const Footer = () => {
//   return (
//     <footer className="bg-[#0f1a22] text-white py-12">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center px-8">
        
//         {/* Left Section */}
//         <div className="flex flex-col items-start justify-center mb-8 md:mb-0 md:w-1/2 text-left">
//           <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
//           <p className="text-sm mb-6">
//             Ecosystem bootstrapping learning curve lean startup disruptive. Marketing long tail disruptive agile development partner.
//           </p>
//           <div className="flex space-x-4">
//             <a href="#" className="hover:text-gray-300"><FaInstagram className="w-6 h-6" /></a>
//             <a href="#" className="hover:text-gray-300"><FaLinkedinIn className="w-6 h-6" /></a>
//             <a href="#" className="hover:text-gray-300"><FaPinterest className="w-6 h-6" /></a>
//             <a href="#" className="hover:text-gray-300"><FaTwitter className="w-6 h-6" /></a>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="flex flex-col md:flex-row items-center md:space-x-8">

//           {/* Email Link */}
//           <div className="bg-[#15242d] p-4 rounded-lg flex items-center space-x-3">
//             <FaEnvelope className="w-6 h-6" />
//             <a href="mailto:contact@example.com" className="text-white text-sm">
//               contact@example.com
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


