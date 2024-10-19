
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
