import React from 'react';
import './welcome.css';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className='welcome-container'>
      <p className='title'>Pop Quiz</p>
      <img className='title-img' src={'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}/>
      <Link to ='/Pop-Quiz/pop-quiz'>
        <button className='start-btn'>Start</button>
      </Link>
    </div>
  )
}

export default Welcome;
