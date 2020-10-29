import React from 'react';
import './ScoreBox.css';

const ScoreBox = () => {
  return (
    <div className='scoreBox-container'>
      <p>Pop Quiz</p>
      <p>Right</p>
      <p>0</p>
      <p>Wrong</p>
      <p>0</p>
      <button>Reset</button>
    </div>
  )
}

export default ScoreBox;
