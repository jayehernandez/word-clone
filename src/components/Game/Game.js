import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');
  const [answer, setAnswer] = React.useState(() => {
    return sample(WORDS);
  });

  console.log({ answer });

  function onNewGuess(guess) {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
    if (guess === answer) {
      setGameStatus('won');
    } else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  function onRestart() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameStatus('running');
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput onNewGuess={onNewGuess} disabled={gameStatus !== 'running'} />
      {gameStatus === 'won' && (
        <WonBanner numOfGuesses={guesses.length} onRestart={onRestart} />
      )}
      {gameStatus === 'lost' && (
        <LostBanner answer={answer} onRestart={onRestart} />
      )}
    </>
  );
}

export default Game;
