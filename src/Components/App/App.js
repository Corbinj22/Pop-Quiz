import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

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
