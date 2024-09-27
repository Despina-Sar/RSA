
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Form, Button, Row, Col } from 'react-bootstrap';


function Demo() {
  return (

      <Container>
        <Row>
          <Col>          
            <Card border="light" className="customcard2">
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>Algorithm Calculations</Card.Title>
                     
                  <Form className="customform">                    
                    <Form.Label>
                      1.  Choose two prime numbers P and Q
                    </Form.Label>
                    <Row className="mb-3">
                        <Col>
                        <Form.Label>P: </Form.Label>
                        </Col>
                        <Col xs={5}>
                          <Form.Control placeholder="3" disabled style={{width:"100%"}} />
                        </Col>
                       
                        <Col>
                          <Form.Label>Q: </Form.Label>
                        </Col>
                        <Col xs={5}>
                          <Form.Control placeholder="11" disabled style={{width:"100%"}} />
                        </Col>
                       
                       
                      </Row>                     
                   </Form>
                 


                   <Form className="customform">                    
                    <Form.Label>
                    2.  Calculate n and Φ(n)
                    </Form.Label>
                    <Row className="mb-3">
                        <Col xs={1}>
                        <Form.Label>n: </Form.Label>
                        </Col>
                        <Col xs={5}>
                          <Form.Control placeholder="P x Q= 3 x 11 = 33" disabled style={{width:"100%"}} />
                        </Col>
                       
                        <Col xs={1}>
                          <Form.Label>Φ(n): </Form.Label>
                        </Col>
                        <Col xs={5}>
                          <Form.Control placeholder="(P-1)x(Q-1)=2 x 10= 20" disabled style={{width:"100%"}} />
                        </Col>
                       
                       
                      </Row>                     
                   </Form>


                    <Form className="customform">
                      <Form.Label>
                        3.  Choose public key &nbsp;
                      <i class="bi bi-unlock-fill" style={{fontSize: '20px'}}></i> 
                     E such that it is not element of Φ(n).  
                        Means  it should not multiply by factors of Φ(n) and also not divide by Φ(n) .
                      </Form.Label>
                      <ul>
                          <li>Factors of Φ(n) 20 = 5 x 4 = 5 x 2 x 2</li>
                          <li>So E should not multiply by 5 & 2 and should not be divide by 20</li>
                          <li> <u>We choose E = 7 </u></li>
                       </ul>               
                    </Form>

                    <Form className="customform">
                      <Form.Label>
                      4.  Choose private key  &nbsp;
                      <i class="bi bi-key-fill"  style={{fontSize: '20px'}} ></i> 
                     D such that (DxE)mod(Φ(n))=1
                      </Form.Label>
                      <ul>
                          <li>(D x 7) mod 20 = 1</li>
                          <li> For D = 3 : (3 x 7) mod 20 = 1</li>
                          <li> <u>We choose D = 3 </u></li>
                       </ul>               
                    </Form>             
              </Card.Body>
            </Card>
            <br />         

          </Col>

          <Col>
            <Card border="light" className="customcard2">              
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>Encryption Process</Card.Title>
                               
                  <Form className="customform">                    
                    <Form.Label>
                     1.&nbsp;
                     <i class="bi bi-person-square"style={{fontSize: '16px', color:'rgb(68, 199, 235)'}} ></i> &nbsp;
                      Bob generates  &nbsp;
                     <i class="bi bi-unlock-fill" style={{fontSize: '20px'}}></i>
                     E and &nbsp;
                     <i class="bi bi-key-fill"  style={{fontSize: '20px'}} ></i> 
                     D 
                    </Form.Label> 
                    </Form>

                  <Form className="customform">  
                    <Form.Label>
                     2.&nbsp;
                     <i class="bi bi-person-square"style={{fontSize: '17px', color:'rgb(68, 199, 235)'}} ></i> &nbsp;
                      Bob share   &nbsp;
                      <i class="bi bi-unlock-fill" style={{fontSize: '20px'}}></i>
                     E with  &nbsp;
                     <i class="bi bi-person-square"style={{fontSize: '17px', color:'rgb(235, 68, 113)'}} ></i> &nbsp;
                      Alice
                    </Form.Label>                  
                    </Form>

                    <Form className="customform"> 
                    <Form.Label>
                     3.&nbsp;
                     <i class="bi bi-person-square"style={{fontSize: '17px', color:'rgb(235, 68, 113)'}} ></i> &nbsp;
                      Alice encrypts her message  &nbsp;
                      <i class="bi bi-chat-left-text-fill" style={{fontSize: '17px', color:'rgb(235, 68, 113)'}}></i>&nbsp;
                      M using Bob's Public Key&nbsp;
                      <i class="bi bi-unlock-fill" style={{fontSize: '20px'}}></i> 
                     E                       
                    </Form.Label>                  
                    </Form>

                    <Form className="customform"> 
                    <Form.Label>
                    <Row className="mb-3">
                     &nbsp;&nbsp;&nbsp;
                     <Col xs={3}>
                      <i class="bi bi-lock-fill"style={{fontSize: '20px'}} ></i> &nbsp;
                        <Form.Label>CT = </Form.Label>
                        </Col>
                        <Col xs={8}>
                          <Form.Control placeholder="M^E mod N" disabled style={{width:"100%"}} />
                       </Col>
                     </Row>                               
                    </Form.Label>                  
                    </Form>

                    <Form className="customform"> 
                    <Form.Label>
                     4.&nbsp;
                     <i class="bi bi-person-square"style={{fontSize: '17px', color:'rgb(68, 199, 235)'}} ></i> &nbsp;
                      Bob decrypts &nbsp;
                      <i class="bi bi-lock-fill" style={{fontSize: '20px'}} ></i>
                      CT using his Private Key &nbsp;
                      <i class="bi bi-key-fill"  style={{fontSize: '20px'}} ></i> 
                     D                       
                    </Form.Label>                  
                    </Form>

                    <Form className="customform"> 
                    <Form.Label>
                    <Row className="mb-3">
                     &nbsp;&nbsp;&nbsp;&nbsp;
                     <Col xs={3}>
                      <i class="bi bi-chat-left-text-fill" style={{fontSize: '17px', color:'rgb(235, 68, 113)'}}></i>&nbsp;
                        <Form.Label>M = </Form.Label>
                        </Col>
                        <Col xs={8}>
                          <Form.Control placeholder="CT^D mod N" disabled style={{width:"100%"}} />
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

