import DragAndDrop from './DragAndDrop';
import './App.css';

const driverList = [
  { name: 'Hamilton', number: 44 },
  { name: 'Verstappen', number: 1 },
  { name: 'Leclerc', number: 16 },
  { name: 'Sainz', number: 55 },
  { name: 'Danny', number: 33 },
];

const footballerList = [
  { name: 'Messi', number: 10 },
  { name: 'Beckham', number: 7 },
  { name: 'Zlatan', number: 9 },
  { name: 'Oblak', number: 1 },
];

function App() {
  return (
    <div className='App'>
      <h1>Drag and Drop Demo</h1>
      <div className='dnd-main-container'>
        <DragAndDrop dataList={driverList} />
        <DragAndDrop dataList={footballerList} />
      </div>
    </div>
  );
}

export default App;
