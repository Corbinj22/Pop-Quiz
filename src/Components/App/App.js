import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { fetchedData } from '../../apiRequestFake'

import './App.css';
import Welcome from '../WelcomePage/Welcome';
import GameView from '../GameView/GameView';

class App extends Component {
  constructor() {
    super();
    this.state = {
      right: 0,
      wrong: 0,
      questions: null,
      beenSubmitted: false
    }
  }

  setData = async () => {
    await this.setState({
      questions: fetchedData
    })
    await this.spoofData();
  }

  componentDidMount = async () => {
    await this.setState({
      questions: fetchedData
    })
    await this.spoofData();
  }

  cycleQuestion = () => {
    let currentQuestions = this.state.questions
    currentQuestions.shift()
    this.setState({
      questions: currentQuestions
    })
  }

  resetBeenSubmitted = () => {
    this.setState({
       beenSubmitted: false
    })
  }

  checkAnswer = (userAnswer) => {
    if(userAnswer === this.state.questions[0].correct) {
      this.setState({
        right: this.state.right + 1
      })
    } else {
      this.setState({
        wrong: this.state.wrong + 1
      })
    }
  }

  submitAnswer = () => {
    this.setState({
      beenSubmitted: true
    })
  }

  //Fisher–Yates Shuffle (not original code)//
  arrayShuffle = (array) => {
    var copy = [], n = array.length, i;
    while (n) {
      i = Math.floor(Math.random() * array.length);
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
    return copy;
  };

  spoofData = () => {
    let spoofedData = this.state.questions.map(question => {
      const randomNum = Number((Math.random() * 3))
      const setNum = Number(randomNum.toFixed())
      const copiedData = [...question.incorrect]
      question = {...question, questionBank : copiedData}
      question.questionBank.splice(setNum, 0, question.correct)
      return question
    })
    this.setState({
      questions: this.arrayShuffle(spoofedData)
    })
  };

  render() {
    return (
      <div className= "App" >
        <Switch>
          <Route exact path='/Pop-Quiz/'>
            <Welcome />
          </Route>
          <Route exact path='/Pop-Quiz/pop-quiz'>
            <GameView checkAnswer={this.checkAnswer} submitAnswer={this.submitAnswer} cycleQuestion={this.cycleQuestion} resetBeenSubmitted={this.resetBeenSubmitted} gameState={this.state}/>
          </Route>
        </Switch>
      </div>
    )
  }
};

export default App;
