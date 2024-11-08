import { useState } from "react";
import { motion } from 'framer-motion';

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

const publishedProjects = [
  { 
    name: 'GenE Learning Platform', 
    link: 'https://gene-learning.com', 
    description: 'AI-based e-learning with personalized tutoring.', 
    image: 'ai.png' 
  },
  { 
    name: 'Construction Web Site', 
    link: 'https://constructeaze-hdsc.onrender.com/', 
    description: 'Comprehensive website for construction services.', 
    image: 'dl.png' 
  }
];

const PublishedProjects = () => {
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
        <h2 className="text-4xl font-bold text-center mb-10 text-white">Published Papers</h2>
        {/* projects papers with hover, click, and shake effects */}
          <motion.div 
            className="space-y-6"
            onMouseMove={(e) => e.currentTarget.classList.add("shake")} // Add shake effect on mouse move
            onMouseLeave={(e) => e.currentTarget.classList.remove("shake")} // Remove shake on mouse leave
          >
          {publishedProjects.map((project, index) => (
             <motion.div
             key={index}
             onClick={() => handleClick(index)}
             className={`relative flex items-center p-6 bg-zinc-900 rounded-lg cursor-pointer transform transition duration-300 group ${
               clickedIndex === index ? `bg-gradient-to-r ${randomGradient}` : 'hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500'
             }`}
             whileHover={{ scale: 1.05 }}
             animate={{ rotate: clickedIndex === index ? 5 : 0 }}
             transition={{ type: "spring", stiffness: 300, damping: 20 }}
           >
              
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-16 h-16 rounded-xl object-cover mr-4"
                />
                
                {/* Project Details */}
                <div>
                  <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-2 text-gray-300">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-blue-400 hover:text-blue-300 underline transition duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project
                  </a>
                </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Shake effect styling */}
      <style jsx>{`
        @keyframes shake {
          0% { transform: translate(0, 0); }
          25% { transform: translate(1px, -0.5px); }
          50% { transform: translate(-1px, 0.5px); }
          75% { transform: translate(1px, 0.5px); }
          100% { transform: translate(0, 0); }
        }

        .shake {
          animation: shake 0.3s infinite;
        }
      `}</style>
    </section>
  );
};

// Tailwind Configuration for Gradient Animation
const tailwindConfig = {
  theme: {
    extend: {
      animation: {
        'gradient-xy': 'gradient-xy 3s ease infinite',
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': { 'background-position': '0% 0%' },
          '25%': { 'background-position': '100% 0%' },
          '50%': { 'background-position': '100% 100%' },
          '75%': { 'background-position': '0% 100%' },
        },
      },
    },
  },
};

export default PublishedProjects;
