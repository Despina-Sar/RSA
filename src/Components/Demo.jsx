import React, { useState } from 'react';
import { Button, Card, Container, Row, Col, Form, Collapse } from 'react-bootstrap';



/*


import React, { useState } from 'react';
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';

const Demo = () => {
    const [activeCard, setActiveCard] = useState(''); // State to manage active card
    const [open, setOpen] = useState(false);

    const handleButtonClick = (card) => {
        setActiveCard(card); // Set the active card based on button click
    };

    return (
        <Container>
            <Row className="justify-content-center mt-1">
                <Col xs={12} md={6} className="text-center">
                    <Button 
                        variant="dark" 
                        onClick={() => handleButtonClick('algorithm')}
                        className="me-2"
                        style={{ fontSize: '0.9rem', padding: '0.3rem 0.5rem', marginLeft: '30px'  }}
                    >
                        Υπολογισμοί Αλγορίθμου
                    </Button>
                    <Button 
                        variant="dark" 
                        onClick={() => handleButtonClick('process')}
                        style={{ fontSize: '0.9rem', padding: '0.3rem 0.5rem', marginLeft: '30px'  }}
                    >
                       Διαδικασία Κρυπρογράφισης
                    </Button>
                </Col>
            </Row>

            <Row className="justify-content-center mt-1">
                <Col xs={11}>
                    {activeCard === 'algorithm' && (
                      <Card border="info" className="customcardDemoAlgorithm">
                      <Card.Body>

                        
                                                   
                          <Form className="customform">                    
                            <Form.Label>
                            <b><u>1. P & Q</u></b> <br />
                              Επιλέγουμε δύο πρώτους αριθμούς p και q. Αυτοί οι αριθμοί πρέπει να είναι μεγάλοι και τυχαίοι, ώστε να διασφαλίζεται η ασφάλεια του συστήματος.
                            </Form.Label>
                            <Row className="mb-2">
                                <Col xs={1}>
                                <Form.Label>P: </Form.Label>
                                </Col>
                                <Col xs={4}>
                                  <Form.Control placeholder="3" disabled style={{width:"100%", fontSize: '13px'}} />
                                </Col>
                               
                                <Col xs={1}>
                                  <Form.Label>Q: </Form.Label>
                                </Col>
                                <Col xs={4}>
                                  <Form.Control placeholder="11" disabled style={{width:"100%", fontSize: '13px'}} />
                                </Col>
                               
                               
                              </Row>                     
                           </Form>
                         
        
        
                           <Form className="customform">                    
                            <Form.Label>
                            <b><u>2. n & Φ(n)</u></b> <br /> Υπολογίζουμε το n ως το γινόμενο των δύο πρώτων αριθμών καθώς και το Φ(n) με τον παρακάτω τρόπο:
                            </Form.Label>
                            <Row className="mb-2">
                                <Col xs={1}>
                                <Form.Label>n: </Form.Label>
                                </Col>
                                <Col xs={4}>
                                  <Form.Control placeholder="P x Q= 3 x 11 = 33" disabled style={{width:"100%", fontSize: '13px'}} />
                                </Col>
                               
                                <Col xs={1}>
                                  <Form.Label>Φ(n): </Form.Label>
                                </Col>
                                <Col xs={4}>
                                  <Form.Control placeholder="(P-1)x(Q-1)=2 x 10= 20" disabled style={{width:"100%", fontSize: '13px'}} />
                                </Col>
                               
                               
                              </Row>                     
                           </Form>
        
        
                            <Form className="customform">
                              <Form.Label>
                              <b><u>3. Public Key</u></b> <br />  Επιλέγουμε το Public Key &nbsp;
                              <i class="bi bi-unlock-fill" style={{fontSize: '15px'}}></i> 
                             , έτσι ώστε να είναι σχετικά πρώτο με το Φ(n).  Αυτό σημαίνει ότι το 
                             E δεν πρέπει να διαιρεί το Φ(n) και δεν πρέπει να είναι πολλαπλάσιο των παραγόντων του Φ(n)
                              </Form.Label>
                              <ul>
                                  <li>Παράγοντες του Φ(n) 20 = 5 x 4 = 5 x 2 x 2</li>
                                  <li>Συνεπώς το E δεν πρέπει να είναι πολλαπλάσιο των 5 & 2 και να μην διαιρείται από Το 20</li>
                                  <li>Επιλέγουμε E = 7 </li>
                               </ul>               
                            </Form>
        
                            <Form className="customform">
                              <Form.Label>
                              <b><u>4. Private Key </u></b> <br /> Υπολογίζουμε το Private Key  &nbsp;
                              <i class="bi bi-key-fill"  style={{fontSize: '17px'}} ></i> 
                             D έτσι ώστε (DxE)mod(Φ(n))=1
                              </Form.Label>
                              <ul>
                                  <li>(D x 7) mod 20 = 1</li>
                                  <li> Επιλέγουμε D = 3 καθώς (3 x 7) mod 20 = 1</li>
                               </ul>               
                            </Form>             
                      </Card.Body>
                    </Card>
                    )}
                    {activeCard === 'process' && (
           <Col>
                        <Row>
                           <Col>          
                             <Card border="info" className="customcardProcessTop">
                               <Card.Body>
                                                                                                           
                                 <Form className="customform">                    
                                     <Form.Label>
                                        Στo προηγούμενο βήμα υπολογίσαμε τα βασικά στοιχεία που χρειάζεται ο Bob για να μπορέσει να κρυπτογραφήσει και να αποκρυπτογραφήσει μηνύματα.
                                        Τώρα θα χρησιμοποιήσουμε αυτά τα αποτελέσματα στη διαδικασία της κρυπτογράφησης.
                                     </Form.Label> 

                                     <Form.Label style={{ display: 'block', textAlign: 'center', fontSize: '13px' }}>
                                        <span class="text-item">P = 3</span>
                                        <span class="text-item">Q = 11</span>
                                        <span class="text-item">n = 33</span>
                                        <span class="text-item">Φ(n) = 20</span>

                                        <span class="text-item">
                                            <i class="bi bi-unlock-fill" style={{fontSize: '15px'}}></i>
                                            Public Key:  (7,33)
                                        </span>

                                        <span class="text-item">
                                        <i class="bi bi-key-fill"  style={{fontSize: '17px'}} ></i> 
                                        Private Key: (3,33) 
                                        </span>
                                     </Form.Label>
                                     </Form>
                 
                                  
                               </Card.Body>
                             </Card>
                             <br />         
                 
                           </Col>
                                                           
                         </Row>



                           <Row>
                           <Col>          
                             <Card border="info"className="customcardProcessBob1">
                               <Card.Body>
                                 <Card.Title style={{ fontWeight: 'bold' ,fontSize: '1.0rem'}}>
                                 <i class="bi bi-person-square"style={{fontSize: '16px', color:'rgb(68, 199, 235)'}} ></i> &nbsp;Bob</Card.Title>
                                      
                                                 
                                 <Form className="customform">                    
                                     <Form.Label>
                                     <b>1.</b>&nbsp;
                                       Ο Bob δημιουργεί το &nbsp;
                                       <i class="bi bi-unlock-fill" style={{fontSize: '15px'}}></i>Public Key 
                                      (E,n) και το &nbsp;
                                      <i class="bi bi-key-fill"  style={{fontSize: '17px'}} ></i>  Private Key
                                      (D,n) 
                                     </Form.Label> 
                                     </Form>
                 
                                   <Form className="customform">  
                                     <Form.Label>
                                     <b>2.</b>&nbsp;
                                      Στέλνει το &nbsp;
                                      <i class="bi bi-unlock-fill" style={{fontSize: '15px'}}></i>Public Key  
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
                             <Card Card border="danger"  className="customcardProcessAlice">              
                                 <Card.Body>
                                   <Card.Title style={{ fontWeight: 'bold',fontSize: '1.0rem' }}> 
                                    <i class="bi bi-person-square"style={{fontSize: '17px', color:'rgb(235, 68, 113)'}} ></i> &nbsp;Alice
                                   </Card.Title>
                                                              
                                     <Form className="customform"> 
                                     <Form.Label>
                                     <b>3.</b>&nbsp;
                                       Η Alice επιθυμεί να στείλει ένα μήνυμα <b>M = 15</b> στον Bob. Χρησιμοποιεί το  &nbsp;
                                      <i class="bi bi-unlock-fill" style={{fontSize: '15px'}}></i> Public Key
                                       (E,n) του Bob ώστε να κρυπτογραφήσει το μήνυμα &nbsp;
                                       <i class="bi bi-chat-left-text-fill" style={{fontSize: '17px', color:'rgb(235, 68, 113)'}}></i>&nbsp;
                                       M της και να δημιουργήσει το κρυπτογραφημένο μήνυμα &nbsp;
                                       <i class="bi bi-lock-fill"style={{fontSize: '15px'}} ></i> CT.
                                     </Form.Label>                  
                                     </Form>
                 
                                     <Form className="customform"> 
                                        <Form.Label>
                                          <Row className="align-items-center">                                       
                                            <Col xs={6}>
                                              <Form.Label style={{ marginLeft: '5px', display: 'flex', alignItems: 'center' }}> 
                                                <i className="bi bi-lock-fill" style={{ fontSize: '15px', marginRight: '5px' }}></i> 
                                                CT = M^E mod n
                                              </Form.Label>                              
                                            </Col>

                                            <Col xs={6}>
                                              <Form.Control 
                                                placeholder="27 = 15^7 mod 33" 
                                                disabled 
                                                style={{ width: "100%", fontSize: '13px' }} 
                                              />
                                            </Col>
                                          </Row>
                                        </Form.Label>
                                      </Form>

                 
                                     <Form className="customform"> 
                                     <Form.Label>
                                     <b>4.</b>&nbsp;
                                       Στέλνει το κρυπτογραφημένο μήνυμα &nbsp;
                                      <i class="bi bi-lock-fill"style={{fontSize: '15px'}} ></i>
                                      <b>CT = 27</b> στον &nbsp;
                                      <i class="bi bi-person-square"style={{fontSize: '17px', color:'rgb(68, 199, 235)'}} ></i> Bob.
                              
                                     </Form.Label>                  
                                     </Form>
                               
                                 </Card.Body>
                            </Card>
                               <br />
                           </Col>

                           <Col>          
                             <Card border="info"className="customcardProcessBob2">
                               <Card.Body>
                                 <Card.Title style={{ fontWeight: 'bold' ,fontSize: '1.0rem'}}>
                                 <i class="bi bi-person-square"style={{fontSize: '16px', color:'rgb(68, 199, 235)'}} ></i> &nbsp;Bob</Card.Title>
                                      
                                 <Form className="customform"> 
                                  <Form.Label>
                                  <b>5.</b>&nbsp;
                                  Ο Bob λαμβάνει το κρυπτογραφημένο μήνυμα  &nbsp;
                                  <i class="bi bi-lock-fill"style={{fontSize: '15px'}} ></i> CT. Χρησιμοποιεί το Private Key του &nbsp;
                                  <i class="bi bi-key-fill"  style={{fontSize: '17px'}} ></i> 
                                  (D,n) για να αποκρυπτογραφήσει το μήνυμα.
                                 </Form.Label>                  
                                  </Form>

                                                                
                                  <Form className="customform"> 
                                        <Form.Label>
                                          <Row className="align-items-center">                                       
                                            <Col xs={6}>
                                              <Form.Label style={{ marginLeft: '5px', display: 'flex', alignItems: 'center' }}> 
                                              <i class="bi bi-chat-left-text-fill" style={{fontSize: '17px', color:'rgb(235, 68, 113)'}}></i>&nbsp;
                                              M = CT^D mod n
                                              </Form.Label>                              
                                            </Col>

                                            <Col xs={6}>
                                              <Form.Control 
                                                placeholder="15 = 27^3 mod 33" 
                                                disabled 
                                                style={{ width: "100%", fontSize: '13px' }} 
                                              />
                                            </Col>
                                          </Row>
                                        </Form.Label>
                                      </Form>

                                      <Form className="customform"> 
                                          <Form.Label style={{ display: 'block', textAlign: 'center', fontSize: '14px' }}>
                                          <u><span class="text-item">Μ = 15</span></u>
                                       </Form.Label>                  
                                      </Form>
                                        

                                                        
                               </Card.Body>
                             </Card>
                             <br />         
                 
                           </Col>
                                           
                         </Row>
                 </Col>

                    )}

                </Col>
            </Row>
        </Container>
    );
};

export default Demo;

*/


const Demo = () => {
    const [activeCard, setActiveCard] = useState(''); // State to manage active card
    const [open, setOpen] = useState(false);

    const handleButtonClick = (card) => {
        setOpen(false); // Close the card first
        setTimeout(() => {
            setActiveCard(card); // Change the card after the collapse animation finishes
            setOpen(true); // Reopen the new card
        }, 300); // 300ms to match the default transition duration
    };

    return (
        <Container>
            <Row className="justify-content-center mt-1">
                <Col xs={12} md={6} className="text-center">
                    <Button 
                        variant="dark" 
                        onClick={() => handleButtonClick('algorithm')}
                        className="me-2"
                        style={{ fontSize: '0.9rem', padding: '0.3rem 0.5rem', marginLeft: '30px' }}
                    >
                        Υπολογισμοί Αλγορίθμου
                    </Button>
                    <Button 
                        variant="dark" 
                        onClick={() => handleButtonClick('process')}
                        style={{ fontSize: '0.9rem', padding: '0.3rem 0.5rem', marginLeft: '30px' }}
                    >
                       Διαδικασία Κρυπτογράφησης
                    </Button>
                </Col>
            </Row>

            <Row className="justify-content-center mt-1">
                <Col xs={11}>
                    <Collapse in={activeCard === 'algorithm' && open}>
                        <div>
                            <Card border="info" className="customcardDemoAlgorithm">
                                <Card.Body>
                                    <Form className="customform">                    
                                        <Form.Label>
                                            <b><u>1. P & Q</u></b> <br />
                                            Επιλέγουμε δύο πρώτους αριθμούς p και q. Αυτοί οι αριθμοί πρέπει να είναι μεγάλοι και τυχαίοι, ώστε να διασφαλίζεται η ασφάλεια του συστήματος.
                                        </Form.Label>
                                        <Row className="mb-2">
                                            <Col xs={1}>
                                                <Form.Label>P: </Form.Label>
                                            </Col>
                                            <Col xs={4}>
                                                <Form.Control placeholder="3" disabled style={{width:"100%", fontSize: '13px'}} />
                                            </Col>
                                            <Col xs={1}>
                                                <Form.Label>Q: </Form.Label>
                                            </Col>
                                            <Col xs={4}>
                                                <Form.Control placeholder="11" disabled style={{width:"100%", fontSize: '13px'}} />
                                            </Col>
                                        </Row>                      
                                    </Form>

                                    <Form className="customform">                    
                                        <Form.Label>
                                            <b><u>2. n & Φ(n)</u></b> <br /> Υπολογίζουμε το n ως το γινόμενο των δύο πρώτων αριθμών καθώς και το Φ(n) με τον παρακάτω τρόπο:
                                        </Form.Label>
                                        <Row className="mb-2">
                                            <Col xs={1}>
                                                <Form.Label>n: </Form.Label>
                                            </Col>
                                            <Col xs={4}>
                                                <Form.Control placeholder="P x Q= 3 x 11 = 33" disabled style={{width:"100%", fontSize: '13px'}} />
                                            </Col>
                                            <Col xs={1}>
                                                <Form.Label>Φ(n): </Form.Label>
                                            </Col>
                                            <Col xs={4}>
                                                <Form.Control placeholder="(P-1)x(Q-1)=2 x 10= 20" disabled style={{width:"100%", fontSize: '13px'}} />
                                            </Col>
                                        </Row>                     
                                    </Form>

                                    <Form className="customform">
                                        <Form.Label>
                                            <b><u>3. Public Key</u></b> <br />  Επιλέγουμε το Public Key, έτσι ώστε να είναι σχετικά πρώτο με το Φ(n).
                                        </Form.Label>
                                        <ul>
                                            <li>Παράγοντες του Φ(n) 20 = 5 x 4 = 5 x 2 x 2</li>
                                            <li>Συνεπώς το E δεν πρέπει να είναι πολλαπλάσιο των 5 & 2 και να μην διαιρείται από Το 20</li>
                                            <li>Επιλέγουμε E = 7</li>
                                        </ul>               
                                    </Form>

                                    <Form className="customform">
                                        <Form.Label>
                                            <b><u>4. Private Key </u></b> <br /> Υπολογίζουμε το Private Key D έτσι ώστε (DxE)mod(Φ(n))=1.
                                        </Form.Label>
                                        <ul>
                                            <li>(D x 7) mod 20 = 1</li>
                                            <li> Επιλέγουμε D = 3 καθώς (3 x 7) mod 20 = 1</li>
                                        </ul>               
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </Collapse>

                    <Collapse in={activeCard === 'process' && open}>
                        <div>
                            {/* Content for the 'process' card */}
                            <Col>
                                <Row>
                                    <Col>
                                        <Card border="info" className="customcardProcessTop">
                                            <Card.Body>
                                                <Form className="customform">
                                                    <Form.Label>
                                                        Στo προηγούμενο βήμα υπολογίσαμε τα βασικά στοιχεία που χρειάζεται ο Bob για να μπορέσει να κρυπτογραφήσει και να αποκρυπτογραφήσει μηνύματα. Τώρα θα χρησιμοποιήσουμε αυτά τα αποτελέσματα στη διαδικασία της κρυπτογράφησης.
                                                    </Form.Label> 
                                                    <Form.Label style={{ display: 'block', textAlign: 'center', fontSize: '13px' }}>
                                                        <span class="text-item">P = 3</span>
                                                        <span class="text-item">Q = 11</span>
                                                        <span class="text-item">n = 33</span>
                                                        <span class="text-item">Φ(n) = 20</span>
                                                        <span class="text-item"><i class="bi bi-unlock-fill" style={{fontSize: '15px'}}></i>Public Key:  (7,33)</span>
                                                        <span class="text-item"><i class="bi bi-key-fill" style={{fontSize: '17px'}}></i>Private Key: (3,33)</span>
                                                    </Form.Label>
                                                </Form>
                                            </Card.Body>
                                        </Card>
                                        <br />
                                    </Col>
                                </Row>
                                <Row>
                           <Col>          
                             <Card border="info"className="customcardProcessBob1">
                               <Card.Body>
                                 <Card.Title style={{ fontWeight: 'bold' ,fontSize: '1.0rem'}}>
                                 <i class="bi bi-person-square"style={{fontSize: '16px', color:'rgb(68, 199, 235)'}} ></i> &nbsp;Bob</Card.Title>
                                      
                                                 
                                 <Form className="customform">                    
                                     <Form.Label>
                                     <b>1.</b>&nbsp;
                                       Ο Bob δημιουργεί το &nbsp;
                                       <i class="bi bi-unlock-fill" style={{fontSize: '15px'}}></i>Public Key 
                                      (E,n) και το &nbsp;
                                      <i class="bi bi-key-fill"  style={{fontSize: '17px'}} ></i>  Private Key
                                      (D,n) 
                                     </Form.Label> 
                                     </Form>
                 
                                   <Form className="customform">  
                                     <Form.Label>
                                     <b>2.</b>&nbsp;
                                      Στέλνει το &nbsp;
                                      <i class="bi bi-unlock-fill" style={{fontSize: '15px'}}></i>Public Key  
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
                             <Card Card border="danger"  className="customcardProcessAlice">              
                                 <Card.Body>
                                   <Card.Title style={{ fontWeight: 'bold',fontSize: '1.0rem' }}> 
                                    <i class="bi bi-person-square"style={{fontSize: '17px', color:'rgb(235, 68, 113)'}} ></i> &nbsp;Alice
                                   </Card.Title>
                                                              
                                     <Form className="customform"> 
                                     <Form.Label>
                                     <b>3.</b>&nbsp;
                                       Η Alice επιθυμεί να στείλει ένα μήνυμα <b>M = 15</b> στον Bob. Χρησιμοποιεί το  &nbsp;
                                      <i class="bi bi-unlock-fill" style={{fontSize: '15px'}}></i> Public Key
                                       (E,n) του Bob ώστε να κρυπτογραφήσει το μήνυμα &nbsp;
                                       <i class="bi bi-chat-left-text-fill" style={{fontSize: '17px', color:'rgb(235, 68, 113)'}}></i>&nbsp;
                                       M της και να δημιουργήσει το κρυπτογραφημένο μήνυμα &nbsp;
                                       <i class="bi bi-lock-fill"style={{fontSize: '15px'}} ></i> CT.
                                     </Form.Label>                  
                                     </Form>
                 
                                     <Form className="customform"> 
                                        <Form.Label>
                                          <Row className="align-items-center">                                       
                                            <Col xs={6}>
                                              <Form.Label style={{ marginLeft: '5px', display: 'flex', alignItems: 'center' }}> 
                                                <i className="bi bi-lock-fill" style={{ fontSize: '15px', marginRight: '5px' }}></i> 
                                                CT = M^E mod n
                                              </Form.Label>                              
                                            </Col>

                                            <Col xs={6}>
                                              <Form.Control 
                                                placeholder="27 = 15^7 mod 33" 
                                                disabled 
                                                style={{ width: "100%", fontSize: '13px' }} 
                                              />
                                            </Col>
                                          </Row>
                                        </Form.Label>
                                      </Form>

                 
                                     <Form className="customform"> 
                                     <Form.Label>
                                     <b>4.</b>&nbsp;
                                       Στέλνει το κρυπτογραφημένο μήνυμα &nbsp;
                                      <i class="bi bi-lock-fill"style={{fontSize: '15px'}} ></i>
                                      <b>CT = 27</b> στον &nbsp;
                                      <i class="bi bi-person-square"style={{fontSize: '17px', color:'rgb(68, 199, 235)'}} ></i> Bob.
                              
                                     </Form.Label>                  
                                     </Form>
                               
                                 </Card.Body>
                            </Card>
                               <br />
                           </Col>

                           <Col>          
                             <Card border="info"className="customcardProcessBob2">
                               <Card.Body>
                                 <Card.Title style={{ fontWeight: 'bold' ,fontSize: '1.0rem'}}>
                                 <i class="bi bi-person-square"style={{fontSize: '16px', color:'rgb(68, 199, 235)'}} ></i> &nbsp;Bob</Card.Title>
                                      
                                 <Form className="customform"> 
                                  <Form.Label>
                                  <b>5.</b>&nbsp;
                                  Ο Bob λαμβάνει το κρυπτογραφημένο μήνυμα  &nbsp;
                                  <i class="bi bi-lock-fill"style={{fontSize: '15px'}} ></i> CT. Χρησιμοποιεί το Private Key του &nbsp;
                                  <i class="bi bi-key-fill"  style={{fontSize: '17px'}} ></i> 
                                  (D,n) για να αποκρυπτογραφήσει το μήνυμα.
                                 </Form.Label>                  
                                  </Form>

                                                                
                                  <Form className="customform"> 
                                        <Form.Label>
                                          <Row className="align-items-center">                                       
                                            <Col xs={6}>
                                              <Form.Label style={{ marginLeft: '5px', display: 'flex', alignItems: 'center' }}> 
                                              <i class="bi bi-chat-left-text-fill" style={{fontSize: '17px', color:'rgb(235, 68, 113)'}}></i>&nbsp;
                                              M = CT^D mod n
                                              </Form.Label>                              
                                            </Col>

                                            <Col xs={6}>
                                              <Form.Control 
                                                placeholder="15 = 27^3 mod 33" 
                                                disabled 
                                                style={{ width: "100%", fontSize: '13px' }} 
                                              />
                                            </Col>
                                          </Row>
                                        </Form.Label>
                                      </Form>

                                      <Form className="customform"> 
                                          <Form.Label style={{ display: 'block', textAlign: 'center', fontSize: '14px' }}>
                                          <u><span class="text-item">Μ = 15</span></u>
                                       </Form.Label>                  
                                      </Form>
                                        

                                                        
                               </Card.Body>
                             </Card>
                             <br />         
                 
                           </Col>
                                           
                         </Row>
                            </Col>
                        </div>
                    </Collapse>
                </Col>
            </Row>
        </Container>
    );
};

export default Demo;

