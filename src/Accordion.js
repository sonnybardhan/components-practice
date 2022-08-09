import React, { useState } from 'react';

function Accordion({ title, content }) {
  const [collapsed, setExpand] = useState(true);

  const handleClick = () => {
    setExpand((previousState) => !previousState);
  };

  return (
    <div className='block'>
      <div className='title' onClick={handleClick}>
        {title}
        <span className='expand'>{collapsed ? '+' : '-'}</span>
      </div>
      <div className={`content ${collapsed && 'hide'}`}>{content}</div>
    </div>
  );
}

export default Accordion;
