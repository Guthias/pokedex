import React, { useEffect, useState } from 'react';
import * as api from './services/API';

import './App.css';

function App() {

  const [pokemonList, updatePokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const data = await api.getPokemonList();
      updatePokemonList(data);
    }
    fetchPokemonList();
  }, []);

  return (
    <div className="App">
      <ul>
        {
          pokemonList.map(({ name }) => <li>{ name }</li>)
        }
      </ul>
    </div>
  );
}

export default App;
