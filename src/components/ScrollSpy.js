import React, { useEffect, useRef, useState } from 'react';
import './scrollspy.css';
import ContentBlock from './ContentBlock';

const ScrollSpy = ({ content }) => {
  const [itemInView, setItemInView] = useState(null);
  const [jumpTo, setJumpTo] = useState(null);
  const contentLabelRef = useRef();

  const handleJumpTo = (id) => {
    setJumpTo(id);
  };

  useEffect(() => {
    function handleScroll(e) {
      setJumpTo(null);

      console.log(contentLabelRef.current.getBoundingClientRect().top);

      if (contentLabelRef.current.getBoundingClientRect().top <= 0) {
        contentLabelRef.current.classList.add('stick-to-top');
      } else {
        contentLabelRef.current.classList.remove('stick-to-top');
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className='label-container' ref={contentLabelRef}>
        {content.map((item) => {
          return (
            <button
              onClick={() => handleJumpTo(item.id)}
              key={Math.random()}
              className={itemInView === item.id ? 'active' : undefined}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div
        className='content-container'
        onScroll={(e) => console.log('scrolling')}
      >
        {content.map((item) => {
          return (
            <ContentBlock
              data={item}
              key={item.id}
              itemInView={itemInView}
              setItemInView={setItemInView}
              jumpTo={jumpTo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ScrollSpy;
