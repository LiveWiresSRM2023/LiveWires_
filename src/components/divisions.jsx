import React, { useState } from 'react';
import Tech from "../assets/Tech.png";  // Example image

const teams = [
  { name: 'Tech Team', description: 'This is the Tech Team. We handle all technical aspects.' },
  { name: 'Creative Team', description: 'This is the Creative Team. We handle design and creativity.' },
  { name: 'IoT Team', description: 'This is the IoT Team. We work on IoT projects.' },
  { name: 'PR Team', description: 'This is the PR Team. We manage public relations and communication.' },
  // Add more teams as needed
];

const TeamsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center">
      <div className="p-10 w-full text-center">
        {/* Our Divisions Text */}
        <h1 className="text-white text-4xl font-bold mb-10">
          Our Divisions
        </h1>

        {/* Boxes */}
        <div className="flex space-x-4 justify-center">
          {teams.map((team, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative flex-shrink-0 transition-all duration-300 
                          ${hoveredIndex === index ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-200'}  
                          ${hoveredIndex === index ? 'w-[420px]' : 'w-[250px]'}  
                          h-[550px] rounded-lg overflow-hidden transform 
                          ${hoveredIndex !== null && hoveredIndex !== index ? 'scale-95' : 'scale-100'}`}
            >
              {/* Background Image */}
              <img
                src={Tech} // Replace this with your actual image path
                alt={`Team ${team.name}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 
                            ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}
              />

              {/* Team Name always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-10">
                <span className="text-white text-lg font-semibold">
                  {team.name}
                </span>
              </div>

              {/* Hover Description */}
              <div
                className={`absolute inset-0 flex items-center justify-center text-center transition-opacity duration-300 p-4 
                            ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
              >
                <p className="text-white text-xl font-bold">  {/* Bright text for visibility */}
                  {team.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamsSection;
