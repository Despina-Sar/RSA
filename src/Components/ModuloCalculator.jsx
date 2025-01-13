import React, { useState } from 'react';
import {Button,Form,Modal} from 'react-bootstrap'
import { useTranslation } from 'react-i18next';

function ModuloCalculator() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);
  const { t,i18n  } = useTranslation();

  const handleCalculate = () => {
    if (b !== 0 && b !== '') {
      setResult(a % b);
    } else {
      setResult('Error');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto', textAlign: 'center' }}>
      <h5 style={{ textAlign: 'center', margin: '0 auto', marginBottom: '10px' }}>{t('CalculatorTitle')}</h5>
      <div>
        <input
          type="number"
          value={a}
          onChange={(e) => setA(parseInt(e.target.value, 10))}
          placeholder={t('CalculatorText1')}
          style={{
            border: '2px solid rgb(255, 255, 255)',
            backgroundColor: '#ffffff',
            borderRadius: '5px',
            padding: '5px',
            fontWeight: 'bold',
            fontSize: '1.0rem',
            color: 'rgb(108,117,125)',
            width: '100%',
            boxSizing: 'border-box'
          }}
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <input
          type="number"
          value={b}
          onChange={(e) => setB(parseInt(e.target.value, 10))}
          placeholder={t('CalculatorText2')}
          style={{
            border: '2px solid rgb(255, 255, 255)',
            backgroundColor: '#ffffff',
            borderRadius: '5px',
            padding: '5px',
            fontWeight: 'bold',
            fontSize: '1.0rem',
            color: 'rgb(108,117,125)',
            width: '100%',
            boxSizing: 'border-box'
          }}
        />
      </div>
      <Button   style={{
                  fontSize: '1rem', // Slightly larger font for better readability
                  padding: '0.4rem 0.7rem', // Adjusted padding for a balanced look
                  fontWeight: 'bolder',
                  borderColor: '#c22748', // Custom border color
                  borderWidth: '2px', // Custom border thickness
                  color: '#c22748', // Ensure text color matches or complements the border
                  backgroundColor: 'rgb(8, 4, 4)', // Dark background
                  borderRadius: '5px', // Rounded corners for a modern look
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
                  transition: 'all 0.3s ease-in-out', // Smooth animation for hover effects
                  marginLeft: '5px' , marginRight: '5px', 
                  marginTop:'10px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#c22748'; // Change to border color on hover
                  e.target.style.color = '#fff'; // Make text white on hover
                  e.target.style.boxShadow = '0 8px 12px rgba(194, 39, 72, 0.5)'; // Highlight shadow
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgb(8, 4, 4)'; // Reset to original background
                  e.target.style.color = '#c22748'; // Reset text color
                  e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)'; // Reset shadow
                }} onClick={handleCalculate}>
        {t('CalculatorButton')}
      </Button>
      {result !== null && (
        <div style={{ marginTop: '10px' }}>
            {t('CalculatorResult2')} {result}
        </div>
      )}
    </div>
  );
}

export default ModuloCalculator;
