import React from 'react';
import './QuestionBox.css';

const QuestionBox = ({ questions }) => {

  let cycleQuestions = (
      <div className='question-container'>
        <p classname='current-question'>{questions[0].question}</p>
        <ul className='answers'>
          {questions[0].questionBank.map(item => (<li>{item}</li>))}
        </ul>
      </div>
    )

  return (
    <div className='question-container'>
      {cycleQuestions}
    </div>
  )
}

export default QuestionBox;
