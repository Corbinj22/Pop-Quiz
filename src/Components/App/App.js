import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { fetchedData } from '../../apiRequestFake'

import './App.css';
import Welcome from '../WelcomePage/Welcome';
import ScoreBox from '../ScoreBox/ScoreBox';
import QuestionBox from '../QuestionBox/QuestionBox'

class App extends Component {
  constructor() {
    super();
    this.state = {
      right: 0,
      wrong: 0,
      questions: null
    }
  }

  componentDidMount = async () => {
    await this.setState({
      questions: fetchedData
    })
    await this.spoofData()
  }

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
      questions: spoofedData
    })
  }

  render() {
    return (
      <div className= "App" >
      <Switch>
        <Route exact path='/'>
          <Welcome />
        </Route>
        <Route exact path='/pop-quiz'>
          <ScoreBox />
          <QuestionBox />
        </Route>
      </Switch>
      </div>
    );
  }
}


export default App;
