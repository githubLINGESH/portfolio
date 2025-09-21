import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { FaFilePdf, FaExternalLinkAlt, FaDownload } from "react-icons/fa";

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
    description: 'A Robust Software to reduce the readmission risk and predict through ML', 
    thumbnail: 'paper_2.png' 
  },
  { 
    name: 'Emotion Intelligent Multilingual Voice Translator (EIMVT)', 
    researchUrl: '', 
    downloadUrl: 'researchpaper.pdf', 
    description: 'Multilingual translator system built with Deep learning', 
    thumbnail: 'paper_1.png' 
  }
];

const PublishedPapers = () => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [randomGradient, setRandomGradient] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount and on resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle click with random gradient
  const handleClick = (index) => {
    setRandomGradient(generateRandomGradient());
    setClickedIndex(index);

    // Revert back to normal after 500ms
    setTimeout(() => setClickedIndex(null), 500);
  };

  return (
    <section 
      className="py-12 sm:py-20"
      style={{ background: "var(--bg-main)", fontFamily: "League Spartan", color: "var(--text-main)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-5">
        {/* Mobile responsive heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-10 text-white px-2">
          Published Research Papers
        </h2>
        
        {/* Papers with hover, click, and shake effects */}
        <motion.div 
          className="space-y-4 sm:space-y-6"
          onMouseMove={(e) => {
            // Only add shake on non-mobile devices
            if (!isMobile) {
              e.currentTarget.classList.add("shake");
            }
          }}
          onMouseLeave={(e) => e.currentTarget.classList.remove("shake")}
        >
          {publishedPapers.map((paper, index) => (
            <motion.div
              key={index}
              onClick={() => handleClick(index)}
              className={`relative p-4 sm:p-6 bg-zinc-900 rounded-lg cursor-pointer transform transition duration-300 group ${
                clickedIndex === index ? `bg-gradient-to-r ${randomGradient}` : 'hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500'
              }`}
              whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
              animate={{ rotate: clickedIndex === index ? 5 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Mobile: Vertical layout, Desktop: Horizontal layout */}
              <div className="flex flex-col sm:flex-row sm:items-center">
                {/* Paper Thumbnail */}
                <div className="flex justify-center sm:justify-start mb-4 sm:mb-0 sm:mr-4">
                  <div className="relative">
                    <img
                      src={paper.thumbnail}
                      alt={paper.name}
                      className="w-32 h-20 sm:w-40 sm:h-24 lg:w-50 lg:h-32 rounded-xl object-cover shadow-md"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
                  </div>
                </div>
                
                {/* Paper Details */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2 leading-tight">
                    {paper.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed px-2 sm:px-0">
                    {paper.description}
                  </p>
                  
                  {/* Links with improved styling */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
                    {paper.researchUrl && (
                      <a
                        href={paper.researchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center sm:justify-start text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm sm:text-base py-1 px-3 rounded-md bg-blue-900/30 hover:bg-blue-900/50"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt className="mr-2 text-sm" />
                        Research Paper
                      </a>
                    )}
                    {paper.downloadUrl && (
                      <a
                        href={paper.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center sm:justify-start text-green-400 hover:text-green-300 transition-colors duration-200 text-sm sm:text-base py-1 px-3 rounded-md bg-green-900/30 hover:bg-green-900/50"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaDownload className="mr-2 text-sm" />
                        Download PDF
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Subtle decorative element */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to action for mobile */}
        {isMobile && (
          <p className="text-center text-gray-400 mt-8 text-sm">
            Tap on any paper to view details
          </p>
        )}
      </div>

      {/* Subtle shake effect styling - only for larger screens */}
      <style jsx>{`
        @keyframes shake {
          0% { transform: translate(0, 0); }
          25% { transform: translate(0.5px, -0.2px); }
          50% { transform: translate(-0.5px, 0.2px); }
          75% { transform: translate(0.5px, 0.2px); }
          100% { transform: translate(0, 0); }
        }

        .shake {
          animation: shake 0.2s infinite;
        }

        /* Mobile specific styles */
        @media (max-width: 640px) {
          .shake {
            animation: none; /* Disable shake on mobile */
          }
        }
      `}</style>
    </section>
  );
};

export default PublishedPapers;