import React from 'react';

function GuessInput({ onNewGuess, disabled }) {
  const [guess, setGuess] = React.useState('');

  function onSubmit(e) {
    e.preventDefault();
    onNewGuess(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        minLength={5}
        maxLength={5}
        required
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
