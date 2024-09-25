import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function About() {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <>
      <div className="min-h-screen p-10 flex flex-col bg-[#001403]">
        <div className="flex-grow flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl font-bold mb-10 ">About Us</h1>
          {/* Second div (row) */}
          <div className="flex space-x-4">
            <div className="border-l-8 border-white  p-2 h-[600px] flex flex-row w-[440px] hover:bg-[#033C02]">
              <div
                className='text-center text-9xl rotate-180 writing-mode-vertical text-[#001403] font-krona'
                style={{ textShadow: '-3px -3px 0 #05C400, 3px -3px 0 #05C400, -3px 3px 0 #05C400, 3px 3px 0 #05C400' }}
              >
                INTEND
              </div>
              <div className='text-[30px] pt-16 text-white text-wrap'>
                Believing in setting clear goals and aspirations, we encourage our members to explore their passions, develop new skills, make meaningful connections, and develop a vision for their future.
              </div>
            </div>
            <div className="border-l-8 border-white p-2 h-[600px] flex flex-row w-[440px] hover:bg-[#033C02]">
              <div
                className='text-center text-9xl rotate-180 writing-mode-vertical font-krona text-[#001403]'
                style={{ textShadow: '-3px -3px 0 #05C400, 3px -3px 0 #05C400, -3px 3px 0 #05C400, 3px 3px 0 #05C400' }}
              >
                INVENT
              </div>
              <div className='text-[28px] pt-14 text-white text-wrap'>
                Invention is at the heart of what we do by providing a platform for brainstorming, collaborating, and hands-on projects, challenging our members to think outside the box and bring their ideas to life.
              </div>
            </div>
            <div className="border-l-8 border-white p-2 h-[600px] flex flex-row w-[440px] hover:bg-[#033C02]">
              <div
                className='text-center rotate-180 text-9xl writing-mode-vertical font-krona text-[#001403]'
                style={{ textShadow: '-3px -3px 0 #05C400, 3px -3px 0 #05C400, -3px 3px 0 #05C400, 3px 3px 0 #05C400' }}
              >
                INSPIRE
              </div>
              <div className='text-[30px] pt-9 text-white text-wrap'>
                We strive to create a supportive community where members motivate and empower one another. Through workshops, events, and mentorship, we aim to ignite creativity and drive in every member.
              </div>
            </div>
          </div>
          <h1 className='m-16 text-white text-3xl text-center'>
            Join us as we embark on an exciting journey of discovery and creation. Together, we can transform ideas into reality and inspire others to do the same!
          </h1>
        </div>
        {/* Centering the button with glowing effect on all sides */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => navigate('/recruitmentlinktree')}
            className=" text-[#001403] font-bold px-6 py-3 bg-[#05C400] hover:scale-125 hover:text-[#001403] transition duration-300 max-w-[200px]  shadow-[0_0_25px_#05C400]"
          >
            Join Us
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
