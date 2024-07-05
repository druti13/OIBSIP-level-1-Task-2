import React from 'react';

const ResultDisplay = ({ convertedTemperature }) => {
  return (
    <div className="result-display">
      <h2>{convertedTemperature}</h2>
    </div>
  );
};

export default ResultDisplay;
