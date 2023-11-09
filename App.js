// src/App.js
import React, { useState } from 'react';
import PetColumn from './PetColumn.js';
import './App.css';

const App = () => {
  const [selectedType, setSelectedType] = useState('dogs');

  return (
    <div className="app-container">
      <div className="button-container">
        <button onClick={() => setSelectedType('dogs')}>Dogs</button>
        <button onClick={() => setSelectedType('cats')}>Cats</button>
        <button onClick={() => setSelectedType('others')}>Others</button>
      </div>

      <div className="pet-columns">
        <PetColumn type={selectedType} />
      </div>
    </div>
  );
};

export default App;
