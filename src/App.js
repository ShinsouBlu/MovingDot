import { render } from '@testing-library/react';
import './App.css';
import Block from './component/Block';
import React, { useState, useEffect } from 'react'


function App() {

  useEffect(() => {
    function resetButtonPressed(e){
      console.log('Reset Button Pressed');
    }
    document.getElementById("resetButton").addEventListener("click",resetButtonPressed);
    return () => document.getElementById("resetButton").removeEventListener("click",resetButtonPressed);
  })

  return (
    <>
    <button id="resetButton">Reset</button> 
    <Block />
    </>
  );
}
export default App;
