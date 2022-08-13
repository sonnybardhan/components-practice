import React from 'react';

const Tab = ({ item, handleTabClick, activeTab }) => {
  const { id, label } = item;
  return (
    <button
      className={`label ${id === activeTab ? 'active' : ''}`}
      disabled={id === activeTab}
      onClick={() => handleTabClick(id)}
    >
      {label}
    </button>
  );
};

export default Tab;
