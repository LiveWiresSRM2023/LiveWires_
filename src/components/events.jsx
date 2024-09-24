import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { eventList } from '../data/eventData'; 


const Arrow = ({ onClick, direction }) => (
  <button
    className={`absolute top-1/2 ${direction === 'left' ? 'left-2' : 'right-2'} transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg`}
    onClick={onClick}
  >
    {direction === 'left' ? <i className="fas fa-chevron-left"></i> : <i className="fas fa-chevron-right"></i>}
  </button>
);

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentDescription, setCurrentDescription] = useState('');
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    arrows: false,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
      setCurrentDescription(eventList[next % eventList.length].description);
    },
    afterChange: (current) => {
      setCurrentSlide(current);
      setCurrentDescription(eventList[current].description);
    }
  };

  useEffect(() => {
    if (eventList.length > 0) {
      setCurrentDescription(eventList[0].description);
    }

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        sliderRef.current.slickNext();
      } else if (event.key === 'ArrowLeft') {
        sliderRef.current.slickPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="bg-[#001403] min-h-screen flex flex-col items-center justify-start p-0">
      <h1 className="text-white text-4xl font-bold mt-8 mb-12 text-center">Our Events</h1>
      <div className="relative w-full max-w-7xl px-4">
        <Arrow direction="left" onClick={() => sliderRef.current.slickPrev()} />
        <Slider ref={sliderRef} {...settings}>
          {eventList.map((event, index) => (
            <div key={event.id} className={`px-1 transition-transform duration-500 cursor-pointer ${currentSlide === index ? 'scale-110' : 'scale-90'}`}>
              <div className="relative rounded-2xl overflow-hidden">
                <img src={event.image} alt={`Event ${event.id}`} className={`w-full h-[400px] object-cover rounded-2xl transition-transform duration-500 ${currentSlide === index ? 'scale-105' : 'scale-90'}`} />
              </div>
            </div>
          ))}
        </Slider>
        <Arrow direction="right" onClick={() => sliderRef.current.slickNext()} />
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
