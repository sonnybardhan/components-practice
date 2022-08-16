import React, { useEffect, useRef, useState } from 'react';

const ContentBlock = ({ data, itemInView, setItemInView, jumpTo }) => {
  // const [isItemInView, setIsItemInView] = useState(false);
  const [viewHeight] = useState({ h: window.innerHeight });

  const contentRef = useRef();

  const { title, text, id } = data;

  useEffect(() => {
    if (id === jumpTo) {
      contentRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  }, [jumpTo]);

  useEffect(() => {
    function handleScroll(e) {
      const elementTop = contentRef.current.getBoundingClientRect().top;
      const elementHeight = contentRef.current.getBoundingClientRect().height;

      const elementSection = elementTop + elementHeight / 2;

      if (elementTop > 0 && elementTop < viewHeight.h / 2) {
        // if (elementSection > 0 && elementSection < viewHeight.h) {
        // contentRef.current.classList.add('visible');
        setItemInView(id);
      } else {
        // contentRef.current.classList.remove('visible');
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (
      contentRef.current.getBoundingClientRect().top > 0 &&
      contentRef.current.getBoundingClientRect().bottom < viewHeight.h
    ) {
      contentRef.current.classList.add('visible');
      setItemInView(id);
    }
  }, []);

  useEffect(() => {
    if (itemInView === id) {
      contentRef.current.classList.add('visible');
    } else {
      // contentRef.current.classList.remove('visible');
    }
  }, [itemInView]);

  return (
    <>
      <div className='content-block' key={Math.random()} ref={contentRef}>
        <h3>{title}</h3>
        <p className={`content-text`}>{text}</p>
      </div>
    </>
  );
};

export default ContentBlock;
