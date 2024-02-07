import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PasswordSection = ({ generatedPassword }) => {
  const [passwordWords, setPasswordWords] = useState(1);

  const handlePasswordWordsChange = (value) => {
    setPasswordWords(value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPassword);
  };

  const generateWordString = (count) => {
    const wordArray = generatedPassword.split(/\W+/).filter(Boolean);
    const selectedWords = wordArray.slice(0, count);
    const symbols = '@#$%&*_,.';

    let resultString = '';

    for (let i = 0; i < count; i++) {
      resultString += selectedWords[i];

      if (i < count - 1 && symbols.length > 0) {
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        resultString += symbols.length > 0 ? randomSymbol : '';
      }
    }

    return resultString;
  };

  return (
    <div
      style={{
        backgroundColor: '#1f2937',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '550px',  // Ancho fijo del contenedor principal
        marginTop: '35px',
        marginLeft: '-217px',
     
      }}
    >
      <div
        style={{
          backgroundColor: '#9e9fa1',
          borderRadius: '5px',
          padding: '20px',
          marginBottom: '20px',
          wordWrap: 'break-word',
          width: '100%',  // Ancho del contenedor interno al 100%
        }}
      >
        {generateWordString(passwordWords)}
      </div>

      <div style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
        <FaCopy style={{ cursor: 'pointer', marginTop: '10px' }} onClick={copyToClipboard} />
      </div>

      <div style={{ fontSize: '1.3rem', fontWeight: 'bold', marginTop: '20px' }}>
        Password Words: {passwordWords}
      </div>

      <Slider
        min={1}
        max={5}
        value={passwordWords}
        onChange={handlePasswordWordsChange}
        style={{ width: '80%', marginTop: '10px', marginBottom: '20px' }}
        trackStyle={{ backgroundColor: '#23d179', height: '10px' }}
        railStyle={{ backgroundColor: '#394240', height: '10px' }}
        handleStyle={{
          borderColor: '#23d179',
          height: '20px',
          width: '20px',
          marginLeft: '-10px',
          marginTop: '-5px',
          backgroundColor: 'white',
        }}
      />
    </div>
  );
};

export default PasswordSection;
