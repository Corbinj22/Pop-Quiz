import React, { Component } from 'react';
import './QuestionBox.css';

class QuestionBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswer: null,
    }
  }

  onChangeValue = async (event) => {
    await this.setState({
      selectedAnswer: event.target.value
    })
    console.log(this.state);
  }

  handleSubmit = () => {
    this.props.checkAnswer(this.state.selectedAnswer)
    this.props.submitAnswer()
  }

  displayQuestions = () => {
    if(this.props.questions && this.props.questions.length > 0) {
      return (
        <div className='head-question-box'>
          <p className='questionText'>{this.props.questions[0].question}</p>
          <div onChange={this.onChangeValue} className='question-bank'>
            <input type="radio" className='questionText' value={this.props.questions[0].questionBank[0]} name="ans" /> {this.props.questions[0].questionBank[0]}
            <input type="radio" className='questionText' value={this.props.questions[0].questionBank[1]} name="ans" /> {this.props.questions[0].questionBank[1]}
            <input type="radio" className='questionText' value={this.props.questions[0].questionBank[2]} name="ans" /> {this.props.questions[0].questionBank[2]}
            <input type="radio" className='questionText' value={this.props.questions[0].questionBank[3]} name="ans" /> {this.props.questions[0].questionBank[3]}
          </div>
          <div className='button-box'>
            <button onClick={() => this.handleSubmit()} disabled={this.props.beenSubmitted} className='submit-button'>Submit Answer</button>
            <button onClick={() => this.props.cycleQuestion()} className='next-button' disabled={!this.props.beenSubmitted}>Next Question</button>
          </div>
        </div>
      )
    } else {
      return (
        <p className='questionText'>Thank You For Playing</p>
      )
    }
  }

  render () {
    return (
    <div className='question-container'>
      {this.displayQuestions()}
    </div>
    )
  }
}

export default QuestionBox;
