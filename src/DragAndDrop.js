import React, { useRef, useState } from 'react';

const DragAndDrop = ({ dataList }) => {
  const [data, setData] = useState(dataList);
  const dragItemIdx = useRef();
  const dragOverItemIdx = useRef();

  function handleDragStart(e, idx) {
    dragItemIdx.current = idx;
  }

  function handleDragEnter(e, idx) {
    if (idx !== dragItemIdx.current) {
      dragOverItemIdx.current = idx;
    }
  }

  function swap() {
    const _list = [...data];
    const _dragItem = _list.splice(dragItemIdx.current, 1)[0];
    _list.splice(dragOverItemIdx.current, 0, _dragItem);

    dragItemIdx.current = null;
    dragOverItemIdx.current = null;
    setData(_list);
  }

  function handleDragEnd(e) {
    swap();
  }

  return (
    <div className='dnd-group'>
      {data &&
        data.map((item, idx) => {
          return (
            <div
              className='block'
              draggable
              onDragStart={(e) => handleDragStart(e, idx)}
              onDragEnter={(e) => handleDragEnter(e, idx)}
              onDragOver={(e) => e.preventDefault()}
              onDragEnd={(e) => handleDragEnd(e)}
              key={Math.random()}
            >
              {item.name}
            </div>
          );
        })}
    </div>
  );
};

export default DragAndDrop;
