import React, { useRef, useState } from 'react';
import Block from './Block';

const DragAndDrop = ({ dataList }) => {
  const [data, setData] = useState(dataList);

  return (
    <div className='dnd-group'>
      {data &&
        data.map((item) => {
          return <Block key={Math.random()} item={item} />;
        })}
    </div>
  );
};

export default DragAndDrop;
