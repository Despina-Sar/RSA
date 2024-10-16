
import React, { useState,useContext } from 'react';
import Card from 'react-bootstrap/Card';
import {  Form,Button, Row, Col } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RSAContext } from './RSAContext';

// ----------------------------------------------CORRCT START -------------------------------------
function BobDecr({isBlurred, rsaValuess,triggerWin} ){

//------------------offcanvas-------------
const { rsaValues, setRSAValues } = useContext(RSAContext);///////////////
const [form, setForm] = useState(rsaValues);////////////////
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const[errors, setErrors] = useState({})

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
      let{MD}= form
      const newErrors ={}
      const M = Number(rsaValues.M);
          if (MD === undefined || MD === '') {newErrors.M = 'M empty'}
      else{ 
          // Check if E and phi(N) are positive integers
          MD=Number(MD);
          if(MD !== M){
            newErrors.MD = 'Wrong M'
          
        }}
   
      if(Object.keys(newErrors).length>0){
        setErrors(newErrors)
        
      }
      else{
        console.log("Successfull Submittion");
        triggerWin();}
     }
  


  return ( 
                
    <div className={`customcardBlur ${isBlurred  ? 'blurred' : ''}`}>                       
          <Card border="info" className="customcardBobDecr">
            <Card.Body>
                      
              <Row className="align-items-center">
               <Col>
               <Card.Title style={{ fontWeight: 'bold' }}>Bob: Αποκρυπτογράφιση Μηνύματος &nbsp;
               </Card.Title>
            </Col>
            
            <Col className="text-end">
            <div style={{ fontSize: '1.7rem' , fontWeight: 'bold'}}>Βήμα 3</div>
            </Col>
          </Row>
         
               
               
              <Form className="customform">  
              <Form.Label> Χρησιμοποίησε το private key D του Bob, έτσι ώστε να αποκρυπτογραφήσεις και να διαβάσεις το μήνυμα &nbsp;
                 <i class="bi bi-chat-left-text-fill" style={{fontSize: '17px'}}></i>&nbsp;της Alice.
              </Form.Label>                  
               <Row>

       
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>         
                  <span style={{ fontSize: '16px' }}>M = CT^D mod n =  {rsaValues.CT || 'CT'} ^ {rsaValues.D || 'D'} mod {rsaValues.n || 'n'} = </span>
                      <Form.Control                          
                          type="number" 
                          value={form.MD} 
                        //  onChange={(e) => handleInputChangeD('D', e.target.value)} 
                          onChange={(e) => setField('MD', e.target.value)}
                          isInvalid={!!errors.MD}
                          placeholder="M" 
                          style={{ width: '70px', padding: '5px', fontSize: '16px', textAlign: 'center', marginLeft: '1px' }} 
                        />  
                    </div>

                    </Row> 
                                      
                 </Form>


            </Card.Body>
          </Card>
         
     </div>  

     

     

);
}
export default BobDecr;

// -----------------------------------------CORRCT END------------------------------------------------------------


