import React, { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (input.length > 23) {
      alert('Слишком большое количество символов!');
      return;
    }

    if (
      (
        value === '+'
        || value === '-'
        || value === '*'
        || value === '/'
      )
      &&
      (
        input.split('+').length === 2
        || input.split('-').length === 2
        || input.split('*').length === 2
        || input.split('/').length === 2
      )
    ) {
      const currentResult = input.split('+').length === 2 ?
          evaluetion(+input.split('+')[0], +input.split('+')[1], '+')
        :
          input.split('-').length === 2 ?
            evaluetion(+input.split('-')[0], +input.split('-')[1], '-')
          :
            input.split('*').length === 2 ?
              evaluetion(+input.split('*')[0], +input.split('*')[1], '*')
            :
              input.split('/').length === 2 ?
                evaluetion(+input.split('/')[0], +input.split('/')[1], '/')
              :
                0;

      setInput(prevInput => currentResult + value);
      return;
    }

    setInput(prevInput => prevInput + value);
  }

  const handleClear = () => {
    setInput('');
  }

  const handleDelete = () => {
    setInput(prevInput => prevInput.slice(0, -1));
  }

  const handleEvaluate = () => {
    setInput(
      input.split('+').length === 2 ?
        evaluetion(+input.split('+')[0], +input.split('+')[1], '+') + ''
      :
        input.split('-').length === 2 ?
          evaluetion(+input.split('-')[0], +input.split('-')[1], '-') + ''
        :
          input.split('*').length === 2 ?
            evaluetion(+input.split('*')[0], +input.split('*')[1], '*') + ''
          :
            input.split('/').length === 2 ?
              evaluetion(+input.split('/')[0], +input.split('/')[1], '/') + ''
            :
          0
    );
  }

  const evaluetion = (a, b, operand) => {
    if (b === 0 && operand === '/') {
      alert('На ноль делить нельзя!');
      return 0;
    }

    switch (operand) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
      default:
        return;
    }
  }

  return (
    <main>
      <section className="calculator">
        <div className="display">{input}</div>

        <div className="buttons">
          <button className='clear' onClick={handleClear}>CLEAR</button>

          <button className='delete' onClick={handleDelete}>DEL</button>

          <div className='number_buttons'>
            <button className='number number_1' onClick={() => handleClick('1')}>1</button>
            <button className='number number_2' onClick={() => handleClick('2')}>2</button>
            <button className='number number_3' onClick={() => handleClick('3')}>3</button>
            <button className='number number_4' onClick={() => handleClick('4')}>4</button>
            <button className='number number_5' onClick={() => handleClick('5')}>5</button>
            <button className='number number_6' onClick={() => handleClick('6')}>6</button>
            <button className='number number_7' onClick={() => handleClick('7')}>7</button>
            <button className='number number_8' onClick={() => handleClick('8')}>8</button>
            <button className='number number_9' onClick={() => handleClick('9')}>9</button>
          </div>

          <div className='operation_buttons'>
            <button className='operation_button divide' onClick={() => handleClick('/')}>/</button>
            <button className='operation_button multy' onClick={() => handleClick('*')}>x</button>
            <button className='operation_button minus' onClick={() => handleClick('-')}>-</button>
            <button className='operation_button plus' onClick={() => handleClick('+')}>+</button>
          </div>

          <button className='zero_button' onClick={() => handleClick('0')}>0</button>

          <button className='eval' onClick={handleEvaluate}>=</button>
        </div>
      </section>
    </main>
  );
};

export default App;
