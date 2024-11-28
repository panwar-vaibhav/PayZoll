import React from 'react';
import './styles.css';

function Loader({ message = 'Loading...' }) {
  return (
    <div className="loader-container">
      <div className="loader-spinner"></div>
      <p className="loader-text">{message}</p>
    </div>
  );
}

export default Loader;