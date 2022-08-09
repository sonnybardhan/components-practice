import data from './data';
import './App.css';
import { useState } from 'react';
import Accordion from './Accordion';

function App() {
  // const [expand, setExpand] = useState(false);

  return (
    <div className='main-container'>
      <h1>My Content</h1>
      <div className='qna-container'>
        {data.map(({ id, title, content }) => (
          <Accordion key={id} title={title} content={content} />
        ))}
      </div>
    </div>
  );
}

export default App;
