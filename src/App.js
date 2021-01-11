import React, { createRef } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector(({ counter }) => counter);
  const dispatch = useDispatch();
  const inputNum = createRef();
//todo замінити ці 4 метода одним
  const clickIncOne = () => { dispatch({ type: 'INC_COUNTER_ONE' }) }
  const clickDecOne = () => { dispatch({ type: 'DEC_COUNTER_ONE' }) }
  const clickIncHundred = () => { dispatch({ type: 'INC_COUNTER_HUNDRED' }) }
  const clickDecHundred = () => { dispatch({ type: 'DEC_COUNTER_HUNDRED' }) }

  const clickReset = () => { dispatch({ type: 'RESET_COUNTER' }) }
  const clickSubmit = () => {
    const res = inputNum.current.value.replace(/[^0-9]/g, '');
    if (res) {      
      dispatch({ type: 'SUBMIT_COUNTER', payload: +res });  
    }
    return inputNum.current.value = null;
  }

  return (
    <div className="App">

      <section>
        <h1>Calculator</h1>
        <p>{counter}</p>
        <div className='flex-content margin10'>
          <button className='w100' onClick={clickIncOne}>1</button>
          <button className='w100' onClick={clickDecOne}>- 1</button>
        </div>
        <div className='flex-content margin10'>
          <button className='w100' onClick={clickIncHundred}>100</button>
          <button className='w100' onClick={clickDecHundred}>- 100</button>
        </div>
        <div>
          <button className='w100 margin10' onClick={clickReset}>Reset</button>
        </div>
        <label>Число:</label>
        {/*//todo зробити контрольований інпут*/}
        <input type='text' ref={inputNum}></input>
        <button onClick={clickSubmit}>Submit</button>

      </section>

    </div>
  );
}

export default App;
