import React from 'react';
import './ContentBlock.css';

const ContentBlock = ({ content }) => {
  const { id, title, body } = content;
  return (
    <div className='content-block'>
      <div className='post-title'>
        <span className='post-id'>{id}</span>
        <span className='title'>{title}</span>
      </div>
      <div className='post-body'>{body}</div>
    </div>
  );
};

export default ContentBlock;
