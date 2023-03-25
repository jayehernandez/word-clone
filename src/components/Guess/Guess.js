import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  return <span className={status ? `cell ${status}` : 'cell'}>{letter}</span>;
}

function Guess({ value, answer }) {
  const checker = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={checker ? checker[num].letter : undefined}
          status={checker ? checker[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
