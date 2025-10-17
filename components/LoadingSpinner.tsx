import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-12 h-12 border-4 border-teal-400 border-t-purple-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
