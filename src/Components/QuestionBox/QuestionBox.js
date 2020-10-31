import React, { Component } from 'react';
import './QuestionBox.css';

class QuestionBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswer: null
    }
  }

  onChangeValue = (event) => {
    this.setState({
      selectedAnswer: event.target.value
    })
    console.log(this.state);
  }


  displayQuestions = () => {
    if(this.props.questions && this.props.questions.length > 0) {
      return (
        <div className='head-question-box'>
          <p>{this.props.questions[0].question}</p>
          <div onChange={this.onChangeValue} className='question-bank'>
            <input type="radio" value={this.props.questions[0].questionBank[0]} name="ans" /> {this.props.questions[0].questionBank[0]}
            <input type="radio" value={this.props.questions[0].questionBank[1]} name="ans" /> {this.props.questions[0].questionBank[1]}
            <input type="radio" value={this.props.questions[0].questionBank[2]} name="ans" /> {this.props.questions[0].questionBank[2]}
            <input type="radio" value={this.props.questions[0].questionBank[3]} name="ans" /> {this.props.questions[0].questionBank[3]}
          </div>
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
