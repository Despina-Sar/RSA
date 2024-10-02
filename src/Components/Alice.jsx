
import React, { useState,useContext  } from 'react';
import Card from 'react-bootstrap/Card';
import { Modal,Form,Button, Row, Col } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RSAContext } from './RSAContext';
// ----------------------------------------------CORRCT START -------------------------------------
function Alice({ isBlurred, onUnlockClick ,rsaValuess }){

//------------------offcanvas-------------
const { rsaValues, setRSAValues } = useContext(RSAContext);///////////////
//const [form, setForm] = useState(rsaValues);////////////////
const [form, setForm] = useState({ M: '', CT: '' });
const [show, setShow] = useState(false);
const [showModal, setShowModal] = useState(false); // Controls modal visibility
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

//------------------validation----------------
  //const[form, setForm] = useState({})
  const[errors, setErrors] = useState({})

  /*1109
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


const handleButtonClick = () => {
  let{M,CT}= form

  // Check if any fields are empty
  if (!M || !CT ) {
    setShowModal(true); // Show modal if fields are empty
  } else {
    // Call the onUnlockClick function since fields are filled
    onUnlockClick();
    console.log('CT sent to Bob!'); // Placeholder for any additional functionality
  }
};

const handleCloseMod = () => setShowModal(false);

const setField = (field, value) => {
  setForm(prevForm => {
    const newForm = { ...prevForm, [field]: value };
    validateField(field, value, newForm); // validate with the updated form state
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

  const validateField = (field, value, updatedForm) => {
    switch (field) {
      case 'M':
        handleSubmitM(field, value,updatedForm);
        break;
      case 'CT':
        handleSubmitCT(field, value,updatedForm);
        break;
        default:
        break;
    }
  };
//----------------------------------------handle submit only for M---------------------------------------------

const handleSubmitM = (field, value, form) =>{
  
//1109  const handleSubmitM = e =>{
    //e.preventDefault()
    let{M}= form
    const newErrors ={}
        if (M === undefined || M === '') {newErrors.M = 'Το πεδίο είναι κενό'}
    else{ 
        // Check if E and phi(N) are positive integers
        M=Number(M);
        if(M < 0){
          newErrors.M = 'M πρέπει να είναι μεγαλύτερο του 0'
       }}
 
    if(Object.keys(newErrors).length>0){
      setErrors(newErrors)
    }
    else{console.log("Successfull Submittion");}
    console.log(form)

    
    }

//----------------------------------------handle submit only for CT---------------------------------------------
const handleSubmitCT = (field, value, form) =>{
  const { E, n } = rsaValues;
  console.log('Soo lets check bob values ..E= '+ E+' N= '+n);

  console.log('rsaValues:', rsaValues);
  let{M,CT}= form
  const newErrors ={}
      if (CT === undefined || CT === '') {newErrors.CT = 'Το πεδίο είναι κενό'}
  else{ 
      // Check if E and phi(N) are positive integers
     /*E=Number(E);
      M=Number(M);
      n=Number(n);
      */
      const E = Number(rsaValues.E);
      const n = Number(rsaValues.n);
      console.log( M )
      console.log( E )
      console.log(n)
      let encryptedMessage = rsaEncrypt(Number(M) , E , n);
      console.log("Encrypted Message (C):", encryptedMessage);

      if (encryptedMessage !== Number(CT)) 
        { newErrors.CT = 'Λάθος υπολογισμός CT' }
   }

  if(Object.keys(newErrors).length>0){
    setErrors(newErrors)
  }
  else{console.log("Successfull Submittion");}
  console.log(rsaValues.E)
  }



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



  return ( 
    <div className={`customcardBlur  ${isBlurred  ? 'blurred' : ''}`}>       
          <Card border="danger" className="customcardAlice">
            <Card.Body>
           
              <Row className="align-items-center">
               <Col>
                <Card.Title style={{ fontWeight: 'bold' }}>Alice: Κρυπτογράφηση Μηνύματος  &nbsp;
                   <Button variant="outline-danger" onClick={handleShow} style={{ padding: '0.05rem 0.3rem' }}>
                       <i class="bi bi-question-lg" style={{ fontSize: '1.3rem' }}></i>
                   </Button>
                </Card.Title>
            </Col>
            
            <Col className="text-end">
            <div style={{ fontSize: '1.7rem' , fontWeight: 'bold'}}>Step 2</div>
            </Col>
          </Row>
              
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title><h2 style={{ fontSize: '1.5rem' }}>Alice: Βήματα Kρυπτογράφισης</h2></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                      <ul style={{ fontSize: '1.2rem' }}>
                       <li>
                          <strong>Κρυπτογράφηση:</strong> 
                          <ul>
                            <li>Για ένα μήνυμα M (M &lt; n), CT ≡ M^E mod n</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Αποκρυπτογράφηση:</strong> 
                          <ul>
                            <li>Για το κρυπτογραφημένο μήνυμα M ≡ C^D mod n</li>
                          </ul>
                        </li>
                      </ul>
                    </Offcanvas.Body>

              </Offcanvas>
    
               
               
              <Form className="customform">                    
                  <Form.Label> Alice wants to send an encrypted message to Bob.</Form.Label>
                  <Form.Label>1. Select message you want to send to Bob &nbsp;
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
                     
                     {/*
                      <Col xs={6}>
                        <Button type='submit' onClick={handleSubmitM} className='my-2' variant="outline-danger">
                          Next Step
                        </Button>
                      </Col>      
                      */}               
                    </Row> 
                                      
                 </Form>


                 <Form className="customform">                    
                  <Form.Label>
                  2. Encrypt the above message using Bob's public key&nbsp;
                     <i class="bi bi-unlock-fill" style={{fontSize: '20px'}}></i>&nbsp;
                     E                  
                  </Form.Label>

                  <Row >
                {/*  -----new 12 09-----  */}  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>                         
                      <span style={{ fontSize: '16px' }}>CT = M^E mod n =  {rsaValues.M || 'M'} ^ {rsaValues.E || 'E'} mod {rsaValues.n || 'n'} =</span>
                      <Form.Control                          
                          type="number" 
                          value={form.CT} 
                        //  onChange={(e) => handleInputChangeD('D', e.target.value)} 
                          onChange={(e) => setField('CT', e.target.value)}
                          isInvalid={!!errors.CT}
                          placeholder="CT" 
                          style={{ width: '70px', padding: '5px', fontSize: '16px', textAlign: 'center', marginLeft: '1px' }} 
                        />                   
                    </div>
                 {/*  -----new 12 09-----  */}  

                  {/*
                      <Col xs={4}>
                        <Form.Control
                            type="integer"
                            size="sm"
                            value={form.CT}
                            onChange={(e) => setField('CT', e.target.value)}
                            isInvalid={!!errors.CT}
                          />
                        <Form.Control.Feedback type= 'invalid'>
                          {errors.CT}
                        </Form.Control.Feedback>
                      </Col>                                    
                     */}
                 
                      <Col xs={6}>
                         <Button onClick={handleButtonClick }
                          variant="outline-danger" 
                          style={{ fontSize: '1.1rem', padding: '0.3rem 0.5rem' }}
                          >Send CT to Bob
                          </Button>
                      </Col>                     
                    </Row> 
                                      
                 </Form>

                 <Modal show={showModal} onHide={handleCloseMod} centered>
                  <Modal.Header>
                    <Modal.Title>Μήνυμα λάθους</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  Παρακαλώ συμπληρώσε σωστά όλα τα πεδία ώστε να μπορέσεις να στείλεις το κρυπτογραφημένο μήνυμα στον Bob.
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseMod}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>


            </Card.Body>
          </Card>
         
     
          </div>
  

);
}
export default Alice;

// -----------------------------------------CORRCT END------------------------------------------------------------
