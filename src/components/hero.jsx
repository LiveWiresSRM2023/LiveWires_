// // import React, { useEffect } from 'react';
// // import LwHeadW from '../assets/LwHeadW.png';
// // import Typed from 'typed.js';
// // import Navbar from './navbar';

// // function Hero() {
// //   useEffect(() => {
// //     const typed = new Typed('.auto-input', {
// //       strings: ["Intent . Invent . Inspire"],
// //       typeSpeed: 80,
// //       backSpeed: 80,
// //       loop: true
// //     });

// //     return () => {
// //       typed.destroy(); 
// //     };
// //   }, []);

// //   return (
// //     <div>
// //       <Navbar/>
// //     <div className="h-screen p-10 flex flex-col justify-start items-center bg-black  text-center">
// //       <img src={LwHeadW} alt="Hero" className="animate-floatUp w-auto h-96 object-contain" />
// //       <h1 className="text-white text-4xl font-bold mb-6 animate-pulse">
// //         <span className="auto-input"></span>
// //       </h1>
// //       <br /><br />
// //       <h1 className="text-white text-2xl pl-80 md:pl-9 md:pr-9 sm:pl-1 sm:pr-1 pr-80 mb-6 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. </h1>
// //     </div>
// //     </div>
// //   );
// // }

// // export default Hero;




// import React, { useEffect } from 'react';
// import LwHeadW from '../assets/LwHeadW.png';
// import Typed from 'typed.js';
// import Navbar from './navbar';

// function Hero() {
//   useEffect(() => {
//     const typed = new Typed('.auto-input', {
//       strings: ["Intent . Invent . Inspire"],
//       typeSpeed: 80,
//       backSpeed: 80,
//       loop: true
//     });

//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <div className="h-screen p-4 md:p-10 flex flex-col justify-start items-center bg-[#001403] text-center">
//         <img
//           src={LwHeadW}
//           alt="Hero"
//           className="animate-floatUp w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain mb-6"
//         />
//         <h1 className="text-white text-2xl md:text-4xl font-bold mb-6 animate-pulse">
//           <span className="auto-input"></span>
//         </h1>
//         <h1 className="text-white text-base sm:text-lg md:text-2xl px-4 md:px-20 lg:px-40">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate.
//         </h1>
//       </div>
//     </div>
//   );
// }

// export default Hero;


import React, { useEffect } from 'react';
import LwHeadW from '../assets/LwHeadW.png';
import Typed from 'typed.js';
import Navbar from './navbar';

function Hero() {
  useEffect(() => {
    const typed = new Typed('.auto-input', {
      strings: ["Intent . Invent . Inspire"],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="h-screen p-4 md:p-10 flex flex-col justify-start items-center bg-[#001403] text-center">
        <img
          src={LwHeadW}
          alt="Hero"
          className="animate-floatUp w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-md h-auto object-contain mb-1"
        />
        <h1 className="text-[#05C400] text-2xl md:text-4xl font-extrabold mb-8 ">
          <span className="auto-input"></span>
        </h1>
        <h1 className="text-white text-base sm:text-lg md:text-2xl px-4 md:px-20 lg:px-40">
        Welcome to the Team Livewires <br></br> from the Department of Computer Applications at SRM University KTR.
        </h1>
      </div>
    </div>
  );
}

export default Hero;
