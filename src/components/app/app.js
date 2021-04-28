import React from 'react';
import './app.css';
import Main from '../main/main';
import StepHandler from "../stepHandler/StepHandler";

const App = () => {
  return (
    <div className='app-container'>
      <Main/>
      <StepHandler/>
    </div>
  )
}

export default App;