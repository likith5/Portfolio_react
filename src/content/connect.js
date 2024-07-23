import React, { useState, useEffect } from 'react';

export default function Connect() {
  const [refreshCount, setRefreshCount] = useState(() => {
    const count = parseInt(localStorage.getItem('refreshCount'), 10);
    return isNaN(count) ? 1 : count; // Initialize state from localStorage or start with 1
  });

  // useEffect to increment count on page refresh
  useEffect(() => {
    const newCount = refreshCount + 1;
    localStorage.setItem('refreshCount', newCount);
    setRefreshCount(newCount);
  }, []);

  return (
    <div className='connect'>
      <p>Get in Touch</p>
      <div>
        <a href="https://github.com/likith5">
          <i className="fa-brands fa-github fa-2xl"></i>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/likith-gowda-51ba6a209/">
          <i className="fa-brands fa-linkedin fa-2xl"></i>
        </a>
      </div>
      <div>
        <a href="mailto:likithgowda1265@gmail.com">
          <i className="fa-regular fa-envelope fa-2xl"></i>
        </a>
      </div>
      {/* <div className='visitors'>
        <p>Hit a Like</p>
        <p>{refreshCount}</p>
      </div> */}
    </div>
  );
}
