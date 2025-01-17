
import React, { useState } from 'react';
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap';
  /*
const Home3 = () => {


    const [activeCard, setActiveCard] = useState(''); // State to manage active card

    const handleButtonClick = (card) => {
        setActiveCard(card); // Set the active card based on button click
    };

    return (
        <Container>
            <Row className="justify-content-center mt-3">
                <Col xs={12} md={6} className="text-center">
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
                       Κρυπρογράφιση
                    </Button>
                </Col>
            </Row>

            <Row className="justify-content-center mt-2">
                <Col xs={11}>
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
                             <Card border="info"className="customcardAlgBob1">
                               <Card.Body>
                                 <Card.Title style={{ fontWeight: 'bold' ,fontSize: '1.0rem'}}>
                                  <i class="bi bi-person-square"style={{fontSize: '16px', color:'rgb(68, 199, 235)'}} ></i> &nbsp;Bob
                                 </Card.Title>
                                      
                                                 
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
                                          
                               </Card.Body>
                             </Card>
                             <br />         
                 
                           </Col>
                 
                           <Col>
                             <Card Card border="danger"  className="customcardAlgAlice">              
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

                           <Col>          
                             <Card border="info"className="customcardAlgBob2">
                               <Card.Body>
                                 <Card.Title style={{ fontWeight: 'bold' ,fontSize: '1.0rem'}}>
                                 <i class="bi bi-person-square"style={{fontSize: '16px', color:'rgb(68, 199, 235)'}} ></i> &nbsp;Bob</Card.Title>
                                      
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
                 

                           
                         </Row>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

*/

import { RSAProvider } from './RSAContext.jsx';
import Bob from './Bob';
import BobDecr from './BobDecr.jsx';
import Alice from './Alice';
import EndModal from './EndModal';  // Import Component B


function Home3(){
const [isAliceBlurred, setIsAliceBlurred] = useState(true);
const [isBobDecrBlurred, setIsBobDecrBlurred] = useState(true);

const handleBobSendClick = () => {
  console.log('Bob send button clicked');
  setIsAliceBlurred(false);
};

const handleAliceUnlockClick = () => {
  console.log('Alice unlock button clicked');
  setIsBobDecrBlurred(false);
};

 // State to store RSA values
 const [rsaValuess, setRSAValues] = useState({
  p: null,
  q: null,
  n: null,
  fn: null,
  E: null,
  D: null,
});



  // Function to update RSA values from Bob component
  const updateRSAValues = (newValues) => {
    setRSAValues((prevValues) => ({
      ...prevValues,
      ...newValues,
    }));
  };

  const [showModal, setShowModal] = useState(false); // Manage modal state

  const handleWin = () => {
    setShowModal(true); // Trigger the modal
  };

  // Function to refresh the browser
  const refreshPage = () => {
    window.location.reload();
  };
  

return (
  <RSAProvider>
    <Container fluid>
    <div  className="image-container">
                        <img
                          alt=""
                          src= {require('../images/RSA_Visual.png')}
                          height="auto" width="57%"        
                        />   
                        </div>
        <Row>
    
           <Col md={6} style={{  height: '100vh' }}>

                 <Button variant="dark" onClick={refreshPage} style={{ marginLeft: '60px' }}>
                    Restart <i class="bi bi-arrow-clockwise"></i>
                 </Button>


            /
          <Bob onSendClick={handleBobSendClick} rsaValuess={rsaValuess} updateRSAValues={updateRSAValues}/>
          </Col>
          <Col md={6}>
            <Row style={{  height: '40vh' }}>
              <Col>
                /
                <Alice isBlurred={isAliceBlurred} onUnlockClick={handleAliceUnlockClick} rsaValuess={rsaValuess}/>
              </Col>
            </Row>
            <Row style={{ height: '50vh' }}>
              <Col>
              /
                <BobDecr isBlurred={isBobDecrBlurred} rsaValuess={rsaValuess} triggerWin={handleWin}/>
              </Col>
            </Row>
          </Col>
        </Row>
        <EndModal showModal={showModal} />
      </Container>
  </RSAProvider>

);

}
export default Home3;
