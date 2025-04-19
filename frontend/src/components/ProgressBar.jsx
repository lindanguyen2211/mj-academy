import React from 'react'
import './ProgressBar.css'

const ProgressBar = ({ progress }) => {
  return (
    <div className="progressBar">
      <div 
        className="progressFill" 
        style={ 
          { width: `${progress}%`, backgroundColor: `${
            progress < 100 ? "#ecdf6a" : "#4CAF50" }`
          }
          
        }
      >
      </div>
    </div>
  );
};

export default ProgressBar;
