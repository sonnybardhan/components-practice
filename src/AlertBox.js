import React, { useEffect, useState } from 'react';

const AlertBox = ({
  message,
  variant = 'default',
  timer = 3000,
  autoClose = true,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (autoClose) {
      setTimeout(() => {
        setIsOpen(false);
      }, timer);
    }
  }, []);

  return (
    <div className={`alert-box ${variant} ${!isOpen ? 'hide' : ''}`}>
      <div className='button-container'>
        <button onClick={() => setIsOpen(false)}>X</button>
      </div>
      <div className='text'>{message}</div>
    </div>
  );
};

export default AlertBox;
