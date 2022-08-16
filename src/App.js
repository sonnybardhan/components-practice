import './App.css';
import ScrollSpy from './components/ScrollSpy';
import { content } from './content';
function App() {
  return (
    <div className='App'>
      <h1>Scroll Spy Demo</h1>
      <ScrollSpy content={content} />
    </div>
  );
}

export default App;
