// components/ConceptionCalculator.js
import React, { useState } from 'react';
import styles from '../styles/global.css'; // Adjust the path based on your project structure

const ConceptionCalculator = () => {
  const [dueDate, setDueDate] = useState('');
  const [gestationalAge, setGestationalAge] = useState('');
  const [conceptionDate, setConceptionDate] = useState('');

  const calculateConceptionDate = () => {
    const dueDateTimestamp = Date.parse(dueDate);
    const gestationalAgeMilliseconds = parseInt(gestationalAge) * 7 * 24 * 60 * 60 * 1000; // Convert weeks to milliseconds

    const conceptionDateTimestamp = dueDateTimestamp - gestationalAgeMilliseconds;

    setConceptionDate(new Date(conceptionDateTimestamp).toLocaleDateString());
  };

  return (
    <div className={styles.centeredContent}>
    <div className="calculator">
      <h2>Conception Calculator</h2>
      <label htmlFor="dueDate">Due Date:</label>
      <input
        type="date"
        id="dueDate"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <label htmlFor="gestationalAge">Gestational Age (weeks):</label>
      <input
        type="number"
        id="gestationalAge"
        value={gestationalAge}
        onChange={(e) => setGestationalAge(e.target.value)}
      />
      <button onClick={calculateConceptionDate}>Calculate</button>
      {conceptionDate && <p>Conception Date: {conceptionDate}</p>}
    </div>
    </div>
  );
};

export default ConceptionCalculator;
