import React from 'react';
import './Counter.css';

function Counter({ numClics }) {
    return (
        <div className='contador'>
            {numClics}
        </div>
    )
}

export default Counter;