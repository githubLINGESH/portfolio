import React, { useState } from 'react';

const experiences = [
  {
    role: 'Backend Developer',
    company: 'Healthcare Analytics Inc.',
    duration: 'Jan 2022 - Dec 2022',
    description: 'Built scalable backend solutions for patient readmission predictions.',
    image: 'ai.png',
  },
  {
    role: 'Full-Stack Developer',
    company: 'Vcom eCommerce',
    duration: 'Jan 2023 - Present',
    description: 'Developed language-based product recommendation engine for an AI-driven eCommerce platform.',
    image: 'dl.png',
  }
];

const Experience = () => {
  // State to track which card is clicked
  const [clickedIndex, setClickedIndex] = useState(null);

  return (
    <section
      id="experience"
      className="py-20"
      style={{
        background: "var(--bg-main)",
        fontFamily: "League Spartan",
        color: "var(--text-main)"
      }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative">
              {/* Animated border container */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy" />
              
              {/* Main content container */}
              <div
                onClick={() => setClickedIndex(index)}
                className={`relative flex items-center gap-4 p-6 bg-gray-950 rounded-lg cursor-pointer transform transition duration-300 group-hover:translate-y-1 ${
                  clickedIndex === index ? 'bg-gradient-to-r from-green-500 to-blue-600' : ''
                }`}
              >
                {/* Small Image */}
                <img
                  src={exp.image}
                  alt={`${exp.role} at ${exp.company}`}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                
                {/* Text Content */}
                <div>
                  <h3 className="text-2xl font-semibold">{exp.role} - {exp.company}</h3>
                  <p className="mt-2">{exp.duration}</p>
                  <p className="mt-2">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
