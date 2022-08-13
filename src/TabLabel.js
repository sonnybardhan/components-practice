import React from 'react';

const TabLabel = (name, active) => {
  return (
    <button className={`label ${active ? 'active' : ''}`} disabled={active}>
      {name}
    </button>
  );
};

export default TabLabel;
