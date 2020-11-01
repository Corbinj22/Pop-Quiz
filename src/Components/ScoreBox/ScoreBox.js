import React from 'react';
import './ScoreBox.css';

const ScoreBox = ({ scores }) => {
  return (
    <div className='scoreBox-container'>
    <p className='game-title'>Pop Quiz</p>
      <div className='answer-count-box'>
        <p className='answer-count'>Right</p>
        <p className='answer-number'>{scores.right}</p>
        <p className='answer-count'>Wrong</p>
        <p className='answer-number'>{scores.wrong}</p>
      </div>
    </div>
  )
}

export default ScoreBox;
