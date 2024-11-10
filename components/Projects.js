import { useState } from "react";
import { FaTools, FaLaptopCode } from "react-icons/fa"; 
import projects from "../components/project";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]); // Default to the first project

  return (
    <section
      id="projects"
      className="py-20"
      style={{
        background: "var(--bg-main)",
        fontFamily: "League Spartan",
        color: "var(--text-main)"
      }}
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-white">Projects</h2>
      <div className="max-w-6xl mx-auto px-5 flex flex-col lg:flex-row items-start">
        {/* Left Side - Horizontal Scrollable Thumbnails */}
        <div className="w-full lg:w-1/3 overflow-x-auto whitespace-nowrap space-x-4 flex lg:block">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`relative inline-block lg:block w-40 h-28 cursor-pointer rounded-lg overflow-hidden shadow-lg border-2 ${
                selectedProject.id === project.id ? 'border-blue-500' : 'border-transparent'
              }`}
              style={{
                backgroundImage: `url(${project.imageSrc})`,
                backgroundSize: 'contain',
                backgroundRepeat : 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay for Hover Effect */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-70 transition duration-300 text-white"
              >
                <span className="opacity-0 hover:opacity-100 text-sm font-bold text-center p-2">
                  {project.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Project Details */}
        <div className="w-full lg:w-2/3 mt-10 lg:mt-0 lg:ml-10">
          <img
            src={selectedProject.imageSrc}
            alt={selectedProject.name}
            className="w-full rounded-lg shadow-lg mb-6"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
          <h3 className="text-3xl font-bold mb-2">{selectedProject.name}</h3>
          <p className="mb-4">{selectedProject.description}</p>
          
          {/* Roles Section */}
          <div className="flex items-center mt-4">
            <FaTools className="text-blue-500 mr-2" />
            <p className="font-semibold text-lg">Roles:</p>
          </div>
          <p className="ml-6 text-base text-gray-300">{selectedProject.roles}</p>

          {/* Tech Stacks Section */}
          <div className="flex items-center mt-6">
            <FaLaptopCode className="text-green-500 mr-2" />
            <p className="font-semibold text-lg">Tech Stacks:</p>
          </div>
          <p className="ml-6 text-base text-gray-300">{selectedProject.techStacks}</p>

          {/* Links Section */}
          <div className="mt-4">
            {selectedProject.githubLink && (
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-400 mr-4"
              >
                GitHub
              </a>
            )}
            {selectedProject.liveLink && (
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-400 mr-4"
              >
                Live Demo
              </a>
            )}
            {selectedProject.demoLink && (
              <a
                href={selectedProject.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-400"
              >
                Demo Video
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;