import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { FaInstagram, FaGithub, FaTwitter, FaLinkedin, FaMicrophone, FaPaperPlane } from 'react-icons/fa';
import { Loader2 } from 'lucide-react';

const ContactSection = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [botResponse, setBotResponse] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Voice recognition not supported in your browser.');
      return;
    }
    
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;
    
    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setUserMessage(transcript);
      setIsListening(false);
      handleBotQuery(transcript);
    };
    
    recognition.onerror = (err) => {
      console.error('Speech recognition error:', err);
      setIsListening(false);
    };
    recognition.onend = () => setIsListening(false);

    recognition.start();
  };

  const handleBotQuery = async (message = userMessage) => {
    if (!message.trim()) return;
    
    setIsLoading(true);
    const newMessage = { type: 'user', content: message };
    setChatHistory(prev => [...prev, newMessage]);
    
    try {
      const response = await axios.post('http://localhost:5000/api/chat', { query: message });
      const botMessage = { type: 'bot', content: response.data.answer };
      setChatHistory(prev => [...prev, botMessage]);
      setBotResponse(response.data.answer);
      setUserMessage('');
    } catch (error) {
      console.error('Error fetching bot response:', error);
      setChatHistory(prev => [...prev, { type: 'error', content: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
  
    const feedbackData = {
      name: e.target.name.value,
      email: e.target.email.value,
      comments: e.target.comments.value,
    };
  
    try {
      await axios.post('http://localhost:5000/api/feedback', feedbackData);
      alert('Thank you for your feedback!');
      setIsFormVisible(false);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback. Please try again.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleBotQuery();
    }
  };

  return (
    <section id="ContactSection" className="py-20 bg-zinc-900" 
    style={{
      background: "var(--bg-main)",
      fontFamily: "League Spartan",
      color: "var(--text-main)"
    }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">Contact & Connect</h2>
          <p className="text-xl text-gray-300">Get in touch or ask my bot any questions!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
            className="p-6 rounded-xl shadow-lg bg-zinc-800 text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Ask My Bot</h3>
            <div className="h-[400px] flex flex-col">
              <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-4 bg-zinc-900 rounded-lg">
                <AnimatePresence>
                  {chatHistory.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === 'user' 
                            ? 'bg-blue-600 text-white' 
                            : message.type === 'error'
                            ? 'bg-red-600 text-white'
                            : 'bg-zinc-700 text-white'
                        }`}
                      >
                        {message.content}
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-zinc-700 p-3 rounded-lg flex items-center space-x-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Thinking...</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="relative">
                <textarea
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message here..."
                  className="w-full p-3 pr-24 rounded-lg bg-zinc-700 text-white placeholder-gray-400 resize-none"
                  rows="2"
                />
                <div className="absolute right-2 bottom-2 flex space-x-2 m-2">
                  <button
                    onClick={handleVoiceInput}
                    className={`p-2 rounded-lg transition-colors ${
                      isListening ? 'bg-red-600' : 'bg-blue-600'
                    } hover:opacity-90`}
                  >
                    <FaMicrophone className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleBotQuery()}
                    disabled={isLoading || !userMessage.trim()}
                    className="p-2 rounded-lg bg-blue-600 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaPaperPlane className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Get in Touch Section */}
          <motion.div 
            className="p-6 rounded-xl shadow-lg bg-zinc-800 text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="mb-6 text-gray-300">Connect with me on social media or leave a message.</p>
            <div className="flex space-x-6 mb-8">
              <a href="https://www.linkedin.com/in/lingeshwaran-g-aa158a262/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-blue-400 transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://github.com/githubLINGESH/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-gray-400 transition-colors">
                <FaGithub />
              </a>
              <a href="https://x.com/Lingesh03552509" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-blue-400 transition-colors">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/learnwithlingesh/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-pink-400 transition-colors">
                <FaInstagram />
              </a>
            </div>
            <button 
              onClick={() => setIsFormVisible(!isFormVisible)}
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition-opacity font-semibold"
            >
              {isFormVisible ? 'Close Form' : 'Contact Form'}
            </button>
          </motion.div>
        </div>

        <AnimatePresence>
          {isFormVisible && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-10 p-8 bg-zinc-800 rounded-xl shadow-lg max-w-xl mx-auto"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
              <form className="space-y-4" onSubmit={handleFeedbackSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-300 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full p-3 rounded-lg bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500 text-white"
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full p-3 rounded-lg bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500 text-white"
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="comments" className="block text-sm text-gray-300 mb-1">Message</label>
                  <textarea 
                    id="comments" 
                    name="comments" 
                    rows="4" 
                    className="w-full p-3 rounded-lg bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500 text-white resize-none"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactSection;