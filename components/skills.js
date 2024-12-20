import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const NeuralNetworkTechStack = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [hoveredTech, setHoveredTech] = useState(null);
  const containerRef = useRef(null);
  
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
    { id: "git", name: "Git", icon: "/nodes/skill-icons_git.png", category: "DevOps", usage: "Version control system for tracking code changes", projects: ["Readmission Risk Prediction Model", "Vcom: Conversational AI eCommerce Platform"] },
    { id: "github", name: "GitHub", icon: "/nodes/skill-icons_github-light.png", category: "DevOps", usage: "Platform for hosting Git repositories", projects: ["Readmission Risk Prediction Model", "Vcom: Conversational AI eCommerce Platform"] },
    { id: "html", name: "HTML", icon: "/nodes/skill-icons_html.png", category: "Frontend", usage: "Markup language for structuring web content", projects: ["Vcom: Conversational AI eCommerce Platform", "Construction Web Site"] },
    { id: "huggingface", name: "HuggingFace", icon: "/nodes/logos_hugging-face-icon.png", category: "ML", usage: "Platform for sharing and deploying NLP models", projects: ["Vcom: Conversational AI eCommerce Platform"] },
    { id: "javascript", name: "JavaScript", icon: "/nodes/vscode-icons_file-type-js-official.png", category: "Frontend", usage: "Programming language for web applications", projects: ["Vcom: Conversational AI eCommerce Platform", "Construction Web Site"] },
    { id: "node", name: "Node.js", icon: "/nodes/devicon_nodejs.png", category: "Backend", usage: "JavaScript runtime for server-side applications", projects: ["Vcom: Conversational AI eCommerce Platform"] },
    { id: "react", name: "React", icon: "/nodes/vscode-icons_file-type-reactjs.png", category: "Frontend", usage: "JavaScript library for building user interfaces", projects: ["Vcom: Conversational AI eCommerce Platform", "Construction Web Site"] },
    { id: "nextjs", name: "Next.js", icon: "/nodes/devicon_nextjs.png", category: "Frontend", usage: "React framework for production applications", projects: ["GenE: AI-Based E-Learning Platform with Personalized Tutoring"] }
  ];

  // Function to calculate node positions in a force-directed layout
  const calculateNodePositions = (width, height) => {
    const categoryLayers = {
      'Frontend': 0,
      'Backend': 1,
      'ML': 2,
      'Database': 3,
      'Cloud': 4,
      'DevOps': 5
    };

    return techStack.map((tech, index) => {
      const layer = categoryLayers[tech.category];
      const itemsInLayer = techStack.filter(t => t.category === tech.category).length;
      const itemIndex = techStack.filter((t, i) => t.category === tech.category && i < index).length;
      
      const x = (width * (layer + 1)) / (Object.keys(categoryLayers).length + 1);
      const y = (height * (itemIndex + 1)) / (itemsInLayer + 1);
      
      return {
        ...tech,
        x,
        y
      };
    });
  };

  // Function to create edges between related nodes
  const createEdges = (nodes) => {
    const edges = [];
    
    // Connect nodes that share projects
    nodes.forEach((node1, i) => {
      nodes.forEach((node2, j) => {
        if (i < j) {
          const sharedProjects = node1.projects.filter(p => node2.projects.includes(p));
          if (sharedProjects.length > 0) {
            edges.push({
              id: `${node1.id}-${node2.id}`,
              source: node1.id,
              target: node2.id,
              strength: sharedProjects.length
            });
          }
        }
      });
    });

    return edges;
  };

  useEffect(() => {
    const updateLayout = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const newNodes = calculateNodePositions(width, height);
        const newEdges = createEdges(newNodes);
        setNodes(newNodes);
        setEdges(newEdges);
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-black to-black"
      style={{
        background: "var(--bg-main)",
        fontFamily: "League Spartan",
        color: "var(--text-main)"
      }}
    >
      <div className="max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-white">
          My Skills - Neural Network
        </h2>
        
        <div className="relative h-[140vh]">
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              {/* Gradient definition */}
              <linearGradient id="edge-gradient" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2581c4">
                  <animate
                    attributeName="offset"
                    values="0;1;0"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#1bcf54">
                  <animate
                    attributeName="offset"
                    values="1;0;1"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
              
              {/* Enhanced glow filter */}
              <filter id="custom-glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feFlood floodColor="#2581c4" result="blue-flood" />
                <feFlood floodColor="#1bcf54" result="green-flood" />
                <feComposite in="blue-flood" in2="coloredBlur" operator="in" result="blue-glow" />
                <feComposite in="green-flood" in2="coloredBlur" operator="in" result="green-glow" />
                <feMerge>
                  <feMergeNode in="blue-glow" />
                  <feMergeNode in="green-glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {edges.map((edge) => {
              const sourceNode = nodes.find(n => n.id === edge.source);
              const targetNode = nodes.find(n => n.id === edge.target);
              const isHighlighted = hoveredTech && 
                (edge.source === hoveredTech.id || edge.target === hoveredTech.id);
              
              return sourceNode && targetNode && (
                <g key={edge.id}>
                  {/* Glowing background line */}
                  <motion.line
                    key={`glow-${edge.id}`}
                    x1={sourceNode.x}
                    y1={sourceNode.y}
                    x2={targetNode.x}
                    y2={targetNode.y}
                    stroke="url(#edge-gradient)"
                    strokeWidth={isHighlighted ? 4 : 2}
                    strokeOpacity={isHighlighted ? 0.6 : 0.2}
                    filter="url(#custom-glow)"
                    initial={{ pathLength: 0 }}
                    animate={{ 
                      pathLength: 1,
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    {/* Animated dash array for flowing effect */}
                    <animate
                      attributeName="strokeDasharray"
                      values="0,1000;1000,0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </motion.line>
                  
                  {/* Main connection line with gradient */}
                  <motion.line
                    x1={sourceNode.x}
                    y1={sourceNode.y}
                    x2={targetNode.x}
                    y2={targetNode.y}
                    stroke="url(#edge-gradient)"
                    strokeWidth={isHighlighted ? 2 : 1}
                    strokeOpacity={isHighlighted ? 0.8 : 0.3}
                    initial={{ pathLength: 0 }}
                    animate={{ 
                      pathLength: 1,
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    {/* Animated dash array for flowing effect */}
                    <animate
                      attributeName="strokeDasharray"
                      values="0,1000;1000,0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </motion.line>
                </g>
              );
            })}
          </svg>

          {/* Node rendering remains the same but with updated hover effects */}
          {nodes.map((tech) => (
            <motion.div
              key={tech.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ 
                left: tech.x - 30,
                top: tech.y - 30,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoveredTech(tech)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className={`relative p-3 rounded-lg transition-all duration-300 ${
                hoveredTech?.id === tech.id ? 'scale-125 bg-gradient-to-r hover:from-black hover:to-green-400 shadow-lg' : ''
              }`}>
                <img 
                  src={tech.icon} 
                  alt={tech.name}
                  className="w-10 h-10 object-contain"
                />
                <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap transition-opacity ${
                  hoveredTech?.id === tech.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  {tech.name}
                </div>
              </div>

              {hoveredTech?.id === tech.id && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-8 p-4 rounded-lg shadow-xl z-10 w-64 
                                bg-gradient-to-r from-blue-500 to-green-500"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-300 mb-2">{tech.usage}</p>
                  <div className="text-xs text-black">
                    <strong className="text-gray-300">Projects:</strong>
                    <ul className="list-disc pl-4 mt-1">
                      {tech.projects.map((project, idx) => (
                        <li key={idx}>{project}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NeuralNetworkTechStack;