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

// Research papers data
const publishedPapers = [
  { 
    name: 'Readmission Risk Prediction', 
    researchUrl: '', 
    downloadUrl: 'Readmission_Reasearch_paper_ieee.pdf', 
    description: '', 
    thumbnail: 'paper_2.png' 
  },
  { 
    name: 'Emotion Intelligent Multilingual voice translator(EIMVT)', 
    researchUrl: '', 
    downloadUrl: 'researchpaper.pdf', 
    description: 'Comprehensive website for construction services.', 
    thumbnail: 'paper_1.png' 
  }
];

const PublishedPapers = () => {
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
        {/* papers with hover, click, and shake effects */}
        <motion.div 
          className="space-y-6"
          onMouseMove={(e) => e.currentTarget.classList.add("shake")} // Add shake effect on mouse move
          onMouseLeave={(e) => e.currentTarget.classList.remove("shake")} // Remove shake on mouse leave
        >
          {publishedPapers.map((paper, index) => (
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
              {/* Paper Thumbnail */}
              <img
                src={paper.thumbnail}
                alt={paper.name}
                className="w-36 h-24 rounded-xl object-cover mr-4"
              />
              
              {/* Paper Details */}
              <div>
                <h3 className="text-2xl font-semibold text-white">{paper.name}</h3>
                <p className="mt-2 text-gray-300">{paper.description}</p>
                <div className="mt-4">
                  <a
                    href={paper.researchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-400 hover:text-blue-300 underline transition duration-200 mr-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Research Paper URL
                  </a>
                  <a
                    href={paper.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-400 hover:text-blue-300 underline transition duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Download Document
                  </a>
                </div>
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

export default PublishedPapers;
