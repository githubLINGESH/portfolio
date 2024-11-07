import { useState } from "react";

const publishedProjects = [
  { name: 'GenE Learning Platform', link: 'https://gene-learning.com', description: 'AI-based e-learning with personalized tutoring.', image: 'ai.png',},
  { name: 'Construction Web Site', link: 'https://constructeaze-hdsc.onrender.com/', description: 'Comprehensive website for construction services.', image: 'dl.png', }
];

const PublishedProjects = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">Published Papers</h2>
        <div className="space-y-6">
          {publishedProjects.map((project, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Animated border container */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy" />
              
              {/* Main content container */}
              <div
                onClick={() => setClickedIndex(index)}
                className={`relative p-6 flex items-center bg-gray-950 rounded-lg cursor-pointer transform transition duration-300 group-hover:translate-y-1 ${
                  clickedIndex === index ? 'bg-gradient-to-r from-green-500 to-blue-600' : ''
                }`}
              >
                {/* Small Image */}
                <img
                  src={project.image}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="relative z-10">
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
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Add this to your tailwind.config.js
const tailwindConfig = {
  theme: {
    extend: {
      animation: {
        'gradient-xy': 'gradient-xy 3s linear infinite',
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': '0% 0%',
          },
          '25%': {
            'background-size': '400% 400%',
            'background-position': '100% 0%',
          },
          '50%': {
            'background-size': '400% 400%',
            'background-position': '100% 100%',
          },
          '75%': {
            'background-size': '400% 400%',
            'background-position': '0% 100%',
          },
        },
      },
    },
  },
};

export default PublishedProjects;