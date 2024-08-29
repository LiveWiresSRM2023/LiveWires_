import React from 'react';
import LwHeadW from '../assets/LwHeadW.png';

function Hero() {
  return (
    <div className="h-screen p-10 flex flex-col justify-start items-center bg-neutral-900 text-center">
      <img src={LwHeadW} alt="Hero" className="animate-floatUp w-auto h-96 object-contain" />
      <h1 className="text-white text-4xl font-bold mb-6 animate-pulse">intend.invent.inspire</h1>
      <br /><br />
      <h1 className="text-white text-4xl font-bold mb-6 animate-pulse">Explore the art of code</h1>

    </div>
  );
}

export default Hero;
