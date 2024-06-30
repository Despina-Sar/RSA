
import React, { useState } from 'react';
//import { Form, Button, Row, Col } from 'react-bootstrap';


/*function Algorithm(){
   
    const [formData, setFormData] = useState({
        p: '',
        q: '',
       resultnp: null,
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
      };

      const handleCalculate = (e) => {
    e.preventDefault();
    const { p, q} = formData;
    let result;
    result = parseFloat(p) * parseFloat(q);
    setFormData({
      ...formData,
      resultnp: result,
    });
  };



    
      return (
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formP">
              <Form.Label>P: </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter large prime numbers p"
                name="p"
                value={formData.p}
                onChange={handleInputChange}
              />
            </Form.Group>
    
            <Form.Group as={Col} controlId="formEmail">
              <Form.Label>Q:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter large prime numbers q"
                name="q"
                value={formData.q}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Row>
    
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Text id="passwordHelpBlock" muted>
            2.  Calculate n , which is the modulus for encryption and decryption
          </Form.Text>
          <Form.Control className="mb-3"
            type="text"
            placeholder={"n = p * q" + (formData.np)}
            aria-label="Disabled input example"
            disabled
            readOnly
             />
          <Form.Text id="passwordHelpBlock" muted>
           3.  Calculate φ(n) 
          </Form.Text>

         
                             
          <Form.Control className="mb-3"
            type="text"
            placeholder="ϕ(n)=(p−1)x(q−1)"
            aria-label="Disabled input example"
            disabled
            readOnly
           />
             
             const[form, setForm] = useState({})
          {formData.name !== null && (
          <div className="mt-3">
          <h4>Result:</h4>
          <p>{formData.name}</p>
        </div>
      )}



        </Form>
      );
    };
    
    
export default Algorithm;



*/

/*
// Function for modular exponentiation
function modExp(base, exp, mod) {
    if (mod === 1) return 0;
    let result = 1;
    base = base % mod;
    while (exp > 0) {
        if (exp % 2 === 1) {
            result = (result * base) % mod;
        }
        exp = exp >> 1;
        base = (base * base) % mod;
    }
    return result;
}

// RSA Encrypt function
function rsaEncrypt(M, E, N) {
    return modExp(M, E, N);
}

const Algorithm = () => {
    const [message, setMessage] = useState('');
    const [encryptedMessage, setEncryptedMessage] = useState('');
    const [publicExponent, setPublicExponent] = useState('');
    const [modulus, setModulus] = useState('');

    const handleEncrypt = () => {
        const M = parseInt(message);
        const E = parseInt(publicExponent);
        const N = parseInt(modulus);

        if (isNaN(M) || isNaN(E) || isNaN(N)) {
            alert('Please enter valid numbers for all fields.');
            return;
        }

        const encrypted = rsaEncrypt(M, E, N);
        setEncryptedMessage(encrypted.toString());
    };

    return (
        <div>
            <h1>RSA Encryption</h1>
            <div>
                <label>
                    Public Exponent (E):
                    <input
                        type="text"
                        value={publicExponent}
                        onChange={(e) => setPublicExponent(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Modulus (N):
                    <input
                        type="text"
                        value={modulus}
                        onChange={(e) => setModulus(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Message (M):
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
            </div>
            <button onClick={handleEncrypt}>Encrypt</button>
            {encryptedMessage && (
                <div>
                    <h2>Encrypted Message (CT):</h2>
                    <p>{encryptedMessage}</p>
                </div>
            )}
        </div>
    );
};

export default Algorithm;
*/



//----------------------------------------BLUR START----------------------------------------------------

/*
import { Card,  Container } from 'react-bootstrap';
import '../Grid.css';


const LockableCard = () => {
  const [isLocked, setIsLocked] = useState(true);

  const handleUnlock = () => {
    setIsLocked(false);
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col md="8">
          <Card className={`lockable-card ${isLocked ? 'blurred' : ''}`}>
            <Card.Body>
              <Card.Title>Main Title</Card.Title>
              <Card.Text>
                This is some text within a card body. You can put your main content here.
              </Card.Text>
              {!isLocked && (
                <Button variant="primary" onClick={handleUnlock}>
                  Unlock
                </Button>
              )}
            </Card.Body>
          </Card>
          {isLocked && (
            <div className="unlock-button-container">
              <Button variant="outline-primary" onClick={handleUnlock}>
                Unlock Card
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};



export default LockableCard;

*/
//----------------------------------------BLUR END-------------------------------------------------



