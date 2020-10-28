import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Welcome from '../WelcomePage/Welcome'

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
        <Route exact path='/'>
          <Welcome />
        </Route>
      </div>
    );
  }
}


export default App;
