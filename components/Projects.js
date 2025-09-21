import { useState, useEffect } from "react";
import { FaTools, FaLaptopCode, FaGithub, FaExternalLinkAlt, FaPlayCircle } from "react-icons/fa";
import projects from "../components/project";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
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

  return (
    <section
      id="projects"
      className="py-12 lg:py-20"
      style={{
        background: "var(--bg-main)",
        fontFamily: "League Spartan",
        color: "var(--text-main)"
      }}
    >
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-10 text-white px-4">My Projects</h2>
      
      <div className="max-w-6xl mx-auto px-4 lg:px-5 flex flex-col lg:flex-row items-start">
        {/* Left Side - Horizontal Scrollable Thumbnails with improved mobile styling */}
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <h3 className="text-xl font-semibold mb-4 text-center lg:text-left text-gray-300">Select a Project</h3>
          <div className="relative">
            <div className="overflow-x-auto pb-3 lg:overflow-x-visible lg:pb-0">
              <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 min-w-max lg:min-w-full">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="relative flex-shrink-0 w-32 h-24 lg:w-full lg:h-28 cursor-pointer rounded-lg overflow-hidden shadow-lg border-2 transition-all duration-300 group"
                    onMouseEnter={() => !isMobile && setSelectedProject(project)}
                    onClick={() => setSelectedProject(project)}
                    style={{
                      borderColor: selectedProject.id === project.id ? '#2581c4' : 'rgba(255,255,255,0.1)',
                      backgroundImage: `url(${project.imageSrc})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  >
                    {/* Overlay with project name on hover/focus */}
                    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                      <p className="text-white text-sm font-medium text-center">{project.name}</p>
                    </div>
                    
                    {/* Selected project indicator */}
                    {selectedProject.id === project.id && (
                      <div className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Scroll indicator for mobile */}
            {isMobile && (
              <div className="text-center text-gray-500 text-xs mt-2">
                ← Scroll to view more projects →
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Project Details with improved mobile styling */}
        <div className="w-full lg:w-2/3 lg:mt-0 lg:ml-10 bg-gray-900 bg-opacity-50 rounded-xl p-5 lg:p-6 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start mb-6">
            <img
              src={selectedProject.imageSrc}
              alt={selectedProject.name}
              className="w-full lg:w-1/2 rounded-lg shadow-lg mb-4 lg:mb-0 lg:mr-6 object-cover"
              style={{ maxHeight: '300px' }}
            />
            
            <div className="flex-1">
              <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-white">{selectedProject.name}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{selectedProject.description}</p>
              
              {/* Links Section - Improved styling */}
              <div className="flex flex-wrap gap-3 mb-5">
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <FaGithub className="mr-2" />
                    Code
                  </a>
                )}
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </a>
                )}
                {selectedProject.demoLink && (
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <FaPlayCircle className="mr-2" />
                    Demo Video
                  </a>
                )}
              </div>
            </div>
          </div>
          
          {/* Roles Section */}
          <div className="mb-5 p-4 bg-gray-800 bg-opacity-50 rounded-lg">
            <div className="flex items-center mb-2">
              <FaTools className="text-blue-400 mr-2" />
              <p className="font-semibold text-lg text-white">My Roles:</p>
            </div>
            <p className="ml-6 text-gray-300">{selectedProject.roles}</p>
          </div>

          {/* Tech Stacks Section */}
          <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg">
            <div className="flex items-center mb-2">
              <FaLaptopCode className="text-green-400 mr-2" />
              <p className="font-semibold text-lg text-white">Technologies Used:</p>
            </div>
            <div className="ml-6">
              {/* Render tech stacks as badges for better visual appearance */}
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedProject.techStacks.split(', ').map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-gray-700 text-gray-200 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;