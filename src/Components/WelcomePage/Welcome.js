import React from 'react';
import './welcome.css';

const Welcome = () => {
  return (
    <div className='welcome-container'>
      <p className='title'>Pop Quiz</p>
      <img className='title-img' src={'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}/>
      <button className='start-btn'>Start</button>
    </div>
  )
}

export default Welcome;
