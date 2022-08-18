import { useEffect, useState } from 'react';
import LazyLoad from './components/LazyLoad';
function App() {
  return (
    <div className='app'>
      <h1>Lazy Load/infinite scroll demo</h1>
      <LazyLoad />
    </div>
  );
}

export default App;
