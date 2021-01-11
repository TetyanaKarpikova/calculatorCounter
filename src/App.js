import React, {useState} from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import Buttons from './components/Buttons';

function App() {
  const arr_Base = ['-1', '1', '-100', '100','50','-50'];
  const counter = useSelector(({counter}) => counter);
  const dispatch = useDispatch();
  const [inputValue, inputChange] = useState('');

  const clickTodo = (value) => {
    dispatch({type: 'CLICK_BUTTON', payload: +value});
  }
  const clickReset = () => {
    dispatch({type: 'RESET_COUNTER'})
  }
  const clickSubmit = () => {
    const res = inputValue.replace(/[^0-9]/g, '');
    if (res) {
      dispatch({type: 'SUBMIT_COUNTER', payload: +res});
    }
    return inputChange('');
  }

  return (
      <div className="App">

        <section>
          <h1>Calculator</h1>
          <p>{counter}</p>
          <div className='flex-content '>
            {
              arr_Base.map((value, index) =>
                  (<Buttons item={value} key={index} clickTodo={clickTodo}/>))
            }
          </div>
          <div>
            <button className='w100 margin10' onClick={clickReset}>Reset</button>
          </div>
          <label>Число:</label>
          <input
              type='text'
              onChange={({target: {value}}) =>
                  inputChange(value)}
              value={inputValue}
          />
          <button onClick={clickSubmit}>Submit</button>

        </section>

      </div>
  );
}

export default App;
