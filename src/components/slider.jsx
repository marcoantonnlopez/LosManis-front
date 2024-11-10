// FeedbackSlider.jsx
import React, { useState } from 'react';

function FeedbackSlider({ onChange }) {
  const [value, setValue] = useState(3);

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);
    if (typeof onChange === 'function') {
      onChange(newValue); // Llama al callback solo si está definido y es una función
    }
  };

  const feedbackMessages = {
    1: 'Very Low',
    2: 'Low',
    3: 'Medium',
    4: 'High',
    5: 'Very High',
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <label>
        <strong>Rate from 1 to 5:</strong>
      </label>
      <br />
      <input
        type="range"
        min="1"
        max="5"
        value={value}
        onChange={handleChange}
        style={{ width: '80%' }}
      />
      <div>
        <span style={{ fontSize: '18px' }}>
          Current Rating: <strong>{value}</strong> - {feedbackMessages[value] || ''}
        </span>
      </div>
    </div>
  );
}

export default FeedbackSlider;
