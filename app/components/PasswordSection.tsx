"use client";
import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; 

const PasswordSection = () => {
  
  const [passwordWords, setPasswordWords] = useState(1);

  const handlePasswordWordsChange = (value) => {
    setPasswordWords(value);
  };

  return (
    <div
      style={{
        backgroundColor: '#1f2937',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '400px',
        marginTop: '35px',
        marginLeft: '100px',
      }}
    >
      <div
        style={{
          backgroundColor: '#9e9fa1',
          borderRadius: '5px',
          padding: '30px',
        }}
      >
        <FaCopy style={{ marginLeft: '325px' }} />
      </div>

     
      <label htmlFor="passwordWords" style={{ marginTop: '25px', fontSize: '1.3rem', fontWeight: 'bold' }}>
        Password Words: {passwordWords}
      </label>

   
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