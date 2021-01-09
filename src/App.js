import React, { createRef, useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector(({ counter }) => counter);
  const dispatch = useDispatch();
  const [inputValue, inputChange] = useState('');

  const clickTodo = (value) => {dispatch({type: value})};
  const clickReset = () => { dispatch({ type: 'RESET_COUNTER' }) }
  const clickSubmit = () => {
    const res = inputValue.replace(/[^0-9]/g, '');
    if (res) {      
      dispatch({ type: 'SUBMIT_COUNTER', payload: +res });  
    }
    return inputChange('');
  }

  return (
    <div className="App">

      <section>
        <h1>Calculator</h1>
        <p>{counter}</p>
        <div className='flex-content margin10'>
          <button className='w100' onClick={() => clickTodo('INC_COUNTER_ONE')}>1</button>
          <button className='w100' onClick={() => clickTodo('DEC_COUNTER_ONE')}>- 1</button>
        </div>
        <div className='flex-content margin10'>
          <button className='w100' onClick={() => clickTodo('INC_COUNTER_HUNDRED')}>100</button>
          <button className='w100' onClick={() => clickTodo('DEC_COUNTER_HUNDRED')}>- 100</button>
        </div>
        <div>
          <button className='w100 margin10' onClick={clickReset}>Reset</button>
        </div>
        <label>Число:</label>
        <input type='text' onChange={({target: {value}}) => inputChange(value)} value={inputValue}></input>
        <button onClick={clickSubmit}>Submit</button>

      </section>

    </div>
  );
}

export default App;
