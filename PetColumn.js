// PetColumn.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PetColumn.css';

const PetColumn = () => {
  const [pets, setPets] = useState([]);
  const [selectedType, setSelectedType] = useState('dogs');

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/pets/${selectedType}`);
        setPets(response.data);
      } catch (error) {
        console.error('Error fetching pets', error);
      }
    };

    fetchPets();
  }, [selectedType]);

  return (
    <div className="container">
      <div className="buttons">
        <button className="button" onClick={() => setSelectedType('dogs')}>
          Dogs
        </button>
        <button className="button" onClick={() => setSelectedType('cats')}>
          Cats
        </button>
        <button className="button" onClick={() => setSelectedType('others')}>
          Others
        </button>
      </div>

      <h2>{selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}</h2>

      <ul className="petList">
        {pets.map((pet) => (
          <li key={pet._id} className="petItem">
            {pet.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetColumn;

