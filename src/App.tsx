import React from 'react';
import './App.css';
import { DogImage } from './Components/DogImage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Nice Dog</h2>
        <DogImage />
      </header>
    </div>
  );
}

export default App;
