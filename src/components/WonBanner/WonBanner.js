import React from 'react';
import Banner from '../Banner';

function WonBanner({ numOfGuesses, onRestart }) {
  return (
    <Banner status="happy" onRestart={onRestart}>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{numOfGuesses} guesses</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
