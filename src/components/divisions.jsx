//  assigned to nikitha 

import React, { useState } from 'react';
import Tech from "../assets/Tech.png";  // Replace with your actual image paths
import Preview from "../assets/Preview.png";  // Replace with your actual preview image paths

const teams = [
  { name: 'Tech Team', image: Tech, preview: Preview },
  { name: 'Creative Team', image: Tech, preview: Preview },
  { name: 'IoT Team', image: Tech, preview: Preview },
  { name: 'PR Team', image: Tech, preview: Preview },
  // Add more teams as needed
];

const TeamsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="overflow-x-auto bg-neutral-900 h-screen flex flex-col items-center justify-center">
      <div className="relative p-10 w-full text-center">
        {/* Our Divisions Text */}
        <h1 className="text-white text-4xl font-bold mb-10">
          Our Divisions
        </h1>

        {/* Image Boxes */}
        <div className="flex space-x-4 justify-center">
          {teams.map((team, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative flex-shrink-0 transition-all duration-300 
                          ${hoveredIndex === index ? 'w-[400px]' : 'w-[200px]'} 
                          h-[550px] bg-gray-200 rounded-lg overflow-hidden transform 
                          ${hoveredIndex !== null && hoveredIndex !== index ? 'scale-95' : 'scale-100'}`}
            >
              {/* Preview Image with Gradient Overlay */}
              <div className={`relative w-full h-full transition-opacity duration-300 
                               ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                <img
                  src={team.preview}
                  alt={`Preview ${team.name}`}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-60" />
              </div>
              
              {/* Main Image */}
              <img
                src={team.image}
                alt={team.name}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300
                            ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
              />

              <div className="absolute bottom-0 left-0 right-0 p-4 text-center bg-black bg-opacity-50">
                <span className="text-white text-lg font-semibold">
                  {team.name}
                </span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamsSection;
