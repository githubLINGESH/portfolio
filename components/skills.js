import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';

const TechStack = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const techStack = [
    { 
      id: "flask",
      name: "Flask",
      icon: "/nodes/Group.png",
      position: { top: "10%", left: "35%" },
      category: "ML",
      usage: "Backend web framework for Python, used for serving ML models and creating REST APIs"
    },
    { 
      id: "tensorflow",
      name: "TensorFlow",
      icon: "/nodes/devicon_tensorflow.png",
      position: { top: "10%", left: "45%" },
      category: "ML",
      usage: "Deep learning framework for building and training neural networks"
    },
    { 
      id: "keras",
      name: "Keras",
      icon: "/nodes/devicon_keras.png",
      position: { top: "28%", left: "33%" },
      category: "ML",
      usage: "High-level neural network API, running on top of TensorFlow"
    },
    { 
      id: "pytorch",
      name: "PyTorch",
      icon: "/nodes/devicon_pytorch.png",
      position: { top: "10%", left: "54%" },
      category: "ML",
      usage: "Deep learning framework with strong GPU acceleration and dynamic computational graphs"
    },
    { 
      id: "fastapi",
      name: "FastAPI",
      icon: "/nodes/devicon_fastapi.png",
      position: { top: "57%", left: "45%" },
      category: "ML",
      usage: "Modern web framework for building APIs with Python, featuring automatic API documentation"
    },
    { 
      id: "scikit",
      name: "Scikit-learn",
      icon: "/nodes/devicon_scikitlearn.png",
      position: { top: "10%", left: "62%" },
      category: "ML",
      usage: "Machine learning library for classical ML algorithms and data preprocessing"
    },
    { 
      id: "matplotlib",
      name: "MatPlotlib",
      icon: "/nodes/devicon_matplotlib.png",
      position: { top: "55%", left: "58%" },
      category: "Database",
      usage: "Data visualization library for creating static, animated, and interactive plots"
    },
    { 
      id: "aws",
      name: "AWS",
      icon: "/nodes/skill-icons_aws-dark.png",
      position: {top: "28%", left: "41%" },
      category: "Cloud",
      usage: "Cloud platform for deploying and scaling applications and ML models"
    },
    { 
      id: "mongodb",
      name: "MongoDB",
      icon: "/nodes/skill-icons_mongodb.png",
      position: { top: "45%", left: "49%" },
      category: "Database",
      usage: "NoSQL database for flexible, document-based data storage"
    },
    { 
      id: "postgresql",
      name: "PostgreSQL",
      icon: "/nodes/devicon_postgresql.png",
      position: { top: "25%", left: "65%" },
      category: "Database",
      usage: "Relational database with strong data integrity and complex query support"
    },
    { 
      id: "git",
      name: "Git",
      icon: "/nodes/skill-icons_git.png",
      position: { top: "40%", left: "26%" },
      category: "DevOps",
      usage: "Version control system for tracking code changes and collaboration"
    },
    { 
      id: "github",
      name: "GitHub",
      icon: "/nodes/skill-icons_github-light.png",
      position: { top: "40%", left: "40.5%" },
      category: "DevOps",
      usage: "Platform for hosting Git repositories and managing development workflows"
    },
    { 
      id: "html",
      name: "HTML",
      icon: "/nodes/skill-icons_html.png",
      position: { top: "34.5%", left: "72.5%" },
      category: "Frontend",
      usage: "Markup language for structuring web content and applications"
    },
    { 
      id: "huggingface",
      name: "HuggingFace",
      icon: "/nodes/logos_hugging-face-icon.png",
      position: { top: "50%", left: "72%" },
      category: "ML",
      usage: "Platform for sharing and deploying state-of-the-art NLP models"
    },
    { 
      id: "javascript",
      name: "JavaScript",
      icon: "/nodes/vscode-icons_file-type-js-official.png",
      position: { top: "65%", left: "30%" },
      category: "Frontend",
      usage: "Programming language for building interactive web applications"
    },
    { 
      id: "node",
      name: "Node.js",
      icon: "/nodes/devicon_nodejs.png",
      position: { top: "74%", left: "41%" },
      category: "Backend",
      usage: "JavaScript runtime for building scalable server-side applications"
    },
    { 
      id: "react",
      name: "React",
      icon: "/nodes/vscode-icons_file-type-reactjs.png",
      position: { top: "74%", left: "55%" },
      category: "Frontend",
      usage: "JavaScript library for building user interfaces with reusable components"
    },
    { 
      id: "nextjs",
      name: "Next.js",
      icon: "/nodes/devicon_nextjs.png",
      position: { top: "82%", left: "68%" },
      category: "Frontend",
      usage: "React framework for production-grade applications with SSR and routing"
    }
  ];

  // Generate grid positions for tech icons
  const generateGridPositions = () => {
    const columns = 4;
    const rows = Math.ceil(techStack.length / columns);
    return techStack.map((tech, index) => ({
      ...tech,
      gridPosition: {
        x: (index % columns) * (100 / (columns - 1)),
        y: Math.floor(index / columns) * (100 / (rows - 1))
      }
    }));
  };

  const techStackWithPositions = generateGridPositions();

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  return (
    <div className="min-h-screen bg-black from-gray-900 via-black to-gray-900 relative py-16">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div 
          className="absolute w-[250px] h-[250px] rounded-full bg-purple-500/20 blur-3xl"
          style={{
            background: "#2581c4",
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-[300px] h-[300px] rounded-full bg-blue-500/20 blur-3xl"
          style={{
            left: `${mousePosition.x - 10}%`,
            top: `${mousePosition.y - 10}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.4s ease-out'
          }}
        />
      </div>

      {/* Content Container */}
      <div 
        className="relative z-10 max-w-6xl mx-auto px-4"
        onMouseMove={handleMouseMove}
      >
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Skills
        </h2>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
          {techStackWithPositions.map((tech) => (
            <motion.div
              key={tech.id}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="relative z-10 w-24 h-24 mx-auto"
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setHoveredSkill(tech)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Tech Icon Container */}
                <div className="w-full h-full rounded-xl bg-gray-800/50 backdrop-blur-md border border-gray-700/50 p-4 flex items-center justify-center group-hover:border-gray-500/50 transition-all duration-300">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                {/* Connection Lines (visible on hover) */}
                <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-px h-16 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"
                      style={{
                        left: `${50 + (i - 1) * 20}%`,
                        transform: 'translateX(-50%)',
                        animation: `lineFloat${i + 1} 2s ease-in-out infinite`
                      }}
                    />
                  ))}
                </div>

                {/* Tooltip Tooltip with conditional positioning **/}
                {hoveredSkill?.id === tech.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={`absolute ${
                    tech.position.left < window.innerWidth / 2 ? 'left-1/2 -translate-x-1/2' : 'right-1/2 translate-x-1/2'
                  } ${tech.position.top < window.innerHeight / 2 ? 'top-full mt-2' : 'bottom-full mb-2'} z-100 w-64`}
                >
                  <div className="bg-gray-800/90 backdrop-blur-lg rounded-lg p-4 shadow-xl border border-gray-700">
                    <h4 className="text-white font-semibold">{tech.name}</h4>
                    <span className="text-xs bg-gray-600 px-2 py-1 rounded-full inline-block mb-2">{tech.category}</span>
                    <p className="text-gray-300 text-sm">
                      {tech.usage}
                    </p>
                  </div>
                </motion.div>
              )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes lineFloat1 {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(-12px) translateX(-50%); }
        }
        @keyframes lineFloat2 {
          0%, 100% { transform: translateY(5px) translateX(-50%); }
          50% { transform: translateY(-8px) translateX(-50%); }
        }
        @keyframes lineFloat3 {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(-10px) translateX(-50%); }
        }

      `}</style>
    </div>
  );
};

export default TechStack;