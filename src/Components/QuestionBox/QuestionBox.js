import React, { Component } from 'react';
import './QuestionBox.css';

class QuestionBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswer: null,
      beenSubmitted: true
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
    this.setState({
      beenSubmitted: false
    })
  }

  handleNextQuestion = () => {
    this.props.cycleQuestion()
    this.props.resetBeenSubmitted()
    this.setState({
      selectedAnswer: null,
      beenSubmitted: true
    })
  }

  displayQuestions = () => {
    if(this.props.questions && this.props.questions.length > 0) {
      return (
        <div className='head-question-box'>
          <p className='questionText'>{this.props.questions[0].question}</p>
          <div onChange={this.onChangeValue} className='question-bank'>
            <input type="radio" checked={this.state.selectedAnswer === this.props.questions[0].questionBank[0] ? true : false} className='questionText' value={this.props.questions[0].questionBank[0]} name="ans" /> {this.props.questions[0].questionBank[0]}
            <input type="radio" checked={this.state.selectedAnswer === this.props.questions[0].questionBank[1] ? true : false} className='questionText' value={this.props.questions[0].questionBank[1]} name="ans" /> {this.props.questions[0].questionBank[1]}
            <input type="radio" checked={this.state.selectedAnswer === this.props.questions[0].questionBank[2] ? true : false} className='questionText' value={this.props.questions[0].questionBank[2]} name="ans" /> {this.props.questions[0].questionBank[2]}
            <input type="radio" checked={this.state.selectedAnswer === this.props.questions[0].questionBank[3] ? true : false} className='questionText' value={this.props.questions[0].questionBank[3]} name="ans" /> {this.props.questions[0].questionBank[3]}
          </div>
          <div className='button-box'>
            <button onClick={() => this.handleSubmit()} disabled={this.props.beenSubmitted} className='submit-button'>Submit Answer</button>
            <button onClick={this.handleNextQuestion} className='next-button' disabled={!this.props.beenSubmitted}>Next Question</button>
          </div>
          <p hidden={this.state.beenSubmitted}>The correct answer is {this.props.questions[0].correct}</p>
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
