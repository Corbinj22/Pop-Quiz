import React from 'react';
import './QuestionBox.css';

const QuestionBox = ({ questions }) => {
  return (
    <div className='question-container'>
      <p>{questions[0].question}</p>
      <div className='answers'>
        <p>{questions[0].incorrect[0]}</p>
        <p>{questions[0].incorrect[1]}</p>
        <p>{questions[0].incorrect[2]}</p>
        <p>{questions[0].correct}</p>
      </div>
    </div>
  )
}

export default QuestionBox;
