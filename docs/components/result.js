import React from 'react';
import './components.css';

const Result = ({ children }) => {
  return (
    <div className='result-demo'>
      <div>{children}</div>
    </div>
  );
};

export default Result;
