import React from 'react';
import ReactDOM from 'react-dom';
import GameView from './GameView';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

let fakeScores = {
    right: 0,
    wrong: 0,
    questions: null,
    beenSubmitted: false
  }

  let fakeData = [
    {
      "question": "What was Tandem previous name?",
      "incorrect": ["Tandem", "Burger Shack", "Extraordinary Humans"],
      "correct": "Devmynd",
      "questionBank": ["Tandem", "Devmynd", "Burger Shack", "Extraordinary Humans"]
    },
    {
      "question": "In Shakespeare's play Julius Caesar, Caesar's last words were...",
      "incorrect": ["Iacta alea est!", "Vidi, vini, vici", "Aegri somnia vana"],
      "correct": "Et tu, Brute?",
      "questionBank": ["Et tu, Brute?", "Iacta alea est!", "Vidi, vini, vici", "Aegri somnia vana"]
    }
  ]

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter> <GameView gameState={fakeScores}/> </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  describe('<GameView />', () => {
    it('should display user game info', () => {
      const { getByPlaceholderText, getByLabelText, debug } = render(<BrowserRouter> <GameView gameState={fakeScores}/> </BrowserRouter>);
      const title = screen.queryByLabelText('title')
    })
  })
