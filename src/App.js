import logo from './logo.svg';
import './App.css';
import TextNb from './components/TextNb';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(null)
  return (
    <div className="App">
      <p>{number}</p>
     <TextNb number={number} setNumber={setNumber} />
    </div>
  );
}

export default App;
