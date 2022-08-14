import React from 'react';

const Block = ({ item }) => {
  const { name, number } = item;
  console.log(item);
  return (
    <div className='block' draggable>
      {name}
    </div>
  );
};

export default Block;
