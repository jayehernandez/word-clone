import React from 'react';

function Banner({ status, onRestart, children }) {
  return (
    <div className={`${status} banner`}>
      {children}
      <button onClick={onRestart}>Restart?</button>
    </div>
  );
}

export default Banner;
