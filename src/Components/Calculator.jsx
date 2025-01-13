import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import './Calculator.css';
import { useTranslation } from 'react-i18next';

function ModuloCalculator() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [modResult, setModResult] = useState(null);
  const { t,i18n  } = useTranslation();

  const handleCalculateModulo = () => {
    if (b !== 0 && b !== '') {
      setModResult(a % b);
    } else {
      setModResult('Error');
    }
  };

  return (
    <Card className="calculator-card">
      <Card.Body>
        <Card.Title style={{ textAlign: 'center'}}>{t('CalculatorTitle1')}</Card.Title>
        <Form.Group>
          <Form.Control
            type="number"
            value={a}
            onChange={(e) => setA(parseInt(e.target.value, 10))}
            placeholder={t('CalculatorText1')}
            className="input-field"
          />
          <Form.Control
            type="number"
            value={b}
            onChange={(e) => setB(parseInt(e.target.value, 10))}
            placeholder={t('CalculatorText2')}
            className="input-field"
            style={{ marginTop: '10px' }}
          />
        </Form.Group>
        <Button onClick={handleCalculateModulo} className="calculate-button" 
                style={{
                    display: 'block',
                    margin: '10px auto', 
                    fontSize: '1rem',
                    padding: '0.4rem 0.7rem',
                    fontWeight: 'bolder',
                    borderColor: '#c22748',
                    borderWidth: '2px',
                    color: '#c22748',
                    backgroundColor: 'rgb(8, 4, 4)',
                    borderRadius: '5px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease-in-out',
                    marginTop: '10px',
                    textAlign: 'center' // Ensures text alignment inside the button
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
                }}>
        {t('CalculatorButton')}
        </Button>
        {modResult !== null && <div className="result-group">{t('CalculatorResult1')} {modResult}</div>}
      </Card.Body>
    </Card>
  );
}

function PowerCalculator() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [powerResult, setPowerResult] = useState(null);
  const { t,i18n  } = useTranslation();

  const handleCalculatePower = () => {
    console.log(a+b);
    if(a !== '' && b !== ''){
    setPowerResult(Math.pow(a, b));}
    else{setPowerResult('Error');}
  };

  return (
    <Card className="calculator-card">
    <Card.Body>
      <Card.Title style={{ textAlign: 'center'}}>{t('CalculatorTitle2')}</Card.Title>
      <Form.Group>
        <Form.Control
          type="number"
          value={a}
          onChange={(e) => setA(parseInt(e.target.value, 10))}
          placeholder={t('CalculatorText1')}
          className="input-field"
        />
        <Form.Control
          type="number"
          value={b}
          onChange={(e) => setB(parseInt(e.target.value, 10))}
          placeholder={t('CalculatorText2')}
          className="input-field"
          style={{ marginTop: '10px' }}
        />
      </Form.Group>

       {a && b && (
          <div className="power-preview">
            Preview: {a}<sup>{b}</sup>
          </div>
       )}

      <Button 
        onClick={handleCalculatePower} 
        style={{
            display: 'block',
            margin: '10px auto', 
            fontSize: '1rem',
            padding: '0.4rem 0.7rem',
            fontWeight: 'bolder',
            borderColor: '#c22748',
            borderWidth: '2px',
            color: '#c22748',
            backgroundColor: 'rgb(8, 4, 4)',
            borderRadius: '5px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease-in-out',
            marginTop: '10px',
            textAlign: 'center' // Ensures text alignment inside the button
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
        }}
      >
        {t('CalculatorButton')}
      </Button>
      {powerResult !== null && <div className="result-group">  {t('CalculatorResult2')} {powerResult}</div>}
    </Card.Body>
  </Card>
  );
}

function ModuloPowerCalculator() {
  return (
    <div className="calculator-wrapper">
      <ModuloCalculator />
      <PowerCalculator />
    </div>
  );
}

export default ModuloPowerCalculator;
