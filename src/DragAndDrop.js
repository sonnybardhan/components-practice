import React, { useEffect, useRef, useState } from 'react';

const DragAndDrop = ({ dataList }) => {
  const [data, setData] = useState(dataList);
  const dragItemIdx = useRef();
  const dragOverItemIdx = useRef();
  const groupRef = useRef();

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
    if (!isValidDrop(e)) return;

    const el = document.elementFromPoint(e.clientX, e.clientY);

    if (groupRef.current === el || groupRef.current === el.parentElement) {
      //same group, regular swap
      swap();
    } else {
      // newGroupSwap(item, setDataMethod);
      // console.log(item);
      console.log('FROM ANOTHER GROUP');
    }
  }

  function isValidDrop(e) {
    const el = document.elementFromPoint(e.clientX, e.clientY);
    const validEl = el.classList.contains('dnd-group');
    const validParent = el.parentElement.classList.contains('dnd-group');

    if (validEl || validParent) {
      return true;
    }
    return false;
  }

  function isOutOfBounds(x, y) {
    const { left, right, top, bottom } =
      groupRef.current.getBoundingClientRect();

    if (x < left || x > right || y < top || y > bottom) {
      return true;
    }
    return false;
  }

  return (
    <div className='dnd-group' ref={groupRef}>
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
