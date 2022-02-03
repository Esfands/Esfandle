/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import GameGrid from '../src/components/grid/GameGrid';
import Keyboard from './components/keyboard/Keyboard';
import Header from '../src/components/Header';
import './App.css';

function App() {

  const [guess, setGuess] = useState('');
  const [totalGuesses, setTotalGuesses] = useState<string[]>([]);
  const [gameWon, setGameWon] = useState(false);












  return (
    <div className="App">
      <Header/>
      <GameGrid/>
      <Keyboard/>
    </div>
  );
}

export default App;
