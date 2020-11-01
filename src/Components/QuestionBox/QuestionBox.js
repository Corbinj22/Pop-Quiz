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
    if(this.props.questions && this.props.questions.length > 11) {
      return (
        <div className='head-question-box'>
          <p className='questionText'>{this.props.questions[0].question}</p>
          <div onChange={this.onChangeValue} className='question-bank'>

            <input className='questionText' type="radio" checked={this.state.selectedAnswer === this.props.questions[0].questionBank[0] ? true : false} className='questionText' value={this.props.questions[0].questionBank[0]} name="ans" /> {this.props.questions[0].questionBank[0]}<br></br>
            <input className='questionText' type="radio" checked={this.state.selectedAnswer === this.props.questions[0].questionBank[1] ? true : false} className='questionText' value={this.props.questions[0].questionBank[1]} name="ans" /> {this.props.questions[0].questionBank[1]}<br></br>
            <input className='questionText' type="radio" checked={this.state.selectedAnswer === this.props.questions[0].questionBank[2] ? true : false} className='questionText' value={this.props.questions[0].questionBank[2]} name="ans" /> {this.props.questions[0].questionBank[2]}<br></br>
            <input className='questionText' type="radio" checked={this.state.selectedAnswer === this.props.questions[0].questionBank[3] ? true : false} className='questionText' value={this.props.questions[0].questionBank[3]} name="ans" /> {this.props.questions[0].questionBank[3]}<br></br>
          </div>
          <div className='button-box'>
            <button className='submit-btn' onClick={() => this.handleSubmit()} disabled={this.props.beenSubmitted}>Submit Answer</button>
            <button className='next-btn' onClick={this.handleNextQuestion} disabled={!this.props.beenSubmitted}>Next Question</button>
          </div>
          <p hidden={this.state.beenSubmitted}>The correct answer is {this.props.questions[0].correct}</p>
        </div>
      )
    } else {
      return (
        <div>
          <p className='questionText'>You got {this.props.right} out of 10 correct!</p>
          <p className='questionText'>Thank You For Playing</p>
        </div>
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
