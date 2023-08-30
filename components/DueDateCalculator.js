// components/DueDateCalculator.js
import React, { useState } from 'react';
import styles from '../styles/global.css'; // Adjust the path based on your project structure


const DueDateCalculator = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [cycleLength, setCycleLength] = useState('');
  const [dueDate, setDueDate] = useState('');

  const calculateDueDate = () => {
    if (lastPeriodDate && cycleLength) {
      const lastPeriodTimestamp = Date.parse(lastPeriodDate);
      const estimatedDueDateTimestamp = lastPeriodTimestamp + (parseInt(cycleLength) * 24 * 60 * 60 * 1000);

      setDueDate(new Date(estimatedDueDateTimestamp).toLocaleDateString());
    }
  };

  return (
    <div className={styles.centeredContent}>
    <div className="calculator">
      <h2>Due Date Calculator</h2>
      <label htmlFor="lastPeriodDate">Last Period Date:</label>
      <input
        type="date"
        id="lastPeriodDate"
        value={lastPeriodDate}
        onChange={(e) => setLastPeriodDate(e.target.value)}
      />
      <label htmlFor="cycleLength">Cycle Length (days):</label>
      <input
        type="number"
        id="cycleLength"
        value={cycleLength}
        onChange={(e) => setCycleLength(e.target.value)}
        min="21"
        max="35"
      />
      <button onClick={calculateDueDate}>Calculate</button>
      {dueDate && <p>Estimated Due Date: {dueDate}</p>}
    </div>
    </div>
  );
};

export default DueDateCalculator;
