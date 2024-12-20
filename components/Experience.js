import React, { useState } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Freelance Developer',
    company: 'Self-employed',
    duration: 'Ongoing',
    description: 'Worked on various projects including web development, data analysis, and machine learning integrations for multiple clients.',
    image: '/freelance.png',
  },
  // Add more experience items if needed
];

// Function to generate random gradient colors
const generateRandomGradient = () => {
  const colors = [
    'from-green-400 to-blue-500',
    'from-purple-500 to-pink-500',
    'from-red-500 to-yellow-500',
    'from-indigo-500 to-purple-500',
    'from-teal-400 to-cyan-500',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Experience = () => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [randomGradient, setRandomGradient] = useState('');

  // Handle click with random gradient
  const handleClick = (index) => {
    setRandomGradient(generateRandomGradient());
    setClickedIndex(index);

    // Revert back to normal after 500ms
    setTimeout(() => setClickedIndex(null), 500);
  };

  return (
    <section 
      className="py-20"
      style={{ background: "var(--bg-main)", fontFamily: "League Spartan", color: "var(--text-main)" }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>
        
        {/* Experience Cards with hover, click, and shake effects */}
        <motion.div 
          className="space-y-6"
          onMouseMove={(e) => e.currentTarget.classList.add("shake")} // Add shake effect on mouse move
          onMouseLeave={(e) => e.currentTarget.classList.remove("shake")} // Remove shake on mouse leave
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              onClick={() => handleClick(index)}
              className={`relative p-6 bg-zinc-900 rounded-lg cursor-pointer transform transition duration-300 group ${
                clickedIndex === index ? `bg-gradient-to-r ${randomGradient}` : 'hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500'
              }`}
              whileHover={{ scale: 1.05 }}
              animate={{ rotate: clickedIndex === index ? 5 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex items-center">
                <img
                  src={exp.image}
                  alt={`${exp.role} at ${exp.company}`}
                  className="w-16 h-16 rounded-xl object-contain"
                  />
                  <p className="absolute right-[5%] text-sm text-white-400 mb-2 ">{exp.duration}</p>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{exp.role} - {exp.company}</h3>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Shake effect styling */}
      <style jsx>{`
        @keyframes shake {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(0.3px, -0.2px);
          }
          50% {
            transform: translate(-0.3px, 0.2px);
          }
          75% {
            transform: translate(0.3px, 0.2px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        .shake {
          animation: shake 0.5s infinite; /* Increased duration for a more subtle shake */
        }
      `}</style>

    </section>
  );
};

export default Experience;
