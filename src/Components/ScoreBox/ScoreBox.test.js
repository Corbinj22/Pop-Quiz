import React from 'react';
import ReactDOM from 'react-dom';
import ScoreBox from './ScoreBox';
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

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter> <ScoreBox scores={fakeScores}/> </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})

describe('<ScoreBox />', () => {
  it('should display user game info', () => {
    const { getByPlaceholderText, getByLabelText, debug } = render(<BrowserRouter> <ScoreBox scores={fakeScores}/> </BrowserRouter>);
    const title = screen.queryByLabelText('title')
  })
})
