import React from 'react';

const CustomScrollbar = ({ children, className = '' }) => {
  return (
    <div className={`custom-scrollbar-wrapper ${className}`}>
      <div className="custom-scrollbar-container 
        overflow-y-scroll 
        scrollbar-hide 
        scroll-smooth 
        pr-4 
        -mr-4"
      >
        {children}
      </div>
    </div>
  );
};

export default CustomScrollbar;