//-------------------------------------WIN BUTTON START---------------------------------------------
/*

import { Modal } from 'react-bootstrap';
import Confetti from 'react-confetti/dist/react-confetti';  // Import Confetti for celebration effect
import '../Grid.css'; // Custom CSS for styling
const WinningButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    // Logic to check if the user has won (replace with your actual game logic)
    const isWinner = true; // Replace with your condition to determine if the user wins

    if (isWinner) {
      setShowModal(true); // Show the celebration message modal
    }
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <Button variant="success" onClick={handleButtonClick}>
        Click to Win!
      </Button>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Congratulations!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="celebration-container">
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              numberOfPieces={200}
              recycle={false}
              colors={['#ffffff']}
            />
            <h2 className="celebration-message">🎉 You are the WINNER! 🎉</h2>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WinningButton;

*/
//-------------------------------------WIN BUTTON END----------------------------------------



//-------------------------------------Fatcors strt------------------------------

/*
const FactorsCard = () => {
  const [number, setNumber] = useState('');
  const [factors, setFactors] = useState('');

  const handleInputChange = (e) => {
    const inputNumber = parseInt(e.target.value);

    if (!isNaN(inputNumber)) {
      setNumber(inputNumber);

      // Calculate factors
      const factorsArray = [];
      let n = inputNumber;
      for (let i = 2; i <= Math.sqrt(n); i++) {
        while (n % i === 0) {
          factorsArray.push(i);
          n /= i;
        }
      }
      if (n > 1) {
        factorsArray.push(n);
      }

      // Format factors as string
      const factorsString = factorsArray.join(' * ');
      setFactors(factorsString);
    } else {
      setNumber('');
      setFactors('');
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Factors Calculator</h5>
        <div className="form-group">
          <label htmlFor="numberInput">Enter a number:</label>
          <input
            type="number"
            className="form-control"
            id="numberInput"
            value={number}
            onChange={handleInputChange}
          />
        </div>
        {factors && (
          <div className="form-group">
            <label htmlFor="factorsLabel">Factors:</label>
            <input
              type="text"
              className="form-control"
              id="factorsLabel"
              readOnly
              value={factors}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FactorsCard;
*/
//---------------factors end-------------------------------




//---------------------------D calculation start ---------------------



const ModularInverseChecker = () => {
  const [E, setE] = useState('');
  const [x, setX] = useState('');
  const [D, setD] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeE = (event) => {
    setE(event.target.value);
  };

  const handleChangeX = (event) => {
    setX(event.target.value);
  };

  const handleChangeD = (event) => {
    setD(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const eValue = parseInt(E, 10);
    const xValue = parseInt(x, 10);
    const dValue = parseInt(D, 10);
    if ((dValue * eValue) % xValue === 1) {
      setMessage('Correct! (D * E) % x = 1');
    } else {
      setMessage('Error: (D * E) % x ≠ 1');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div>
          <label>
            E: 
            <input 
              type="number" 
              value={E} 
              onChange={handleChangeE} 
              placeholder="Enter value for E" 
              style={{ width: '100px', padding: '5px', fontSize: '16px', textAlign: 'center', marginLeft: '5px' }} 
            />
          </label>
        </div>
        <div>
          <label>
            x: 
            <input 
              type="number" 
              value={x} 
              onChange={handleChangeX} 
              placeholder="Enter value for x" 
              style={{ width: '100px', padding: '5px', fontSize: '16px', textAlign: 'center', marginLeft: '5px' }} 
            />
          </label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label>
            D: 
            <input 
              type="number" 
              value={D} 
              onChange={handleChangeD} 
              placeholder="Enter value for D" 
              style={{ width: '100px', padding: '5px', fontSize: '16px', textAlign: 'center', marginLeft: '5px' }} 
            />
          </label>
          <span style={{ fontSize: '16px' }}>* {E || 'E'} % {x || 'x'} = 1</span>
        </div>
        <button type="submit" style={{ padding: '5px 10px', fontSize: '16px' }}>Check</button>
      </form>
      {message && <p style={{ marginTop: '10px', fontSize: '16px', color: message.startsWith('Correct') ? 'green' : 'red' }}>{message}</p>}
    </div>
  );
};

// Example usage of the component
const App = () => {
  return (
    <div>
      <h1>Modular Inverse Checker</h1>
      <ModularInverseChecker />
    </div>
  );
};

export default App;
