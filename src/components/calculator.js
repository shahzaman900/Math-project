import { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [valueState, setValueState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const getButtonValue = (e) => {
    const buttonName = e.target.innerHTML;
    setValueState(calculate(valueState, buttonName));
  };

  return (
    <div className='calculator'>
      <div className='display'>{valueState.total}  { valueState.operation} {valueState.next}</div>
      <div className='row'>
        <button onClick={ getButtonValue }>AC</button>
        <button onClick={ getButtonValue }>+/-</button>
        <button onClick={ getButtonValue }>%</button>
        <button className='yellow' onClick={ getButtonValue }>÷</button>
      </div>
      <div className='row'>
        <button onClick={ getButtonValue }>7</button>
        <button onClick={ getButtonValue }>8</button>
        <button onClick={ getButtonValue }>9</button>
        <button className='yellow' onClick={ getButtonValue }>x</button>
      </div>
      <div className='row'>
        <button onClick={ getButtonValue }>4</button>
        <button onClick={ getButtonValue }>5</button>
        <button onClick={ getButtonValue }>6</button>
        <button className='yellow' onClick={ getButtonValue }>-</button>
      </div>
       <div className='row'>
        <button onClick={ getButtonValue }>1</button>
        <button onClick={ getButtonValue }>2</button>
        <button onClick={ getButtonValue }>3</button>
        <button className='yellow' onClick={ getButtonValue }>+</button>
      </div>
      <div className='row'>
        <button className='zero' onClick={ getButtonValue }>0</button>
        <button onClick={ getButtonValue }>.</button>
        <button className='yellow' onClick={ getButtonValue }>=</button>
      </div>
    </div>
  );
}

export default Calculator;