import React from 'react';
import GameGrid from '../src/components/grid/Grid';
import Header from '../src/components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <GameGrid/> 
    </div>
  );
}

export default App;
