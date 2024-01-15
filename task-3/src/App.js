import React, { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
  const [operator, setOperator] = useState('');

  const handleClick = (value) => {
    if (input.length < 24) {
      setInput((prevInput) => {
        // Проверяем, является ли value числом
        if (!isNaN(value)) {
          // Если оператор уже выбран, начинаем вводить второе число
          if (operator !== '') {
            setFirstNumber(prevInput);
            setOperator('');
            return value;
          }
        }

        // Проверяем, является ли value оператором
        if (['+', '-', '*', '/'].includes(value)) {
          // Если уже есть введенное число, сохраняем его и оператор
          if (prevInput !== '') {
            setFirstNumber(prevInput);
            setOperator(value);
            return prevInput + value;
          }
        }

        return prevInput + value;
      });
    } else {
      alert('Слишком большое число!');
    }
  };

  const handleClear = () => {
    setInput('');
    setFirstNumber('');
    setOperator('');
  };

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleEvaluate = () => {
    try {
      if (firstNumber !== '' && operator !== '') {
        const result = performOperation(parseFloat(firstNumber), parseFloat(input), operator);
        setInput(result.toString());
        setFirstNumber(result.toString());
        setOperator('');
      }
    } catch (error) {
      setInput('Error');
    }
  };

  const performOperation = (num1, num2, operator) => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          alert('Ошибка: деление на ноль');
          return 0;
        }
      default:
        return 0;
    }
  };

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
