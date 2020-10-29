import React from 'react';
import ScoreBox from '../ScoreBox/ScoreBox';
import QuestionBox from '../QuestionBox/QuestionBox'
import './GameView.css';


const GameView = ({ gameState }) => {
  return (
    <div className='GameView-container'>
      <ScoreBox scores={gameState}/>
      <QuestionBox questions={gameState.questions}/>

    </div>
  )
}

export default GameView;
