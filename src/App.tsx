import React from 'react';
import GameGrid from '../src/components/grid/Grid';
import Keyboard from './components/keyboard/Keyboard';
import Header from '../src/components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <GameGrid/>
      <Keyboard/>
    </div>
  );
}

export default App;
