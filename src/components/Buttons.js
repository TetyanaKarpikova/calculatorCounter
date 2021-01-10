import React from 'react';
import './style.css'

const Buttons = ({item, clickTodo}) => {
    
    return (
        <div className='marg '>
            <button className='w100' onClick={() => {clickTodo(item)}}>{item}</button>
        </div>
    )
}

export default Buttons;