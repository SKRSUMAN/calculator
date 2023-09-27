import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);
  
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const calculatedResult = eval(input);
        const newHistoryEntry = `${input} = ${calculatedResult}`;
        setResult(calculatedResult);
        setHistory([...history, newHistoryEntry]);
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'Clear') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    '7', '8', '9', '+',
    '4', '5', '6', '-',
    '1', '2', '3', '*',
    'Clear', '0', '=', '/'
  ];

  return (
    <>
      <div className='container'>
        <h1>Calculator</h1>
        <div className='calculator'>
          <form>
            <input
              type="text"
              id="textBox1"
              name="textBox"
              autoComplete="on"
              minLength="5"
              maxLength="80"
              aria-label="Text box to enter name"
              value={input}
              onChange={handleInputChange}
            />
          </form>
          <div className="buttons">
            {buttons.map((buttonValue) => (
              <button
                key={buttonValue}
                className={`btn ${buttonValue === '=' ? 'equal-btn' : ''}`}
                onClick={() => handleButtonClick(buttonValue)}
              >
                {buttonValue}
              </button>
            ))}
          </div>
        </div>
        <div className="result">{result}</div>
        <div className="history">
          <h2>Calculation History</h2>
          <ul>
            {history.slice(-10).map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Calculator;
