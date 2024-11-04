// Tooltip.js
import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

const Tooltip = ({ children, position }) => {
  return ReactDOM.createPortal(
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="fixed z-50 w-64 p-4 bg-gray-800/90 rounded-lg shadow-xl border border-gray-700 
                 backdrop-blur-md text-gray-300 text-sm"
      style={{
        top: position.y + 15, // Adjust to position slightly below the cursor
        left: position.x,
        transform: 'translateX(-50%)', // Center horizontally over cursor
      }}
    >
      {children}
    </motion.div>,
    document.body
  );
};

export default Tooltip;
