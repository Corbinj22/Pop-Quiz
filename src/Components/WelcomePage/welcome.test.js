import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter> <Welcome /> </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})

describe('<Welcome />', () => {
  it('allow user to click start game', () => {
    const { getByPlaceholderText, getByText } = render(<BrowserRouter> <Welcome /> </BrowserRouter>);
    const startBtn = getByText('Start')
    userEvent.click(startBtn)
  })
})
