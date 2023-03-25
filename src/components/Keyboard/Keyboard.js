import React from 'react';

const KEYS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function getLetterStatusList(checkedGuesses) {
  const statusList = {};

  checkedGuesses.forEach((guess) => {
    guess.forEach((letterGuess) => {
      statusList[letterGuess.letter] = letterGuess.status;
    });
  });

  return statusList;
}

function Keyboard({ checkedGuesses }) {
  const letterStatusList = getLetterStatusList(checkedGuesses);

  return (
    <div className="keyboard">
      {KEYS.map((row, index) => (
        <div className="keyboard-row" key={index}>
          {row.map((letter, index) => (
            <div
              className={
                letterStatusList[letter]
                  ? `keyboard-letter ${letterStatusList[letter]}`
                  : 'keyboard-letter'
              }
              key={index}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
