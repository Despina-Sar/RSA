import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import './Calculator.css';
import { useTranslation } from 'react-i18next';
import {Modal, Row, Col } from 'react-bootstrap';

function ModuloCalculator() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [modResult, setModResult] = useState(null);
  const { t,i18n  } = useTranslation();

  const handleCalculateModulo = () => {
    if (b !== 0 && b !== '') {
      setModResult(a % b);
    } else {
      setModResult(<i className="bi bi-exclamation-triangle"></i>);
    }
  };

  return (
    <Card className="calculator-card">
      <Card.Body className="calculator-body">
        <Card.Title style={{ textAlign: 'center'}}> <i className="bi bi-calculator-fill" style={{fontSize: '18px'}}></i>{t('CalculatorTitle1')}</Card.Title>
        <br/>
        <Form.Group>
         <Row>
        <Col  xs={3} style={{padding : '0px', marginLeft: '10px', marginRight: '0px'}}>
          <Form.Control
            type="number"
            value={a}
            onChange={(e) => setA(parseInt(e.target.value, 10))}
            placeholder="a"
            className="input-field"
          />
          </Col>
          <Col xs={3}  style={{textAlign: 'center'}}>
              <div className="text-group"> mod </div>
          </Col>
          <Col  xs={3} style={{padding : '0px', marginLeft: '0px', marginRight: '0px'}}>
          <Form.Control
            type="number"
            value={b}
            onChange={(e) => setB(parseInt(e.target.value, 10))}
            placeholder="b"
            className="input-field"
           
          />
            </Col>

            <Col>
               {modResult !== null && <div className="result-group"> = {modResult}</div>}
            </Col>
          </Row>
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
    else{setPowerResult(<i className="bi bi-exclamation-triangle"></i>);}
  };

  return (
    <Card  className="calculator-card">
          <br/>
          <br/>
    <Card.Body  className="calculator-body">
      <Card.Title style={{ textAlign: 'center'}}> <i className="bi bi-calculator-fill" style={{fontSize: '18px'}}></i>  {t('CalculatorTitle2')}</Card.Title>
      <br/>
      <Form.Group>

      <Row>
      <Col  xs={3} style={{padding : '0px', marginLeft: '10px', marginRight: '0px'}}>
        <Form.Control
          type="number"
          value={a}
          onChange={(e) => setA(parseInt(e.target.value, 10))}
          placeholder="a"
          className="input-field"
          style={{ marginTop: '30px', marginRight: '20px' }}
        />
 </Col>
    <Col  xs={3} style={{padding : '0px', marginLeft: '0px', marginRight: '0px'}}> 
        <Form.Control
          type="number"
          value={b}
          onChange={(e) => setB(parseInt(e.target.value, 10))}
          placeholder="b"
          className="input-field"
          style={{ marginTop: '0px', marginRight: '20px' , marginLeft: '5px',}}
        />

         </Col>
         <Col>
         {powerResult !== null && <div className="result-group" style={{ marginTop: '30px' }}>  = {powerResult}</div>}
         </Col>
      </Row>

      </Form.Group>
     
     {/*
       {a && b && (
          <div className="power-preview">
            Preview: {a}<sup>{b}</sup>
          </div>
       )}
*/}
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
