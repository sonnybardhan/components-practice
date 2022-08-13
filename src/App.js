import Tabs from './Tabs';

const content = [
  {
    id: 1,
    text: 'Some rubbish here',
    label: 'Uno',
  },
  {
    id: 2,
    text: 'this is to notify the authorities',
    label: 'Dos',
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, asperiores non praesentium saepe reprehenderit nemo numquam at esse rem repellat eligendi possimus eaque, obcaecati laudantium et odit soluta? Impedit ut exercitationem perferendis officia. Repudiandae quia sequi rem odit quae animi possimus dolores eligendi, veritatis odio velit a ullam labore quo.',
    label: 'Tres',
  },
];

function App() {
  return (
    <div className='App'>
      <h1>Tab Demo</h1>
      <Tabs content={content} />
    </div>
  );
}

export default App;
