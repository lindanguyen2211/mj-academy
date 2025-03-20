import React from 'react'
import './ProgressBar.css'

const ProgressBar = ({ progress }) => {
  return (
    <div className="progressBar">
      <div 
        className="progressFill" 
        style={{ width: `${progress}%` }}
      >
      </div>
    </div>
  );
};

export default ProgressBar;