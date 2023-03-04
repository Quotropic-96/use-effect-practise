import './App.css';
import React, { useState } from 'react';
import Counter from './components/Counter';

function App() {

  const [showCounter, setShowCounter] = useState(true);

  const handleShowCounter = () => {
    setShowCounter(prev => !prev)
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={handleShowCounter}>{showCounter ? 'Hide' : 'Show'}</button>
      {showCounter && <Counter />}
    </div>
  );
}

export default App;
