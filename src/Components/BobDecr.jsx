
import React, { useState,useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { Form,Button, Row, Col } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RSAContext } from './RSAContext';

// ----------------------------------------------CORRCT START -------------------------------------
function BobDecr({isBlurred, rsaValuess} ){

//------------------offcanvas-------------
const { rsaValues, setRSAValues } = useContext(RSAContext);///////////////
const [form, setForm] = useState(rsaValues);////////////////
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const[errors, setErrors] = useState({})
//------------------validation----------------
 // const[form, setForm] = useState({})
 /* 11109
 const[errors, setErrors] = useState({})
  const setField = (field,value) => {
    setForm({
      ...form,
      [field]:value
    })

    if(!!errors[field])
    setErrors({
       ...errors,
       [field]:null  
    })
  }
*/
const setField = (field, value) => {
  setForm(prevForm => {
    const newForm = { ...prevForm, [field]: value };
    validateM(field, value, newForm); // validate with the updated form state
    return newForm;
  });


  setRSAValues(prev => ({
    ...prev,
    [field]: value
  }));

  if (!!errors[field]) {
    setErrors(prevErrors => ({
      ...prevErrors,
      [field]: null
    }));
  }
};
 
//----------------------------------------handle submit only for M---------------------------------------------
const validateM = (field, value, form) =>{
  
  //1109  const handleSubmitM = e =>{
      //e.preventDefault()
      let{M}= form
      const newErrors ={}
          if (M === undefined || M === '') {newErrors.M = 'M empty'}
      else{ 
          // Check if E and phi(N) are positive integers
          M=Number(M);
          if(M < 0){
            newErrors.E = 'M should be greater than 0'
            console.log('inside final error');
        }}
   
      if(Object.keys(newErrors).length>0){
        setErrors(newErrors)
        console.log('inside set M error');
      }
      else{console.log("Successfull Submittion");}
      console.log(form)
      
    
 
        const { d, n } = rsaValues;
    
        // Decrypting ciphertext using RSA (CT ^ d) % n
        /*1109
          const decryptedMessage = cipherTextInput
          .split(' ')
          .map((ct) => String.fromCharCode((parseInt(ct) ** d) % n))
          .join('');
        setDecryptedMessage(decryptedMessage);
            */
    }
  


  return ( 
                
    <div className={`customcardBlur ${isBlurred  ? 'blurred' : ''}`}>                       
          <Card border="info" className="customcard">
            <Card.Body>
                      
              <Row className="align-items-center">
               <Col>
               <Card.Title>Bob: Decryption  &nbsp;
              <Button variant="outline-info" onClick={handleShow}>
                   <i class="bi bi-lightbulb"></i>
                </Button>
              </Card.Title>
            </Col>
            
            <Col className="text-end">
            <div style={{ fontSize: '1.25rem' }}>Step 3</div>
            </Col>
          </Row>
              
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>RSA Help</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <ul>
                          <li>n = P x Q </li>
                          <li>Φ(n) =  (P-1)x(Q-1) </li>
                          <li> Choose a natural number e where and e is co-prime of phi(n) </li>
                       </ul>     
                 
                </Offcanvas.Body>
              </Offcanvas>
    
               
               
              <Form className="customform">                    
                  <Form.Label>
                  1. Select message you want to send to Bob &nbsp;
                  <i class="bi bi-chat-left-text-fill" style={{fontSize: '17px'}}></i>&nbsp;
                     M using Bob's public key                   
                  </Form.Label>

                  <Row>
                      <Col xs={1}>
                      <Form.Label>M: </Form.Label>
                      </Col>
                      <Col xs={4}>
                        <Form.Control
                            type="integer"
                            size="sm"
                            value={form.M}
                            onChange={(e) => setField('M', e.target.value)}
                            isInvalid={!!errors.M}
                          />
                        <Form.Control.Feedback type= 'invalid'>
                          {errors.M}
                        </Form.Control.Feedback>
                      </Col>                                    
                     
                      <Col xs={6}>
                        <Button type='submit' onClick={validateM} className='my-2' variant="outline-info">
                          Next Step
                        </Button>
                      </Col>                     
                    </Row> 
                                      
                 </Form>


            </Card.Body>
          </Card>
         
     </div>  

);
}
export default BobDecr;

// -----------------------------------------CORRCT END------------------------------------------------------------


