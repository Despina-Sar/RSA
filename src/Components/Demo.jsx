/*
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Form, Button, Row, Col } from 'react-bootstrap';


function Demo() {
  return (

      <Container>
        <Row>
          <Col>          
            <Card border="light" className="customcardDemo1">
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' ,fontSize: '1.0rem'}}>Υπολογισμοί Αλγορίθμου</Card.Title>
                     
                  <Form className="customform">                    
                    <Form.Label>
                      1. Επιλέγουμε δύο πρωτογενείς αριθμούς p και q. Αυτοί οι αριθμοί πρέπει να είναι μεγάλοι και τυχαίοι, ώστε να διασφαλίζεται η ασφάλεια του συστήματος.
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
            <br />         

          </Col>

          <Col>
            <Card border="light" className="customcardDemo2">              
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold',fontSize: '1.0rem' }}>Διαδικασία Κρυπρογράφισης</Card.Title>
                               
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
       
      </Container>
    
  
  );
}

export default Demo;

*/

import React, { useState } from 'react';
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap';

const Demo = () => {
    const [activeCard, setActiveCard] = useState(''); // State to manage active card

    const handleButtonClick = (card) => {
        setActiveCard(card); // Set the active card based on button click
    };

    return (
        <Container>
            <Row className="justify-content-center mt-2">
                <Col xs={12} md={6} className="text-center">
                    <Button 
                        variant="dark" 
                        onClick={() => handleButtonClick('card1')}
                        className="me-2"
                        style={{ fontSize: '0.9rem', padding: '0.3rem 0.5rem', marginLeft: '30px'  }}
                    >
                        Υπολογισμοί Αλγορίθμου
                    </Button>
                    <Button 
                        variant="dark" 
                        onClick={() => handleButtonClick('card2')}
                        style={{ fontSize: '0.9rem', padding: '0.3rem 0.5rem', marginLeft: '30px'  }}
                    >
                       Κρυπρογράφιση
                    </Button>
                </Col>
            </Row>

            <Row className="justify-content-center mt-1">
                <Col xs={11}>
                    {activeCard === 'card1' && (
                      <Card border="info" className="customcardDemo1">
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
                            <b><u>2. n & Φ(n)</u></b> <br /> Υπολογίζουμε το n ως το γινόμενο των δύο πρώτων αριθμών καθώς και το Φ(n) με ον παρακάτω τρόπο:
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
                    {activeCard === 'card2' && (
           <Col>
                        <Row>
                           <Col>          
                             <Card border="info" className="customcardAlg4">
                               <Card.Body>
                                                                                                           
                                 <Form className="customform">                    
                                     <Form.Label>
                                       Ο Bob δημιουργεί το Public Key &nbsp;
                                      <i class="bi bi-unlock-fill" style={{fontSize: '15px'}}></i>
                                      (E,n) και το Private Key&nbsp;
                                      <i class="bi bi-key-fill"  style={{fontSize: '17px'}} ></i> 
                                      (D,n) 
                                     </Form.Label> 
                                     </Form>
                 
                                  
                               </Card.Body>
                             </Card>
                             <br />         
                 
                           </Col>
                                                           
                         </Row>



                           <Row>
                           <Col>          
                             <Card border="info"className="customcardAlgBob1">
                               <Card.Body>
                                 <Card.Title style={{ fontWeight: 'bold' ,fontSize: '1.0rem'}}>
                                 <i class="bi bi-person-square"style={{fontSize: '16px', color:'rgb(68, 199, 235)'}} ></i> &nbsp;Bob</Card.Title>
                                      
                                                 
                                 <Form className="customform">                    
                                     <Form.Label>
                                     <b>1.</b>&nbsp;
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
                                     <b>2.</b>&nbsp;
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
                                   <Card.Title style={{ fontWeight: 'bold',fontSize: '1.0rem' }}> 
                                    <i class="bi bi-person-square"style={{fontSize: '17px', color:'rgb(235, 68, 113)'}} ></i> &nbsp;Alice
                                   </Card.Title>
                                                              
                                     <Form className="customform"> 
                                     <Form.Label>
                                     <b>3.</b>&nbsp;
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
                                     <b>4.</b>&nbsp;
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
                                  <b>5.</b>&nbsp;
                                  <i class="bi bi-person-square"style={{fontSize: '17px', color:'rgb(68, 199, 235)'}} ></i> &nbsp;
                                  Ο Bob λαμβάνει το κρυπτογραφημένο μήνυμα  &nbsp;
                                  <i class="bi bi-lock-fill"style={{fontSize: '15px'}} ></i> CT. Χρησιμοποιεί το Private Key του &nbsp;
                                  <i class="bi bi-key-fill"  style={{fontSize: '17px'}} ></i> 
                                  (D,n) για να αποκρυπτογραφήσει το μήνυμα.
              �                    </Form.Label>                  
                                  </Form>

                                  <Form className="customform"> 
                                  <Form.Label>
                                  <b>6.</b>&nbsp;
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
                 </Col>

                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Demo;
