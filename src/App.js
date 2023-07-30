import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';

function App() {
  let [count, setCount] =  useState(0)
  let counterIncrement = ()=>{
    setCount(count => count+1)
  }
  
  let counterDecrement = ()=>{
    setCount(function(count){
      return count-1
    })
  }
  return (
    <Fragment>
      <div className="hero">
        <div className="main">
          <div className="textBtn">
          <button className="text">{count}</button>
          </div>
          <div className="btns">
            <button className="btn" id='btn1' onClick={counterIncrement}>Increment</button>
            <button className="btn" id='btn2' onClick={counterDecrement}>Decrement</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
