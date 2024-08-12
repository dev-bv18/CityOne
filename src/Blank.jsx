import React from 'react';
import nothing from "./nothing.avif";

const Blank = () => {
  return (
    <div 
      className='nothing' 
      style={{ 
        position: 'relative', 
        height: '100vh', // Adjust the height as needed
        width: '100vw' // Adjust the width as needed
      }}
    >
      <img 
        src={nothing} 
        alt="" 
        style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          maxWidth: '100%', 
          maxHeight: '100%' // Ensures the image scales properly
        }} 
      />
    </div>
  );
};

export default Blank;
