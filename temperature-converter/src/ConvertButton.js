import React from 'react';

const ConvertButton = ({ handleConvert }) => {
  return (
    <button onClick={handleConvert} className="convert-button">
      Convert
    </button>
  );
};

export default ConvertButton;
