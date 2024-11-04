import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tooltip from './ToolTip';

const TechStack = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const techStack = [
    { 
      id: "flask",
      name: "Flask",
      icon: "/nodes/Group.png",
      category: "ML",
      usage: "Backend web framework for Python, used for serving ML models and creating REST APIs"
    },
    { 
      id: "tensorflow",
      name: "TensorFlow",
      icon: "/nodes/devicon_tensorflow.png",
      category: "ML",
      usage: "Deep learning framework for building and training neural networks"
    },
    { 
      id: "keras",
      name: "Keras",
      icon: "/nodes/devicon_keras.png",
      category: "ML",
      usage: "High-level neural network API, running on top of TensorFlow"
    },
    { 
      id: "pytorch",
      name: "PyTorch",
      icon: "/nodes/devicon_pytorch.png",
      category: "ML",
      usage: "Deep learning framework with strong GPU acceleration"
    },
    { 
      id: "fastapi",
      name: "FastAPI",
      icon: "/nodes/devicon_fastapi.png",
      category: "Backend",
      usage: "Modern web framework for building APIs with Python"
    },
    { 
      id: "scikit",
      name: "Scikit-learn",
      icon: "/nodes/devicon_scikitlearn.png",
      category: "ML",
      usage: "Machine learning library for classical ML algorithms"
    },
    { 
      id: "matplotlib",
      name: "MatPlotlib",
      icon: "/nodes/devicon_matplotlib.png",
      category: "ML",
      usage: "Data visualization library for creating plots"
    },
    { 
      id: "aws",
      name: "AWS",
      icon: "/nodes/skill-icons_aws-dark.png",
      category: "Cloud",
      usage: "Cloud platform for deploying and scaling applications"
    },
    { 
      id: "mongodb",
      name: "MongoDB",
      icon: "/nodes/skill-icons_mongodb.png",
      category: "Database",
      usage: "NoSQL database for flexible data storage"
    },
    { 
      id: "postgresql",
      name: "PostgreSQL",
      icon: "/nodes/devicon_postgresql.png",
      category: "Database",
      usage: "Relational database with strong data integrity"
    },
    { 
      id: "git",
      name: "Git",
      icon: "/nodes/skill-icons_git.png",
      category: "DevOps",
      usage: "Version control system for tracking code changes"
    },
    { 
      id: "github",
      name: "GitHub",
      icon: "/nodes/skill-icons_github-light.png",
      category: "DevOps",
      usage: "Platform for hosting Git repositories"
    },
    { 
      id: "html",
      name: "HTML",
      icon: "/nodes/skill-icons_html.png",
      category: "Frontend",
      usage: "Markup language for structuring web content"
    },
    { 
      id: "huggingface",
      name: "HuggingFace",
      icon: "/nodes/logos_hugging-face-icon.png",
      category: "ML",
      usage: "Platform for sharing and deploying NLP models"
    },
    { 
      id: "javascript",
      name: "JavaScript",
      icon: "/nodes/vscode-icons_file-type-js-official.png",
      category: "Frontend",
      usage: "Programming language for web applications"
    },
    { 
      id: "node",
      name: "Node.js",
      icon: "/nodes/devicon_nodejs.png",
      category: "Backend",
      usage: "JavaScript runtime for server-side applications"
    },
    { 
      id: "react",
      name: "React",
      icon: "/nodes/vscode-icons_file-type-reactjs.png",
      category: "Frontend",
      usage: "JavaScript library for building user interfaces"
    },
    { 
      id: "nextjs",
      name: "Next.js",
      icon: "/nodes/devicon_nextjs.png",
      category: "Frontend",
      usage: "React framework for production applications"
    }
  ];

  // Group technologies by category
  const categories = {
    ML: {
      title: "Machine Learning",
      color: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/50",
      items: ["tensorflow", "pytorch", "keras", "scikit", "huggingface", "matplotlib"]
    },
    Backend: {
      title: "Backend & APIs",
      color: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-500/50",
      items: ["flask", "fastapi", "node"]
    },
    Cloud: {
      title: "Cloud & Infrastructure",
      color: "from-orange-500/20 to-yellow-500/20",
      borderColor: "border-orange-500/50",
      items: ["aws"]
    },
    Frontend: {
      title: "Frontend",
      color: "from-pink-500/20 to-red-500/20",
      borderColor: "border-pink-500/50",
      items: ["react", "nextjs", "html", "javascript"]
    },
    Database: {
      title: "Data Storage",
      color: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-500/50",
      items: ["mongodb", "postgresql"]
    },
    DevOps: {
      title: "Version Control",
      color: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-500/50",
      items: ["git", "github"]
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div className="min-h-screen bg-black relative py-16 overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-500/10 rounded-full blur-xl"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Interactive Mouse Follower */}
      <div className="absolute inset-0">
        <motion.div
          className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
          animate={{
            x: mousePosition.x + '%',
            y: mousePosition.y + '%',
          }}
          transition={{ type: "spring", damping: 30 }}
        />
      </div>

      {/* Main Content */}
      <div 
        className="relative z-10 max-w-7xl mx-auto px-4"
        onMouseMove={handleMouseMove}
      >
        <motion.h2 
          className="text-5xl font-bold text-center text-white mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(categories).map(([key, category], index) => (
            <motion.div
              key={key}
              className={`relative rounded-xl bg-gradient-to-br ${category.color} p-6 backdrop-blur-lg border ${category.borderColor}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((techId) => {
                  const tech = techStack.find(t => t.id === techId);
                  if (!tech) return null;
                  
                  return (
                    <motion.div
                      key={tech.id}
                      className="relative group"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div 
                        className="p-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 
                                 hover:border-gray-500 transition-all duration-300 flex flex-col items-center gap-2"
                        onMouseEnter={() => setHoveredSkill(tech)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                        <span className="text-sm text-gray-300">{tech.name}</span>
                      </div>

                      {/* Render Tooltip with Portal */}
                      {hoveredSkill?.id === tech.id && (
                        <Tooltip position={mousePosition}>
                          <p className="text-sm text-gray-300">{tech.usage}</p>
                        </Tooltip>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
      `}</style>
    </div>
  );
};

export default TechStack;