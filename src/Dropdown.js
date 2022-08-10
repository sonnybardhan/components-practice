import React, { useEffect, useRef, useState } from 'react';

function Dropdown({ content }) {
  const [isOpen, setIsOpen] = useState(false);
  const [rowToDisplay, setRowToDisplay] = useState(0);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      console.log('running');
      if (![...dropdownRef.current.childNodes].includes(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div
      className='dropwdown'
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      ref={dropdownRef}
    >
      <div className='dropdown-row dropdown-display-row'>
        {content[rowToDisplay]}
      </div>
      <div className={`dropdown-expanded ${isOpen ? 'show' : ''}`}>
        {content.map((row, idx) => (
          <div
            className={`dropdown-row ${
              idx === rowToDisplay ? 'dropdown-row-selected' : ''
            }`}
            onClick={() => {
              setRowToDisplay(idx);
            }}
            key={Math.random()}
          >
            {row}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
