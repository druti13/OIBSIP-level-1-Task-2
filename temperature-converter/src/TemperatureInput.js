import React from 'react';

const TemperatureInput = ({ temperature, setTemperature, unit, setUnit }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        placeholder="Enter temperature"
      />
      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Kelvin">Kelvin</option>
      </select>
    </div>
  );
};

export default TemperatureInput;
