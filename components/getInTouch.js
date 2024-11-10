import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaInstagram, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [botResponse, setBotResponse] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const handleBotQuery = async () => {
    if (!userMessage.trim()) return;
    
    try {
      const response = await axios.post('http://localhost:5000/api/chat', { query: userMessage });
      setBotResponse(response.data.answer);
    } catch (error) {
      console.error('Error fetching bot response:', error);
    }
  };

  return (
    <section id="ContactSection" className="py-20" style={{ background: "var(--bg-main)", fontFamily: "League Spartan", color: "var(--text-main)" }}>
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Client Review Section */}
        <div className="text-center mb-10">
          <p className="text-xl">Here you can add some client reviews about your work.</p>
        </div>

        {/* Bot and Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Ask My Bot Section */}
          <motion.div 
            className="p-10 rounded-lg shadow-lg bg-zinc-900 text-white"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-3xl font-bold mb-4">Ask My Bot</h3>
            <p className="mb-4 text-lg">Have questions about me? Ask my bot!</p>
            <div className="mt-6 flex flex-col items-center">
              <textarea
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Type your question here..."
                className="w-full p-2 rounded bg-gray-550 text-white mb-4 resize-none"
                rows="2"
              />
              <button 
                onClick={handleBotQuery}
                className="px-6 py-3 text-white font-bold rounded-lg bg-gradient-to-r from-teal-400 to-cyan-500 transition"
                style={{ backgroundColor: "#2581c4" }}
              >
                Chat with Bot
              </button>
              {botResponse && (
                <motion.div 
                  className="mt-6 p-4 bg-gray-800 rounded-lg text-left text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p><strong>Bot:</strong> {botResponse}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
          
          {/* Get in Touch Section */}
          <motion.div 
            className="p-10 rounded-lg shadow-lg bg-zinc-900 text-white"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
            <p className="mb-4 text-lg">Connect with me on social media or leave a message.</p>
            <div className="flex space-x-4 mt-6">
              {/* Social Media Icons */}
              <a href="https://www.linkedin.com/in/lingeshwaran-g-aa158a262/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaLinkedin/>
              </a>
              <a href="https://github.com/githubLINGESH/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaGithub/>
              </a>
              <a href="https://x.com/Lingesh03552509" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaTwitter/>
              </a>
              <a href="https://www.instagram.com/learnwithlingesh/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaInstagram/>
              </a>
            </div>
            <div className="mt-6">
              <button 
                onClick={() => setIsFormVisible(!isFormVisible)}
                className="px-6 py-3 text-white font-bold rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-500 transition"
              >
                {isFormVisible ? 'Close Form' : 'Get in Touch'}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Contact Form Section - Toggle Visibility */}
        {isFormVisible && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 p-10 bg-gray-800 rounded-lg shadow-lg max-w-xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Contact Me</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400">Name</label>
                <input type="text" id="name" name="name" className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none text-white" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400">Email</label>
                <input type="email" id="email" name="email" className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none text-white" />
              </div>
              <div>
                <label htmlFor="comments" className="block text-sm text-gray-400">Comments</label>
                <textarea id="comments" name="comments" rows="4" className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none text-white"></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
