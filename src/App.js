import data from './data';
import './App.css';
import { useState } from 'react';

function App() {
  const [itemToDisplay, setItemToDisplay] = useState(null);

  const handleClick = (id) => {
    if (id === itemToDisplay) {
      return setItemToDisplay(null);
    }
    setItemToDisplay(id);
  };

  return (
    <div className='main-container'>
      <h1>My Content</h1>
      <div className='qna-container'>
        {data.map(({ id, title, content }) => (
          <div className='block' key={id}>
            <div className='title' onClick={() => handleClick(id)}>
              {title}
              <span className='expand'>{id !== itemToDisplay ? '+' : '-'}</span>
            </div>
            <div className={`content ${id !== itemToDisplay && 'hide'}`}>
              {content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
