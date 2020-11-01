import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router }  from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import { render, fireEvent, waitFor, cleanup, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { fetchedData } from '../../apiRequestFake'
jest.mock('../../apiRequestFake')

describe('<App />', () => {
  let fakeData;
  const mockFn = jest.fn()

  beforeEach(() => {

    fakeData = [
      {
        "question": "What was Tandem previous name?",
        "incorrect": ["Tandem", "Burger Shack", "Extraordinary Humans"],
        "correct": "Devmynd"
      },
      {
        "question": "In Shakespeare's play Julius Caesar, Caesar's last words were...",
        "incorrect": ["Iacta alea est!", "Vidi, vini, vici", "Aegri somnia vana"],
        "correct": "Et tu, Brute?"
      }
    ]
  })

  afterEach(() => {
    cleanup()
  })

  it('should render to the Dom', async () => {
    mockFn.mockResolvedValueOnce(fakeData)
    const history = createMemoryHistory()
    const mockrender = render(<Router history={history}> <App /> </Router>)
    const { getByText, getByPlaceholderText } = mockrender
    expect(getByText('Pop Quiz')).toBeInTheDocument()
  })

  it('should let user start the game', async () => {
    jest.resetAllMocks()
    mockFn.mockResolvedValueOnce(fakeData)
    const history = createMemoryHistory()
    const mockrender = render(<Router history={history}> <App /> </Router>)
    const { getByText, getByPlaceholderText } = mockrender
    expect(getByText('Pop Quiz')).toBeInTheDocument()
    const loginBtn = getByText('Start')

    fireEvent.click(loginBtn)
    expect(getByText('Right')).toBeInTheDocument()
  })

  it('should let user answer a question', async () => {
    jest.resetAllMocks()
    mockFn.mockResolvedValueOnce(fakeData)
    const history = createMemoryHistory()
    const mockrender = render(<Router history={history}> <App /> </Router>)
    const { getByText, getByPlaceholderText } = mockrender
    expect(getByText('Pop Quiz')).toBeInTheDocument()

    const loginBtn = getByText('Start')
    fireEvent.click(loginBtn)
    expect(getByText('Right')).toBeInTheDocument()

    const test = getByText("Thank You For Playing")
  })

})
