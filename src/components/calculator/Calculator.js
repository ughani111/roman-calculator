import React, { useState, useRef } from 'react';
import { romanToInt, intToRoman, calculateTotal, validateInput } from './helpers';
import './calculator.css';

function Calculator() {

  const number1 = useRef(null);
  const number2 = useRef(null);
  const [message, setMessage] = useState('')
  const [operator,setOperator] = useState("+");


  const calculateTotalHandler = (e) => {

    const value1 =  number1.current.value.toUpperCase()
    const value2 = number2.current.value.toUpperCase()
    
    if (!validateInput(value1) ||
      !validateInput(value2) ||
      !validateInput(value2) === "") {
      setMessage("Please enter valid numbers")
    } else {
      const int1 = romanToInt(value1)
      const int2 = romanToInt(value2)
      const total = calculateTotal(operator)(int1, int2)
      setMessage("Roman total is " + intToRoman(total))
    }

  }


  const SelectOperator = event => {
    setOperator(event.target.value)
  }


  return (
    <div className="container">
        <div className="calculator">
          <h1 className="heading">Roman Calculator</h1>
            <select className="calculator-select" onChange={SelectOperator}>
              <option value="+">addition</option>
              <option value="-">subtraction</option>
              <option value="*">multiplication</option>
            </select>
          </div>
      
          <div className="calculator">
            <label className="calculator-lable" htmlFor="number1">enter a roman number</label>
            <input className="calculator-input" type="text" ref={number1} />
          </div>

          <div className="calculator">
            <label className="calculator-lable" htmlFor="number2">enter a roman number</label>
            <input className="calculator-input" type="text" ref={number2} />
          </div>
          <button className="calculator-button" onClick={calculateTotalHandler}>Calculate</button>

          
          { message && 
                <div className="calculator-result">
                   {message}
                </div>
              }
      </div>
  )
}


export default Calculator;
