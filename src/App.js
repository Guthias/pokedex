import React, { useEffect, useState } from 'react';
import * as api from './services/api';
import PokemonCard from './components/PokemonCard';

import './App.css';

function App() {

  const [isLoading, loadingStatus] = useState(true);
  const [pokemonList, updatePokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const data = await api.getPokemonList();
      updatePokemonList(data);
    }
    fetchPokemonList();
    loadingStatus(false);
  }, []);

  return (
    <div className="App">
      <ul>
        {
          !isLoading && pokemonList.map(({ name, id, sprites:{ other: { ['official-artwork']: { front_default }}} }) =>
          (
            <PokemonCard
              key={ id }
              id={ id }
              sprite={ front_default }
              name={ name }
            />
          )
          )
        }
      </ul>
    </div>
  );
}

export default App;
