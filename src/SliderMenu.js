import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';

function SliderMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='menu-container'>
      <div className='icon-container'>
        <IoMenu className='menu-icon' />
      </div>
      <div className='nav-item-container'>
        <div className='nav-item'>Home</div>
        <div className='nav-item'>Profile</div>
        <div className='nav-item'>About Us</div>
        <div className='nav-item'>Contact Us</div>
      </div>
    </div>
  );
}

export default SliderMenu;
