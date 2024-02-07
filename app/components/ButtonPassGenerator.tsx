// ButtonPassGenerator.js
import React, { useState } from 'react';
import PasswordSection from './PasswordSection';

const CheckboxOption = ({ label, checked, onChange }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', cursor: 'pointer' }}>
      <div style={{ marginLeft: '10px', marginRight: '10px', width: '378px' }} onClick={onChange}>
        {label}
      </div>
      <input type="checkbox" checked={checked} onChange={onChange} style={{ display: 'none' }} />
      <div
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          border: '2px solid #23d179',
          marginRight: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: checked ? '#23d179' : 'transparent',
          color: checked ? 'white' : '#23d179',
          transition: 'background 0.3s ease',
        }}
        onClick={onChange}
      >
        {checked && ''}
      </div>
    </div>
  );
};

const ButtonPassGenerator = () => {
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const buttonStyle = {
    backgroundColor: '#23d179',
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    padding: '9px 18px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const wordsList = [
    'papel', 'pared', 'negro', 'rubic', 'crema', 'computador', 'viejo', 'averiado', 'microfono',
    'azul', 'montaña', 'ciudad', 'jirafa', 'vuelo', 'ensalada', 'velocidad', 'cristal', 'cascada',
    'elefante', 'lápiz', 'estrella', 'plátano', 'agujero', 'técnico', 'teclado', 'almohada', 'tigre',
    'manzana', 'fruta', 'naranja', 'playa', 'coche', 'invierno', 'guitarra', 'globo', 'libro',
    'escalera', 'luz', 'reflejo', 'murmullo', 'radiante', 'orquídea', 'fotografía', 'caballero', 'batalla',
    'refugio', 'candado', 'acuático', 'melodía', 'arcoiris', 'relámpago', 'océano', 'esmeralda', 'espejo',
    'fantasma', 'astronomía', 'reloj', 'silencio', 'serpiente', 'vuelo', 'cuchillo', 'lámpara', 'caballo',
    'fuego', 'neblina', 'paisaje', 'amarillo', 'peluche', 'hipopotamo', 'vela', 'mariposa', 'paraguas',
    'ventana', 'tempestad', 'laberinto', 'sabiduría', 'manuscrito', 'caramelos', 'sinfonía', 'sombrero', 'relojería',
    'círculo', 'cosecha', 'centenario', 'radio', 'jardín', 'bufanda', 'espiral', 'puzzle', 'delta',
    'desierto', 'burbuja', 'órgano', 'alquimia', 'espectro', 'acróbata', 'quasar', 'simetría', 'botella',
    'vino', 'sorpresa', 'anémona', 'cítrico', 'térmico', 'cascabel', 'árbitro', 'extraterrestre', 'helado',
    'aniversario', 'fugaz', 'sinfonía', 'resplandor', 'diamante', 'jade', 'papiro', 'agujero', 'copo de nieve',
    'pimiento', 'astro', 'ventilador', 'abecedario', 'esquimal', 'espuma', 'frontera', 'sonrisa', 'invierno',
    'imaginación', 'misterio', 'alquimia', 'candelabro', 'gusano', 'ciclón', 'cáscara', 'sombra', 'campana'
];


  const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

  const generateRandomPassword = ({ uppercase, lowercase, symbols, numbers }) => {
  let password = '';

  const getRandomCase = (word) => {
    const randomizedWord = word
      .split('')
      .map(char => Math.random() < 0.5 ? char.toUpperCase() : char.toLowerCase())
      .join('');

    return (uppercase && lowercase) ? randomizedWord : (uppercase && !lowercase) ? randomizedWord.toUpperCase() : randomizedWord.toLowerCase();
  };

  const getRandomSymbol = () => symbols ? getRandomElement('!@#$%^&*()_-+=<>?/,.|~') : '';

  const getRandomNumber = () => numbers ? Math.floor(Math.random() * 10) : '';

  for (let i = 0; i < 5; i++) {
    const randomWord = getRandomElement(wordsList);
    password += getRandomCase(randomWord);
    if (i < 4) {
      password += getRandomSymbol();
    }
  }

  password = `${getRandomNumber()}${password}`;

  return password;
};
  const handleCheckboxChange = (option) => {
    switch (option) {
      case 'uppercase':
        setUppercase(!uppercase);
        break;
      case 'lowercase':
        setLowercase(!lowercase);
        break;
      case 'symbols':
        setSymbols(!symbols);
        break;
      case 'numbers':
        setNumbers(!numbers);
        break;
      default:
        break;
    }
  };

  const generatePassword = () => {
    const password = generateRandomPassword({ uppercase, lowercase, symbols, numbers });
    setGeneratedPassword(password);
  };

  return (
    <div style={{ marginLeft: '242px', marginTop: '20px' }}>
    <div style={{ marginLeft: 'px', marginTop: '20px' }}>
    <PasswordSection generatedPassword={generatedPassword} />
    </div>
      <div style={{ marginLeft: '-250px' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginLeft: '94px' }}>
          <CheckboxOption label="Uppercase" checked={uppercase} onChange={() => handleCheckboxChange('uppercase')} />
          <CheckboxOption label="Lowercase" checked={lowercase} onChange={() => handleCheckboxChange('lowercase')} />
       
          <CheckboxOption label="Numbers" checked={numbers} onChange={() => handleCheckboxChange('numbers')} />
        </div>
      </div>
      <button style={buttonStyle} onClick={generatePassword}>
        Generate
      </button>
      </div>
    
  );
};

export default ButtonPassGenerator;
