import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CodeVoy from "../assets/CodeVoy.jpg";
import FlutterWS from "../assets/FlutterWS.jpg";
import Iot from "../assets/IOT.jpg";
import TalCarnival from "../assets/TalCarnival.jpg";
import TechUtsav from "../assets/TechUtsav.jpg";
import WebBootcamp from "../assets/WebBootcamp.jpg";
import Recruit from "../assets/Recruit.jpg";
import LWReboot from "../assets/LWReboot.jpg";
import Logo from "../assets/Logo.jpg";

const events = [
  { id: 1, image: CodeVoy, description: 'Description for CodeVoy' },
  { id: 2, image: FlutterWS, description: 'Description for Flutter Workshop' },
  { id: 3, image: Iot, description: 'Description for IoT Workshop' },
  { id: 4, image: TalCarnival, description: 'Description for Talent Carnival' },
  { id: 5, image: TechUtsav, description: 'Description for Tech Utsav' },
  { id: 6, image: WebBootcamp, description: 'Description for Web Bootcamp' },
  { id: 7, image: Recruit, description: 'Description for Recruitment Drive' },
  { id: 8, image: LWReboot, description: 'Description for Reboot' },
  { id: 9, image: Logo, description: 'Description for Logo Showcase' },
];

const Arrow = ({ onClick, direction }) => (
  <button
    className={`absolute top-1/2 ${
      direction === 'left' ? 'left-2' : 'right-2'
    } transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg`}
    onClick={onClick}
  >
    {direction === 'left' ? (
      <i className="fas fa-chevron-left"></i>
    ) : (
      <i className="fas fa-chevron-right"></i>
    )}
  </button>
);

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentDescription, setCurrentDescription] = useState('');
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow:3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    arrows: false, // Disabling default arrows
    beforeChange: (current, next) => {
      setCurrentSlide(next);
      setCurrentDescription(events[next].description);
    },
    afterChange: (current) => {
      setCurrentSlide(current);
      setCurrentDescription(events[current].description);
    }
  };

  // Set initial description after component mounts
  useEffect(() => {
    if (events.length > 0) {
      setCurrentDescription(events[0].description);
    }
  }, []);

  // Custom functions for manual navigation
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Moves to the next slide
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Moves to the previous slide
    }
  };

  const handleSlideClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index); // Moves to the clicked slide
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-start p-0">
      <h1 className="text-white text-4xl font-bold mt-8 mb-12 text-center">
        Our Events
      </h1>
      <div className="relative w-full max-w-7xl px-4">
        <Arrow direction="left" onClick={handlePrev} />
        <Slider ref={sliderRef} {...settings}>
          {events.map((event, index) => (
            <div
              key={event.id}
              onClick={() => handleSlideClick(index)} // Handle slide click
              className={`px-1 transition-transform duration-500 cursor-pointer ${
                currentSlide === index ? 'scale-110' : 'scale-90'
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={event.image}
                  alt={`Event ${event.id}`}
                  className={`w-[700px] h-[400px] object-contain rounded-2xl transition-transform duration-500 ${
                    currentSlide === index ? 'scale-105' : 'scale-90'
                  }`}
                />
              </div>
            </div>
          ))}
        </Slider>
        <Arrow direction="right" onClick={handleNext} />
      </div>
      {currentDescription && (
        <div className="bg-black text-white p-6 rounded-xl mt-8 max-w-4xl mx-auto text-center">
          <p>{currentDescription}</p>
        </div>
      )}
    </div>
  );
};

export default Events;
