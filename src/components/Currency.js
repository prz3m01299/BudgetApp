import React, { useState } from 'react';


const Currency = ({ onCurrencyChange }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('GBP');

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    setSelectedCurrency(newCurrency);
    onCurrencyChange(newCurrency);
  };

  return (
    <div className='alert alert-secondary'>
      <label htmlFor='currency-dropdown'>Choose a currency:</label>
      <select id='currency-dropdown' value={selectedCurrency} onChange={handleCurrencyChange}>
        <option value='USD'>$ Dollar</option>
        <option value='GBP'>£ Pound</option>
        <option value='EUR'>€ Euro</option>
        <option value='INR'>₹ Ruppee</option>
      </select>
    </div>
  );
};

export default Currency;