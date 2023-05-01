import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, expenses, dispatch } = useContext(AppContext);
  const [value, setValue] = useState(budget);
  const [errorMessage, setErrorMessage] = useState('');

  const handleValueChange = (event) => {
    const newValue = parseInt(event.target.value) || 0;
    if (newValue < expenses.total) {
      setErrorMessage('Error: Budget cannot be lower than total spendings.');
      return;
    }
    if (newValue > 20000) {
      setErrorMessage('Error: Maximum budget limit is £20,000.');
      return;
    }
    setValue(newValue);
    dispatch({ type: 'SET_BUDGET', payload: newValue });
    setErrorMessage('');
  };

  return (
    <div className='alert alert-secondary'>
      <span>Budget: £</span>
      <input type='number' value={value} onChange={handleValueChange} step='10' max='20000' />
      {errorMessage && <div className='alert alert-danger'>{errorMessage}</div>}
    </div>
  );
};

export default Budget;
