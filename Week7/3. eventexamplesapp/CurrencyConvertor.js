import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const conversionRate = 0.011; // Example: 1 INR = 0.011 Euro
    setEuro((rupees * conversionRate).toFixed(2));
  };

  return (
    <div>
      <h2>Currency Convertor (INR ➝ EUR)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter amount in Rupees"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      {euro && <p>Converted Amount: €{euro}</p>}
    </div>
  );
}

export default CurrencyConvertor;
