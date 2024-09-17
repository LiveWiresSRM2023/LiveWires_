import React, { useEffect } from 'react';
import LwHeadW from '../assets/LwHeadW.png';
import Typed from 'typed.js';

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
    <div className="h-screen p-10 flex flex-col justify-start items-center bg-black  text-center">
      <img src={LwHeadW} alt="Hero" className="animate-floatUp w-auto h-96 object-contain" />
      <h1 className="text-white text-4xl font-bold mb-6 animate-pulse">
        <span className="auto-input"></span>
      </h1>
      <br /><br />
      <h1 className="text-white text-4xl font-bold mb-6 animate-pulse">Explore the art of code</h1>
    </div>
  );
}

export default Hero;

