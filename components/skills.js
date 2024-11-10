import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tooltip from './ToolTip';

const TechStack = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const techStack = [
    { id: "flask", name: "Flask", icon: "/nodes/Group.png", category: "ML", usage: "Backend web framework for Python, used for serving ML models and creating REST APIs", projects: ["Readmission Risk Prediction Model", "Vcom: Conversational AI eCommerce Platform"] },
    { id: "tensorflow", name: "TensorFlow", icon: "/nodes/devicon_tensorflow.png", category: "ML", usage: "Deep learning framework for building and training neural networks", projects: ["GenE: AI-Based E-Learning Platform with Personalized Tutoring"] },
    { id: "keras", name: "Keras", icon: "/nodes/devicon_keras.png", category: "ML", usage: "High-level neural network API, running on top of TensorFlow", projects: ["GenE: AI-Based E-Learning Platform with Personalized Tutoring"] },
    { id: "pytorch", name: "PyTorch", icon: "/nodes/devicon_pytorch.png", category: "ML", usage: "Deep learning framework with strong GPU acceleration", projects: ["Emotional Intelligence Multilingual Voice Translator (EIMVT)"] },
    { id: "fastapi", name: "FastAPI", icon: "/nodes/devicon_fastapi.png", category: "Backend", usage: "Modern web framework for building APIs with Python", projects: ["Readmission Risk Prediction Model", "Vcom: Conversational AI eCommerce Platform"] },
    { id: "scikit", name: "Scikit-learn", icon: "/nodes/devicon_scikitlearn.png", category: "ML", usage: "Machine learning library for classical ML algorithms", projects: ["Readmission Risk Prediction Model"] },
    { id: "matplotlib", name: "MatPlotlib", icon: "/nodes/devicon_matplotlib.png", category: "ML", usage: "Data visualization library for creating plots", projects: ["Readmission Risk Prediction Model"] },
    { id: "aws", name: "AWS", icon: "/nodes/skill-icons_aws-dark.png", category: "Cloud", usage: "Cloud platform for deploying and scaling applications", projects: ["Vcom: Conversational AI eCommerce Platform"] },
    { id: "mongodb", name: "MongoDB", icon: "/nodes/skill-icons_mongodb.png", category: "Database", usage: "NoSQL database for flexible data storage", projects: ["Vcom: Conversational AI eCommerce Platform", "Construction Web Site"] },
    { id: "postgresql", name: "PostgreSQL", icon: "/nodes/devicon_postgresql.png", category: "Database", usage: "Relational database with strong data integrity", projects: ["Readmission Risk Prediction Model"] },
    { id: "git", name: "Git", icon: "/nodes/skill-icons_git.png", category: "DevOps", usage: "Version control system for tracking code changes", projects: ["Readmission Risk Prediction Model", "Vcom: Conversational AI eCommerce Platform", "GenE: AI-Based E-Learning Platform with Personalized Tutoring", "Emotional Intelligence Multilingual Voice Translator (EIMVT)", "Construction Web Site"] },
    { id: "github", name: "GitHub", icon: "/nodes/skill-icons_github-light.png", category: "DevOps", usage: "Platform for hosting Git repositories", projects: ["Readmission Risk Prediction Model", "Vcom: Conversational AI eCommerce Platform", "GenE: AI-Based E-Learning Platform with Personalized Tutoring", "Emotional Intelligence Multilingual Voice Translator (EIMVT)", "Construction Web Site"] },
    { id: "html", name: "HTML", icon: "/nodes/skill-icons_html.png", category: "Frontend", usage: "Markup language for structuring web content", projects: ["Vcom: Conversational AI eCommerce Platform", "GenE: AI-Based E-Learning Platform with Personalized Tutoring", "Construction Web Site"] },
    { id: "huggingface", name: "HuggingFace", icon: "/nodes/logos_hugging-face-icon.png", category: "ML", usage: "Platform for sharing and deploying NLP models", projects: ["Vcom: Conversational AI eCommerce Platform"] },
    { id: "javascript", name: "JavaScript", icon: "/nodes/vscode-icons_file-type-js-official.png", category: "Frontend", usage: "Programming language for web applications", projects: ["Vcom: Conversational AI eCommerce Platform", "GenE: AI-Based E-Learning Platform with Personalized Tutoring", "Construction Web Site"] },
    { id: "node", name: "Node.js", icon: "/nodes/devicon_nodejs.png", category: "Backend", usage: "JavaScript runtime for server-side applications", projects: ["Vcom: Conversational AI eCommerce Platform"] },
    { id: "react", name: "React", icon: "/nodes/vscode-icons_file-type-reactjs.png", category: "Frontend", usage: "JavaScript library for building user interfaces", projects: ["Vcom: Conversational AI eCommerce Platform", "GenE: AI-Based E-Learning Platform with Personalized Tutoring", "Construction Web Site"] },
    { id: "nextjs", name: "Next.js", icon: "/nodes/devicon_nextjs.png", category: "Frontend", usage: "React framework for production applications", projects: ["GenE: AI-Based E-Learning Platform with Personalized Tutoring"] }
  ];

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative py-16 overflow-hidden"
      style={{ background: "var(--bg-main)", fontFamily: "League Spartan", color: "var(--text-main)" }}
      onMouseMove={handleMouseMove}
    >
      {/* Gradient cursor hover effect */}
      <motion.div
        className="fixed pointer-events-none z-20 rounded-full"
        style={{
          width: hoveredSkill ? 180 : 120,
          height: hoveredSkill ? 180 : 120,
          top: mousePosition.y - (hoveredSkill ? 90 : 60),
          left: mousePosition.x - (hoveredSkill ? 90 : 60),
          background: "radial-gradient(circle at center, rgba(58, 142, 255, 0.4), rgba(186, 85, 211, 0.2))",
          opacity: hoveredSkill ? 0.5 : 0.3,
          filter: 'blur(45px)',
          transition: 'width 0.2s, height 0.2s, opacity 0.2s',
        }}
        animate={{
          x: mousePosition.x - (hoveredSkill ? 90 : 60),
          y: mousePosition.y - (hoveredSkill ? 90 : 60),
        }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-20">
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.id}
              className="relative group rounded-xl shadow-lg p-6 border border-transparent bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-lg overflow-hidden transform transition-transform hover:scale-105"
              style={{
                borderColor: hoveredSkill?.id === tech.id ? 'rgba(58, 142, 255, 0.8)' : 'transparent',
                boxShadow: hoveredSkill?.id === tech.id ? '0 4px 20px rgba(58, 142, 255, 0.3)' : 'none',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div
                onMouseEnter={() => setHoveredSkill(tech)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="relative flex flex-col items-center gap-2"
              >
                <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain" />
                <span className="text-sm font-semibold text-gray-300">{tech.name}</span>
              </div>

              {/* Tooltip with Project Information */}
              {hoveredSkill?.id === tech.id && (
                <Tooltip position={mousePosition}>
                  <h3 className="font-bold text-lg">{tech.name}</h3>
                  <p>{tech.usage}</p>
                  <div className="mt-2 text-sm">
                    <strong>Projects:</strong>
                    <ul className="list-disc pl-4">
                      {tech.projects.map((project, idx) => (
                        <li key={idx}>{project}</li>
                      ))}
                    </ul>
                  </div>
                </Tooltip>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
