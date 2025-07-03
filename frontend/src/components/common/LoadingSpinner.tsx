import React from 'react';

interface LoadingSpinnerProps {
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p style={{ marginLeft: '1rem', color: '#ccc' }}>{message}</p>
    </div>
  );
};

export default LoadingSpinner;
