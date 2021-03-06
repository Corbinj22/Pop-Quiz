import React from 'react';
import ScoreBox from '../ScoreBox/ScoreBox';
import QuestionBox from '../QuestionBox/QuestionBox'
import './GameView.css';

const GameView = ({ gameState, checkAnswer, submitAnswer, cycleQuestion, resetBeenSubmitted }) => {
  return (
    <div className='GameView-container'>
      <ScoreBox scores={gameState} />
      <QuestionBox checkAnswer={checkAnswer} right={gameState.right} questions={gameState.questions} cycleQuestion={cycleQuestion} resetBeenSubmitted={resetBeenSubmitted} submitAnswer={submitAnswer} beenSubmitted={gameState.beenSubmitted}/>
    </div>
  )
}

export default GameView;
