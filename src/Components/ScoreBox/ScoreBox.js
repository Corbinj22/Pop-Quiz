import React from 'react';
import './ScoreBox.css';

const ScoreBox = ({ scores }) => {
  return (
    <div className='scoreBox-container'>
      <p>Pop Quiz</p>
      <p>Right</p>
      <p>{scores.right}</p>
      <p>Wrong</p>
      <p>{scores.wrong}</p>
      <button>Reset</button>
    </div>
  )
}

export default ScoreBox;
