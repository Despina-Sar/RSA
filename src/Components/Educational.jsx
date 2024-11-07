
//import React, { useState } from 'react';
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
import React, { useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import Confetti from 'react-confetti';

function GameComponent() {
  const [gameState, setGameState] = useState({ score: 0, hasWon: false });
  const [showModal, setShowModal] = useState(false);

  // Function to be called when user wins the game
  const handleWin = () => {
    console.log('User has won the game!');
    setGameState((prevState) => ({ ...prevState, hasWon: true }));
    setShowModal(true);
  };

  // Example function to simulate game progress
  const increaseScore = () => {
    setGameState((prevState) => {
      const newScore = prevState.score + 10;
      if (newScore >= 100) {
        handleWin(); // Trigger the win condition if the score reaches 100
      }
      return { ...prevState, score: newScore };
    });
  };

  // Reset the game
  const resetGame = () => {
    setGameState({ score: 0, hasWon: false });
    setShowModal(false);
  };

  return (
    <div className="game-container">
      <h1 className="game-score">Score: {gameState.score}</h1>

      {!gameState.hasWon && (
        <Button onClick={handleWin()} variant="info" className="increase-button">
          Winnnn
        </Button>
      )}

      {gameState.hasWon && <h2 className="win-message">You've won the game!</h2>}

 
      {gameState.hasWon && <Confetti />}


      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>🏆 Congratulations!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card className="text-center p-3 shadow-lg" style={{ borderRadius: '15px', backgroundColor: '#333', color: '#fff' }}>
            <Card.Body>
              <Card.Title as="h2" className="text-light">Victory Achieved!</Card.Title>
              <Card.Text as="h4" className="mb-4">
                You've completed the challenge with a score of <strong>{gameState.score}</strong>.
              </Card.Text>
              <Button variant="outline-light" onClick={resetGame}>
                Play Again
              </Button>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>

      <style jsx="true">{`
        .game-container {
          text-align: center;
          margin-top: 50px;
          background-color: #000; 
          color: #fff; 
          min-height: 100vh;
          font-family: 'Georgia', serif; 
          padding-top: 50px;
        }
        .game-score {
          font-size: 3rem;
          margin-bottom: 30px;
          color: #f5f5f5;
        }
        .increase-button {
          font-size: 1.5rem;
          padding: 10px 30px;
          background-color: #444; 
          border-color: #444;
        }
        .win-message {
          font-size: 2rem;
          color: #28a745;
          margin-top: 20px;
        }
        .modal-header, .modal-body {
          background-color: #222; 
          color: white; 
        }
        .modal-title {
          font-family: 'Georgia', serif; 
          font-size: 1.75rem;
        }
        .btn-outline-light {
          border-color: #fff;
          color: #fff;
        }
      `}</style>
    </div>
  );
}

export default GameComponent;

*/

//-------------------------------------WIN BUTTON END----------------------------------------




//-------------------Close validation start-----------------

/*
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function ExampleForm() {
  const [formValues, setFormValues] = useState({ name: '', email: '' });

  // Function to handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any fields are empty
    if (!formValues.name || !formValues.email) {
      alert('Please fill out all fields.');
    } else {
      // Perform your submission logic here (e.g., API call)
      alert('Form submitted successfully!');
    }
  };

  return (
    <div>
      <h3>Example Form</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formValues.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formValues.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ExampleForm;


//-------------------Close validation end----------------

*/


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

/*
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
*/

/*

import React, { useState } from 'react';
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap';

const CardSwitcher = () => {
    const [activeCard, setActiveCard] = useState(''); // State to manage active card

    const handleButtonClick = (card) => {
        setActiveCard(card); // Set the active card based on button click
    };

    return (
        <Container>
            <Row className="justify-content-center mt-2">
                <Col xs={6}>
                    <Button 
                        variant="dark" 
                        onClick={() => handleButtonClick('card1')}
                        className="me-2"
                    >
                        Υπολογισμοί Αλγορίθμου
                    </Button>
                    <Button 
                        variant="dark" 
                        onClick={() => handleButtonClick('card2')}
                    >
                       Διαδικασία Κρυπρογράφισης
                    </Button>
                </Col>
            </Row>

            <Row className="justify-content-center mt-2">
                <Col xs={9}>
                    {activeCard === 'card1' && (
                      <Card border="info" className="customcardDemo1">
                      <Card.Body>
                                                   
                          <Form className="customform">                    
                            <Form.Label>
                              1. Επιλέγουμε δύο πρώτους αριθμούς p και q. Αυτοί οι αριθμοί πρέπει να είναι μεγάλοι και τυχαίοι, ώστε να διασφαλίζεται η ασφάλεια του συστήματος.
                            </Form.Label>
                            <Row className="mb-2">
                                <Col>
                                <Form.Label>P: </Form.Label>
                                </Col>
                                <Col xs={5}>
                                  <Form.Control placeholder="3" disabled style={{width:"100%", fontSize: '13px'}} />
                                </Col>
                               
                                <Col>
                                  <Form.Label>Q: </Form.Label>
                                </Col>
                                <Col xs={5}>
                                  <Form.Control placeholder="11" disabled style={{width:"100%", fontSize: '13px'}} />
                                </Col>
                               
                               
                              </Row>                     
                           </Form>
                         
        
        
                           <Form className="customform">                    
                            <Form.Label>
                            2.  Υπολογίζουμε το n ως το γινόμενο των δύο πρώτων αριθμών καθώς και το Φ(n) με ον παρακάτω τρόπο:
                            </Form.Label>
                            <Row className="mb-2">
                                <Col xs={1}>
                                <Form.Label>n: </Form.Label>
                                </Col>
                                <Col xs={5}>
                                  <Form.Control placeholder="P x Q= 3 x 11 = 33" disabled style={{width:"100%", fontSize: '13px'}} />
                                </Col>
                               
                                <Col xs={1}>
                                  <Form.Label>Φ(n): </Form.Label>
                                </Col>
                                <Col xs={5}>
                                  <Form.Control placeholder="(P-1)x(Q-1)=2 x 10= 20" disabled style={{width:"100%", fontSize: '13px'}} />
                                </Col>
                               
                               
                              </Row>                     
                           </Form>
        
        
                            <Form className="customform">
                              <Form.Label>
                                3.  Επιλέγουμε το Public Key &nbsp;
                              <i class="bi bi-unlock-fill" style={{fontSize: '15px'}}></i> 
                             , έτσι ώστε να είναι σχετικά πρώτο με το Φ(n).  Αυτό σημαίνει ότι το 
                             E δεν πρέπει να διαιρεί το Φ(n) και δεν πρέπει να είναι πολλαπλάσιο των παραγόντων του Φ(n)
                              </Form.Label>
                              <ul>
                                  <li>Παράγοντες του Φ(n) 20 = 5 x 4 = 5 x 2 x 2</li>
                                  <li>Συνεπώς το E δεν πρέπει να είναι πολλαπλάσιο των 5 & 2 και να μην διαιρείται από Το 20</li>
                                  <li> <u>Επιλέγουμε E = 7 </u></li>
                               </ul>               
                            </Form>
        
                            <Form className="customform">
                              <Form.Label>
                              4.  Υπολογίζουμε το Private Key  &nbsp;
                              <i class="bi bi-key-fill"  style={{fontSize: '17px'}} ></i> 
                             D έτσι ώστε (DxE)mod(Φ(n))=1
                              </Form.Label>
                              <ul>
                                  <li>(D x 7) mod 20 = 1</li>
                                  <li> <u>Επιλέγουμε D = 3 καθώς (3 x 7) mod 20 = 1</u></li>
                               </ul>               
                            </Form>             
                      </Card.Body>
                    </Card>
                    )}
                    {activeCard === 'card2' && (
                           <Row>
                           <Col>          
                             <Card border="info"className="customcardDemo1">
                               <Card.Body>
                                 <Card.Title style={{ fontWeight: 'bold' ,fontSize: '1.0rem'}}>
                                 <i class="bi bi-person-square"style={{fontSize: '16px', color:'rgb(68, 199, 235)'}} ></i> &nbsp;Bob</Card.Title>
                                      
                                                 
                                 <Form className="customform">                    
                                     <Form.Label>
                                      1.&nbsp;
                                      <i class="bi bi-person-square"style={{fontSize: '16px', color:'rgb(68, 199, 235)'}} ></i> &nbsp;
                                       Ο Bob δημιουργεί το Public Key &nbsp;
                                      <i class="bi bi-unlock-fill" style={{fontSize: '15px'}}></i>
                                      (E,n) και το Private Key&nbsp;
                                      <i class="bi bi-key-fill"  style={{fontSize: '17px'}} ></i> 
                                      (D,n) 
                                     </Form.Label> 
                                     </Form>
                 
                                   <Form className="customform">  
                                     <Form.Label>
                                      2.&nbsp;
                                      <i class="bi bi-person-square"style={{fontSize: '17px', color:'rgb(68, 199, 235)'}} ></i> &nbsp;
                                      Ο Bob στέλνει το Public Key  &nbsp;
                                       <i class="bi bi-unlock-fill" style={{fontSize: '15px'}}></i>
                                       (E,n) στην  &nbsp;
                                      <i class="bi bi-person-square"style={{fontSize: '17px', color:'rgb(235, 68, 113)'}} ></i> &nbsp;
                                       Alice. Αυτό επιτρέπει στην Alice να κρυπτογραφεί μηνύματα που προορίζονται για τον Bob.
                                     </Form.Label>                  
                                     </Form>
                 
                                     <Form className="customform"> 
                                     <Form.Label>
                                      5.&nbsp;
                                      <i class="bi bi-person-square"style={{fontSize: '17px', color:'rgb(68, 199, 235)'}} ></i> &nbsp;
                                      Ο Bob λαμβάνει το κρυπτογραφημένο μήνυμα  &nbsp;
                                      <i class="bi bi-lock-fill"style={{fontSize: '15px'}} ></i> CT. Χρησιμοποιεί το Private Key του &nbsp;
                                      <i class="bi bi-key-fill"  style={{fontSize: '17px'}} ></i> 
                                      (D,n) για να αποκρυπτογραφήσει το μήνυμα.
                 �                    </Form.Label>                  
                                     </Form>
                 
                                     <Form className="customform"> 
                                     <Form.Label>
                                      6.&nbsp;
                                      <i class="bi bi-person-square"style={{fontSize: '17px', color:'rgb(68, 199, 235)'}} ></i> &nbsp;
                                      Ο Bob  ανακτά το αρχικό μήνυμα  &nbsp;
                                      <i class="bi bi-chat-left-text-fill" style={{fontSize: '17px', color:'rgb(235, 68, 113)'}}></i>&nbsp;
                                      Μ και μπορεί να το διαβάσει.
                                     </Form.Label>                  
                                     </Form>
                 
                                     <Form className="customform"> 
                                     <Form.Label>
                                     <Row className="mb-2">
                                      &nbsp;&nbsp;&nbsp;&nbsp;
                                      <Col xs={3}>
                                       <i class="bi bi-chat-left-text-fill" style={{fontSize: '17px', color:'rgb(235, 68, 113)'}}></i>&nbsp;
                                         <Form.Label>M = </Form.Label>
                                         </Col>
                                         <Col xs={8}>
                                           <Form.Control placeholder="CT^D mod N" disabled style={{width:"100%", fontSize: '13px'}} />
                                        </Col>
                                      </Row>
                                                
                                     </Form.Label>                  
                                     </Form>
                          
                               </Card.Body>
                             </Card>
                             <br />         
                 
                           </Col>
                 
                           <Col>
                             <Card Card border="danger"  className="customcardDemo2">              
                                 <Card.Body>
                                   <Card.Title style={{ fontWeight: 'bold',fontSize: '1.0rem' }}> <i class="bi bi-person-square"style={{fontSize: '17px', color:'rgb(235, 68, 113)'}} ></i> &nbsp;Alice</Card.Title>
                                                              
                                     <Form className="customform"> 
                                     <Form.Label>
                                      3.&nbsp;
                                      <i class="bi bi-person-square"style={{fontSize: '17px', color:'rgb(235, 68, 113)'}} ></i> &nbsp;
                                      Η Alice επιθυμεί να στείλει ένα μήνυμα M στον Bob. Χρησιμοποιεί το Public Key &nbsp;
                                       <i class="bi bi-unlock-fill" style={{fontSize: '15px'}}></i>
                                       (E,n) του Bob ώστε να κρυπτογραφήσει το μήνυμα &nbsp;
                                       <i class="bi bi-chat-left-text-fill" style={{fontSize: '17px', color:'rgb(235, 68, 113)'}}></i>&nbsp;
                                       M της και να δημιουργήσει το κρυπτογραφημένο μήνυμα &nbsp;
                                       <i class="bi bi-lock-fill"style={{fontSize: '15px'}} ></i> CT.
                                     </Form.Label>                  
                                     </Form>
                 
                                     <Form className="customform"> 
                                     <Form.Label>
                                     <Row className="mb-2">
                                      &nbsp;&nbsp;&nbsp;
                                      <Col xs={3}>
                                       <i class="bi bi-lock-fill"style={{fontSize: '15px'}} ></i> 
                                         <Form.Label>CT = </Form.Label>
                                         </Col>
                                         <Col xs={8}>
                                           <Form.Control placeholder="M^E mod N" disabled style={{width:"100%", fontSize: '13px'}} />
                                        </Col>
                                      </Row>                               
                                     </Form.Label>                  
                                     </Form>
                 
                                     <Form className="customform"> 
                                     <Form.Label>
                                      4.&nbsp;
                                      <i class="bi bi-person-square"style={{fontSize: '17px', color:'rgb(235, 68, 113)'}} ></i> &nbsp;
                                      Η Alice  στέλνει το κρυπτογραφημένο μήνυμα &nbsp;
                                      <i class="bi bi-lock-fill"style={{fontSize: '15px'}} ></i> CT στον &nbsp;
                                      <i class="bi bi-person-square"style={{fontSize: '17px', color:'rgb(68, 199, 235)'}} ></i> Bob.
                              
                                     </Form.Label>                  
                                     </Form>
                               
                                 </Card.Body>
                               </Card>
                               <br />
                           </Col>
                         </Row>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default CardSwitcher;

*/



import React, { useState,useContext  } from 'react';
import Card from 'react-bootstrap/Card';
import { Modal,Form,Button, Row, Col } from 'react-bootstrap';
import { RSAContext } from './RSAContext';

const Educational = ({rsaValuess, updateRSAValues }) => {
  // Boy's state
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [z, setZ] = useState('');
 

  // Girl's state
  const [p, setP] = useState('');
  const [f, setF] = useState('');
  const [isFCorrect, setIsFCorrect] = useState(false);



  // Handle the boy sending z to the girl
  const handleSendZ = () => {
    setIsZCorrect(Number(z) === Number(x) + Number(y));
  };

  // Handle input change for girl's inputs and reset validation
  const handleGirlInputChange = (e, setter) => {
    const value = e.target.value;
    setter(value);
    setIsFCorrect(false);
  };

  // Handle the girl sending p back to the boy if f is correct
  const handleSendP = () => {
    setIsFCorrect(Number(f) === Number(z) + Number(p));
  };



  //-----------------------------   ME   -----------------------------------
  const [locked, setLocked] = useState(false); // State to lock the form
  const { rsaValues, setRSAValues } = useContext(RSAContext);
  const [form, setForm] = useState(rsaValues);
  const[errors, setErrors] = useState({})
  const [showModal, setShowModal] = useState(false); 
  const [factors, setFactors] = useState('');
  const [isZCorrect, setIsZCorrect] = useState(false);                              //from 7.11

  // Function to close the modal
  const handleCloseMod = () => setShowModal(false);


    // Handle input changes for the bobs's inputs                                   //from 7.11
    const handleInputChange2 = (e, setter) => {
      const value = e.target.value;
      setter(value);
      setIsZCorrect(false); // Reset validation on input change 
    };
   


  const setField = (field, value) => {
    if (locked) return;
    setForm(prevForm => {
        const updatedForm = { ...prevForm, [field]: value };

        // Validate field on each change
        validateField(field, value, updatedForm);
        
        return updatedForm;
    });

    // Update RSA values in context
    setRSAValues(prev => ({
        ...prev,
        [field]: value,
    }));

    // Clear errors for the field if valid
    if (!!errors[field]) {
        setErrors(prevErrors => ({
            ...prevErrors,
            [field]: null,
        }));
    }
};



   // Validation function for individual fields
   const validateField = (field, value, updatedForm) => {
    const{p,q,n,fn,E,D}= updatedForm;
    let newErrors = { ...errors }; // Start with current errors
    switch (field) {
      case 'p':
        validateP(field, value,updatedForm,newErrors);
         console.log("before revalidation of N: "+n);
         if (n !== undefined && n !== '') { console.log("Entered ValidateN"); validateN('n', n, updatedForm,newErrors);}
         if (fn !== undefined && fn !== '') {console.log("Entered ValidateFN"); validateFn('fn', fn, updatedForm,newErrors);}
         if (E !== undefined && E !== '') { console.log("Entered ValidateE");validateE('E', E, updatedForm,newErrors);}
         if (D !== undefined && D !== '') { console.log("Entered ValidateD");validateD('D', D, updatedForm,newErrors);}
        // Finally, update the errors state once with all accumulated errors
          setErrors(newErrors);

         break;
      case 'q':
        validateQ(field, value,updatedForm,newErrors);
          if (n !== undefined && n !== '') { console.log("Entered ValidateN"); validateN('n', n, updatedForm,newErrors);}
          if (fn !== undefined && fn !== '') {console.log("Entered ValidateFN"); validateFn('fn', fn, updatedForm,newErrors);}
          if (E !== undefined && E !== '') { console.log("Entered ValidateE");validateE('E', E, updatedForm,newErrors);}
          if (D !== undefined && D !== '') { console.log("Entered ValidateD");validateD('D', D, updatedForm,newErrors);}
      // Finally, update the errors state once with all accumulated errors
       setErrors(newErrors);
          break;
      case 'n':
        validateN(field, value, updatedForm,newErrors);
          if (E !== undefined && E !== '') { console.log("Entered ValidateE");validateE('E', E, updatedForm,newErrors);}
          if (D !== undefined && D !== '') { console.log("Entered ValidateD");validateD('D', D, updatedForm,newErrors);}
          setErrors(newErrors);
        break;
      case 'fn':
        validateFn(field, value, updatedForm,newErrors);
          if (E !== undefined && E !== '') { console.log("Entered ValidateE");validateE('E', E, updatedForm,newErrors);}
          if (D !== undefined && D !== '') { console.log("Entered ValidateD");validateD('D', D, updatedForm,newErrors);}
        setErrors(newErrors);
        break;
      case 'E':
         validateE(field, value, updatedForm,newErrors);
         if (D !== undefined && D !== '') { console.log("Entered ValidateD");validateD('D', D, updatedForm,newErrors);}
        setErrors(newErrors);
        break;
      case 'D':
        validateD(field, value, updatedForm,newErrors);
        setErrors(newErrors);
        break;
      default:
        break;
    }
  };



//-----------------------------------handle submit only for P-------------------------------------------
const validateP = (field, value, form,newErrors) =>{
  const{p}= form

  console.log(p);
  console.log(isPrime(p));
   //-validation for p == prime
   if (p === undefined || p === '' ){newErrors.p = 'Το πεδίο είναι κενό'}
   else{
    if (!isPrime(p)) {
      newErrors.p = 'Το '+p+' δεν είναι πρώτος αριθμός';
    }else {
     delete newErrors.p; // Clear error if validation passes
    }
   }
 }


 //---------------------------------handle submit only for Q --------------------------------------------
 const validateQ = (field, value, form,newErrors) =>{
  const{ q }= form

  //validation for q == prime
    if (q === undefined || q === '') {newErrors.q = 'Το πεδίο είναι κενό'}
    else{ 
      if (!isPrime(q)) {
        newErrors.q = 'Το '+q+' δεν είναι πρώτος αριθμός';
       
      } else {
       delete newErrors.q; // Clear error if validation passes
   }
  }          
}



//---------------------------------handle submit only for n -------------------------------------------
const validateN = (field, value, form,newErrors) =>{
  const{p,q,n}= form
  //const newErrors ={}
  
   // n validation
  if (n === undefined || n === '') {newErrors.n = 'Το πεδίο είναι κενό'}
  else{ 
  if (n != p*q) 
      {
      newErrors.n = 'Το '+n+' δεν ισούται με  P x Q';
      console.log(n + " not p x q");
      } else {
        delete newErrors.n; // Clear error if validation passes
    }
  }     
}


//---------------------------------handle submit only for Fn--------------------------------------------
const validateFn = (field, value, form,newErrors) =>{
  const{p,q,fn}= form
 //const newErrors ={}


 //fn validation
 if (fn === undefined || fn === '') {newErrors.fn = 'Το πεδίο είναι κενό'}
 else{ 
 if (fn != ((q-1)*(p-1))) 
      {
          newErrors.fn = 'Το '+fn+' δεν ισούται με (P - 1) x (Q - 1)';
          console.log(fn + " invalid");
      }else {
       delete newErrors.fn; // Clear error if validation passes
   }
 }  
}


//----------------------------------------handle submit only for E---------------------------------------------
const validateE = (field, value, form,newErrors) =>{
  let{fn,E}= form
  
  let Einput;
      if (E === undefined || E === '') {newErrors.E = 'Το πεδίο είναι κενό'}
  else{ 
      // Check if E and phi(N) are positive integers
      E=Number(E);
      Einput=Number(E);
      fn=Number(fn);
      if (!Number.isInteger(Einput) || !Number.isInteger(fn) || (Einput <= 1) || (fn <= 1)) 
        { newErrors.E = 'Wrong E' }

      // Check if E is coprime with phi(N)
      while (fn !== 0) {
          var temp = fn;
          fn = Einput % fn;
          Einput = temp;
      }
     console.log('E= '+Einput);
     console.log((Einput != 1));
      if(Einput != 1){
          newErrors.E = 'Λάθος επιλογή κλειδιού'
          console.log('inside final error');
      }else {
        delete newErrors.E; // Clear error if validation passes
    }
  }


  }


  const validateD = (field, value, form,newErrors) =>{
    //calculate pricate key D
  const D = Number(value);
  const E = Number(rsaValues.E);
  const fn = Number(rsaValues.fn);

    console.log(D);
    

    if (D === undefined || D === '') {newErrors.D = 'Το πεδίο είναι κενό'}
    else{ 
      console.log('E, Fn' +E + '  - '+fn);
      let y=modInverse(E, fn);
      console.log('D= '+D+ ' and y=' +y);
    //  const D=Number(D);
      if(D !== y){
        console.log('D is diff from y');
        newErrors.D = 'Λάθος επιλογή κλειδιού' 
        }else {
          delete newErrors.D; // Clear error if validation passes
      }
    }   
  }

//----------------------------------------------------------------
const handleInputChange = (e) => {
  const inputValue = e.target.value;
  if (locked) return; // Prevent changes if locked

  if (inputValue === '') {
    setField('fn', '');
    setFactors('');
    setErrors({ ...errors, fn: 'Φn empty' });
    return;
  }
  
  const inputNumber = parseInt(inputValue);

 if (!isNaN(inputNumber) && inputNumber > 0) {
      setField('fn', inputValue);
      

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
      
      // Clear errors
      setErrors({ ...errors, fn: '' });
    } else {
      setForm({ ...form, fn: inputValue });
      setFactors('');
      setErrors({ ...errors, fn: 'Παρακαλώ εισάγετε το σωστό θετικό αριθμό.' });
    }
  };



  // -------------------------------isPrime function---------------------------------//
const isPrime = (num) => {
  let j;
  if(num==1 || num==0){return false;}
  for (j = 2; j <= num - 1; j++) {
    if (num % j == 0) {
      return false;
        //add break logic
     }
}
  return true;
};



function modInverse(e, phiN) {
  let [t, newT] = [0, 1];
  let [r, newR] = [phiN, e];

  while (newR !== 0) {
    let quotient = Math.floor(r / newR);
    [t, newT] = [newT, t - quotient * newT];
    [r, newR] = [newR, r - quotient * newR];
  }

  if (r > 1) {
    throw new Error(`${e} has no modular inverse mod ${phiN}`);
  }

  if (t < 0) {
    t = t + phiN;
  }

  return t;
}

//--------------------------------------------

const handleSubmit = () => {
  // Update the RSA values in the parent component
  const newErrors ={}
  const { p, q, n, fn, E, D } = form;

  const hasEmptyFields = !p || !q || !n || !fn || !E || !D;
  const hasErrors = Object.values(errors).some((error) => error !== null && error !== '');

  updateRSAValues({ p, q, n, fn, e: E, d: D });

   if (hasEmptyFields || hasErrors) {
    // Show an alert if any field is empty
    console.log('errors ' +newErrors);
    setShowModal(true); // Show modal if fields are empty
    return; // Exit the function, preventing the rest of the code from running
    setLocked(false);
  }else{
   // Lock the form
   setIsZCorrect(true);
  setLocked(true);
  //onSendClick();
  }  
};


  return (
    <div style={styles.pageContainer}>
      {/* Boy's card with inputs and z calculation */}
      <Card border="info" className="customcardBob1">
   

   {/*       
        <div style={styles.inputGroup}>
          <label style={styles.label}>x</label>
          <input
            type="number"
            value={x}
            onChange={(e) => handleInputChange(e, setX)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>y</label>
          <input
            type="number"
            value={y}
            onChange={(e) => handleInputChange(e, setY)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>z (x + y)</label>
          <input
            type="number"
            value={z}
            onChange={(e) => handleInputChange(e, setZ)}
            style={styles.input}
          />
        </div>
 */}
          <Card.Title style={{ fontWeight: 'bold' ,fontSize: '1.3rem' ,color:'rgb(68, 199, 235)',textAlign: 'center', }}>
                  <i class="bi bi-person-square"style={{fontSize: '70px', color:'rgb(68, 199, 235)'}} ></i> <br /> 
                    Αποστολέας   
               </Card.Title><br /> 

        <Row className="mb-3">
          <Col xs={6}>
            <Form.Control
                  className="custom-placeholder"
                 placeholder="P"
                 style={{ fontSize: '1.5rem', padding: '0.5rem 0.5rem', color:'rgb(255, 255, 255)' ,backgroundColor: 'rgb(33,37,41)',fontWeight:'bolder'}}
                 value={form.p}
                 onChange={(e) => setField('p', e.target.value)}
                  isInvalid={!!errors.p}
                 disabled={locked}
            />
             <Form.Control.Feedback type= 'invalid'>
                  {errors.p}
              </Form.Control.Feedback>
            </Col>
            <Col xs={6}>
            <Form.Control
               className="custom-placeholder"
                placeholder="Q"
                style={{ fontSize: '1.5rem', padding: '0.5rem 0.5rem', color:'rgb(255, 255, 255)' ,backgroundColor: 'rgb(33,37,41)'}}
                onChange={(e) => setField('q', e.target.value)}
                isInvalid={!!errors.q}
                disabled={locked}
              />
              <Form.Control.Feedback type= 'invalid'>
                  {errors.q}
              </Form.Control.Feedback>
            </Col>
         </Row>


         <Row className="mb-3">
         <Col xs={6}>
            <Form.Control
                 className="custom-placeholder"
                value={form.n}
                placeholder="n"
                style={{ fontSize: '1.5rem', padding: '0.5rem 0.5rem', color:'rgb(255, 255, 255)' ,backgroundColor: 'rgb(33,37,41)'}}
                onChange={(e) => setField('n', e.target.value)}
                isInvalid={!!errors.n}
               disabled={locked}
             />
             <Form.Control.Feedback type= 'invalid'>
                 {errors.n}
              </Form.Control.Feedback>
          </Col>

          <Col xs={6}>
              <Form.Control
                  className="custom-placeholder"
                  value={form.fn}
                  placeholder="Φ(n)"
                  style={{ fontSize: '1.5rem', padding: '0.5rem 0.5rem', color:'rgb(255, 255, 255)' ,backgroundColor: 'rgb(33,37,41)'}}
            //    onChange={(e) => setField('fn', e.target.value)}
                  onChange={handleInputChange}                            
                 isInvalid={!!errors.fn}
                 disabled={locked}
              />
              <Form.Control.Feedback type= 'invalid'>
                  {errors.fn}
               </Form.Control.Feedback>
           </Col>
      </Row>

    
                          
            <Row className="mb-3">                                   
              <Form.Control
                   className="custom-placeholder"
                   type="text"
                   readOnly
                   placeholder="Φ(n) factors"
                   value={factors}
                   style={{ width: '160px', 
                    padding: '0.5rem 0.5rem', 
                    // ontSize: '1.5rem', 
                    textAlign: 'center', 
                    marginLeft: '1px' , 
                    color:'rgb(255, 255, 255)',
                    backgroundColor: 'rgb(33,37,41)',
                    fontWeight:'bolder'
                  }} 
                />                                                 
           </Row> 
   
                 <Row className="mb-3"> 
                      <Col xs={6}>
                        <Form.Control
                          className="custom-placeholder"
                           type="integer"
                           placeholder="E"
                           value={form.E}
                           onChange={(e) => setField('E', e.target.value)}
                           isInvalid={!!errors.E}
                           disabled={locked}                           
                           style={{ fontSize: '1.5rem', padding: '0.5rem 0.5rem',color:'rgb(255, 255, 255)' ,backgroundColor: 'rgb(4,145,141)',fontWeight:'bolder'}}
                          />
                        <Form.Control.Feedback type= 'invalid'>
                          {errors.E}
                        </Form.Control.Feedback>
                        
                      </Col>                               
            


                      <Col xs={6}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>         
                       <Form.Control      
                             className="custom-placeholder" // Add custom class                    
                            placeholder="D"
                            value={form.D} 
                          //  onChange={(e) => handleInputChangeD('D', e.target.value)} 
                            onChange={(e) => setField('D', e.target.value)}
                            isInvalid={!!errors.D}
                            disabled={locked}
                             style={{ 
                                fontSize: '1.5rem', 
                                padding: '0.5rem 0.5rem',
                                color:'rgb(255, 255, 255)',
                                backgroundColor: 'rgb(201,52,52)',
                                fontWeight:'bolder' ,
                                '::placeholder': {color:'rgb(255, 255, 255)'}}}
                          />                   
                        {/*<span style={{ fontSize: '13px' }}>* {rsaValues.E || 'E'} mod {rsaValues.fn || 'Φ(n)'} = 1</span>*/}
                        </div>
                        <Form.Control.Feedback type= 'invalid'>
                              {errors.D}
                            </Form.Control.Feedback>
                        </Col>
              
                        </Row>
               

        <Button 
           onClick={handleSendZ}
           variant="outline-info" 
           style={{ fontSize: '1.0rem', padding: '0.3rem 0.5rem'  }}> 
              Send z
        </Button>

        <Button onClick={handleSubmit}
            variant="outline-info" 
            style={{ fontSize: '01.0rem', padding: '0.3rem 0.5rem' }}
                >Στείλε το κλειδί
        </Button>

              {/* Bootstrap Modal for displaying empty field alert */}
              <Modal show={showModal} onHide={handleCloseMod} centered>
                  <Modal.Header>
                    <Modal.Title>Μήνυμα λάθους</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                     Παρακαλώ συμπληρώσε σωστά όλα τα πεδία ώστε να μπορέσεις να στείλεις το Public Key στην Alice.
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseMod}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>

      </Card>

      {/* Arrows column with two arrows, showing values */}
      <div style={styles.arrowsColumn}>
        {/* Arrow showing z sent from boy to girl */}
        {isZCorrect && (
          <div style={styles.arrowContainer}>
            <div style={styles.arrowRight}>
                     <i class="bi bi-arrow-right"style={{fontSize: '100px', color:'rgb(33,37,41)'}} ></i>
             <span style={styles.valueLabel}>
                   <i class="bi bi-unlock-fill"style={{fontSize: '60px', color:'rgb(4,145,141)'}}></i> 
                    Δημόσιο κλειδί = {form.E}
              </span>
            </div>
          </div>
        )}
        {/* Arrow showing p sent from girl back to boy */}
        {isFCorrect && (
          <div style={styles.arrowContainer}>
            <div style={styles.arrowLeft}>
                   <i class="bi bi-arrow-left"style={{fontSize: '100px', color:'rgb(33,37,41)'}} ></i>
              <span style={styles.valueLabel}>
                <i class="bi bi-file-earmark-lock" style={{fontSize: '60px', color:'rgb(236, 26, 26)'}}></i>
                 Κρυπτογραφημένο μήνυμα = {p}
                </span>
            </div>
          </div>
        )}
      </div>

      {/* Girl's card with inputs and f calculation */}
      <Card border="danger" className="customcardAlice1">

      <Card.Title style={{ fontWeight: 'bold' ,fontSize: '1.3rem' ,color:'rgb(235, 68, 113)',textAlign: 'center', }}>
           <i class="bi bi-person-square"style={{fontSize: '70px', color:'rgb(235, 68, 113)'}} ></i> <br /> 
              Παραλήπτης   
           </Card.Title>
           <div style={styles.receivedMessage}>
               {isZCorrect ? `Έλαβε το Ε = ${form.E}` : "Περιμένει το Ε..."}
           </div> <br />
           <Row>
                 
                      <Col xs={6}>
                        <Form.Control
                            className="custom-placeholder"
                            placeholder="M"
                            value={form.M}
                           // onChange={(e) => setField('M', e.target.value)}
                            isInvalid={!!errors.M}
                            disabled={locked}
                            style={{ fontSize: '1.5rem', padding: '0.5rem 0.5rem', color:'rgb(255, 255, 255)' ,backgroundColor: 'rgb(33,37,41)',fontWeight:'bolder'}}
                          />
                        <Form.Control.Feedback type= 'invalid'>
                          {errors.M}
                        </Form.Control.Feedback>
                      </Col>    
                      <Col xs={6}>                                
                      <Form.Control                          
                          className="custom-placeholder"
                          placeholder="CT"
                          value={form.CT} 
                        //  onChange={(e) => handleInputChangeD('D', e.target.value)} 
                          onChange={(e) => setField('CT', e.target.value)}
                          isInvalid={!!errors.CT}
                          disabled={locked}
                          style={{ fontSize: '1.5rem', padding: '0.5rem 0.5rem', color:'rgb(255, 255, 255)' ,backgroundColor: 'rgb(33,37,41)',fontWeight:'bolder'}}
                        />    
                     </Col>                
                    </Row> 

                    <Button             
                        onClick={handleSendP}
                        variant="outline-danger" 
                        style={{ fontSize: '1.0rem', padding: '0.3rem 0.5rem'  }}>            
                          Send p
                    </Button>
                    <Button 
                         //onClick={handleButtonClick}
                          variant="outline-danger" 
                          style={{ fontSize: '1.0rem', padding: '0.3rem 0.5rem'  }}> 
                          Στείλε το CT
                       </Button>
                    
        {/*
        <div style={styles.receivedMessage}>
          {isZCorrect ? `Received z = ${z}` : "Waiting for z..."}
        </div>
        {isZCorrect && (
          <>
            <div style={styles.inputGroup}>
              <label style={styles.label}>p</label>
              <input
                type="number"
                value={p}
                onChange={(e) => handleGirlInputChange(e, setP)}
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>f (z + p)</label>
              <input
                type="number"
                value={f}
                onChange={(e) => handleGirlInputChange(e, setF)}
                style={styles.input}
              />
            </div>

            
            <Button             
                onClick={handleSendP}
                variant="outline-danger" 
                style={{ fontSize: '1.0rem', padding: '0.3rem 0.5rem'  }}>            
                  Send p
            </Button>
             
       
             
          </>
        )}
        */}

      </Card>
    </div>
  );
};

// CSS styles for the updated layout
const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f4f8'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    width: '200px',
    textAlign: 'center'
  },
  iconContainer: {
    fontSize: '60px',
    marginBottom: '10px'
  },
  inputGroup: {
    margin: '10px 0',
    width: '100%'
  },
  label: {
    fontSize: '14px',
    color: '#ffffff',
    position: 'relative',
    top: '-10px',
    backgroundColor: 'rgb(33,37,41)',
    padding: '0 4px'
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '16px',
    textAlign: 'center'
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  },
  arrowsColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowContainer: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '50px',
    marginTop: '20px'
  },
  arrowRight: {
    color: '#4CAF50',
    display: 'flex',
    alignItems: 'center'
  },
  arrowLeft: {
    color: '#FF5722',
    display: 'flex',
    alignItems: 'center'
  },
  valueLabel: {
    marginLeft: '10px',
    fontSize: '20px',
    color: '#333333',
    fontWeight:'bolder'
  },
  receivedMessage: {
    marginTop: '20px',
    fontSize: '15px',
    color:'rgb(255, 255, 255)',
    backgroundColor: 'rgb(33,37,41)',
    fontWeight:'bold'
  }
};

export default Educational;
