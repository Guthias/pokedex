import React, { useEffect } from 'react';
import * as api from './services/API';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    const fetchPokemonList = async () => {
      const data = await api.getPokemonList();
      console.log(data);
    }
    fetchPokemonList();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
