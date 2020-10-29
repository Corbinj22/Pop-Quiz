import React from 'react';
import ScoreBox from '../ScoreBox/ScoreBox';
import QuestionBox from '../QuestionBox/QuestionBox'
import './GameView.css';


const GameView = () => {
  return (
    <div className='GameView-container'>
      <ScoreBox />
      <QuestionBox />
    </div>
  )
}

export default GameView;
