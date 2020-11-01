import React from 'react';
import ReactDOM from 'react-dom';
import GameView from './GameView';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

let fakeScores = {
    right: 0,
    wrong: 0,
    questions: null,
    beenSubmitted: false
  }
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter> <GameView gameState={fakeScores}/> </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  describe('<GameView />', () => {
    it('should display user game info', () => {
      const { queryByLabelText } = render(<BrowserRouter> <GameView gameState={fakeScores}/> </BrowserRouter>);
      const title = screen.queryByLabelText('title')
    })
  })
