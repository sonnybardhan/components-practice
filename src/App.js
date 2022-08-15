import { useState } from 'react';
import { createPortal } from 'react-dom';
import './App.css';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className='App'>
      <h1>Modal Demo</h1>
      <div className='container' onClick={() => console.log('clicked')}>
        <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
        {show && <Modal show={show} setShow={setShow} />}
      </div>
      <p className='other'>Other content</p>
    </div>
  );
}

function Modal({ show, setShow }) {
  return createPortal(
    <p className='modal'>
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
    </p>,
    document.getElementById('modal-root')
  );
}

export default App;
