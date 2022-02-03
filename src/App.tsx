/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import GameGrid from '../src/components/grid/GameGrid';
import Keyboard from './components/keyboard/Keyboard';
import Header from '../src/components/Header';
import './App.css';

function App() {

  const [guess, setGuess] = useState('');
  const [totalGuesses, setTotalGuesses] = useState<string[]>([]);
  const [gameWon, setGameWon] = useState(false);


  const onEnteredChar = (value: string) => {
    if (guess.length === 5 && value === 'Enter') {
      if (guess.toLowerCase() === 'frick') {
        // we won
        setGameWon(true);
      }
      setTotalGuesses([...totalGuesses, guess])
      setGuess('');
    } else if (value === 'Delete') {
      if (guess !== '') { 
        setGuess(guess.slice(0, -1))
      }  
    } else if (value !== 'Enter') {
      setGuess(`${guess}${value}`);
    }
    console.log(guess);
  }

  useEffect(() => {
    if (gameWon) {
      //placeholder 
      alert('YOU WON!!!!!');
    }
  }, [gameWon])

  return (
    <div className="App">
      <Header/>
      <GameGrid guess={guess} totalGuesses={totalGuesses} />
      <Keyboard onEnteredChar={onEnteredChar} />
    </div>
  );
}

export default App;
