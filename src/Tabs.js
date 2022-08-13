import React, { useState } from 'react';
import Tab from './Tab';

const Tabs = ({ content }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className='tabs-container'>
      <div className='labels-container'>
        {content.map((item) => (
          <Tab
            item={item}
            handleTabClick={handleTabClick}
            key={item.id}
            activeTab={activeTab}
          />
        ))}
      </div>
      <div className='content-container'>
        {content.map((item) => {
          const { text, id } = item;
          return (
            <div
              className={`content ${id === activeTab ? 'show' : ''}`}
              key={Math.random()}
            >
              {text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
