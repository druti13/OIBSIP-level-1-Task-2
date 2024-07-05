import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';
import ConvertButton from './ConvertButton';
import ResultDisplay from './ResultDisplay';
import './App.css';

const App = () => {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('Celsius');
  const [convertedTemperature, setConvertedTemperature] = useState('');

  const handleConvert = () => {
    let temp = parseFloat(temperature);
    let convertedTemp = '';

    if (isNaN(temp)) {
      alert('Please enter a valid number');
      return;
    }

    switch (unit) {
      case 'Celsius':
        convertedTemp = `${(temp * 9/5) + 32} °F`;
        break;
      case 'Fahrenheit':
        convertedTemp = `${(temp - 32) * 5/9} °C`;
        break;
      case 'Kelvin':
        convertedTemp = `${temp - 273.15} °C`;
        break;
      default:
        break;
    }

    setConvertedTemperature(convertedTemp);
  };

  return (
    <div className="app-container">
      <h1>Temperature Converter</h1>
      <TemperatureInput
        temperature={temperature}
        setTemperature={setTemperature}
        unit={unit}
        setUnit={setUnit}
      />
      <ConvertButton handleConvert={handleConvert} />
      <ResultDisplay convertedTemperature={convertedTemperature} />
    </div>
  );
};

export default App;
