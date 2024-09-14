
import React, { useState,useContext  } from 'react';
import Card from 'react-bootstrap/Card';
import { Form,Button, Row, Col } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RSAContext } from './RSAContext';

//-----------------------------------------------CORRECT START------------------------------------------------------- 
function Bob({ onSendClick, rsaValuess, updateRSAValues  }){

//------------------offcanvas-------------
const { rsaValues, setRSAValues } = useContext(RSAContext);///////////////
const [form, setForm] = useState(rsaValues);////////////////
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [number, setNumber] = useState('');
const [factors, setFactors] = useState('');


  const[errors, setErrors] = useState({})


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

    // Validation function for individual fields
    const validateField = (field, value, updatedForm) => {
      switch (field) {
        case 'p':
          validateP(field, value,updatedForm);
          break;
        case 'q':
          validateQ(field, value,updatedForm);
          break;
        case 'n':
          validateN(field, value, updatedForm);
          break;
        case 'fn':
          validateFn(field, value, updatedForm);
          break;
        case 'E':
          validateE(field, value, updatedForm);
          break;
        case 'D':
          validateD(field, value, updatedForm);
          break;
        default:
          break;
      }
    };

  


    const handleSubmit = () => {
      // Update the RSA values in the parent component
      const { p, q, n, fn, E, D } = form;
      updateRSAValues({ p, q, n, fn, e: E, d: D });
      onSendClick();
    };
  
//-----------------------------------handle submit only for P-------------------------------------------


  const validateP = (field, value, form) =>{
     const{p}= form
     const newErrors ={}
     console.log(p);
     console.log(isPrime(p));
      //-validation for p == prime
      if (p === undefined || p === '' ){newErrors.p = 'p empty'}
      else{
       if (!isPrime(p)) {
         newErrors.p = 'P is not a prime number';
       }
     }
        
     if(Object.keys(newErrors).length>0){
       setErrors(newErrors)
     }
     else{
       console.log("Successfull Submittion");
       setRSAValues(prev => ({ ...prev, p}));
       console.log('rsaValues:', rsaValues);
     }   
   }

//---------------------------------handle submit only for Q --------------------------------------------

  const validateQ = (field, value, form) =>{
     const{ q }= form
     const newErrors ={}
          //validation for q == prime
       if (q === undefined || q === '') {newErrors.q = 'q empty'}
       else{ 
         if (!isPrime(q)) {
           newErrors.q = 'Q is not a prime number';
         } 
    
     }     
     if(Object.keys(newErrors).length>0){
       setErrors(newErrors)
     }
     else{
       console.log("Successfull Submittion");
       setRSAValues(prev => ({ ...prev, q }));
       console.log('rsaValues:', rsaValues);
     }   
   }
 



//---------------------------------handle submit only for n -------------------------------------------
  const validateN = (field, value, form) =>{
    const{p,q,n}= form
    const newErrors ={}
    
     // n validation
    if (n === undefined || n === '') {newErrors.n = 'n empty'}
    else{ 
    if (n != p*q) 
        {
        newErrors.n = 'Wrong n' 
        console.log(n + " not p x q");
        } 
    }    
    if(Object.keys(newErrors).length>0){
      setErrors(newErrors)
    }
    else{
      console.log("Successfull Submittion");
      setRSAValues(prev => ({ ...prev, n}));
      console.log('rsaValues:', rsaValues);
    }

  }

  //---------------------------------handle submit only for Fn--------------------------------------------
  const validateFn = (field, value, form) =>{
     const{p,q,fn}= form
     const newErrors ={}
  
    //fn validation
    if (fn === undefined || fn === '') {newErrors.fn = 'Φn empty'}
    else{ 
    if (fn != ((q-1)*(p-1))) 
         {
             newErrors.fn = 'Wrong fn'
             console.log(fn + " invalid");
         }
    }     
     if(Object.keys(newErrors).length>0){
       setErrors(newErrors)
     }
     else{
       console.log("Successfull Submittion");
       setRSAValues(prev => ({ ...prev, fn }));
       console.log('rsaValues:', rsaValues);
     }
 
   }
 



//----------------------------------------handle submit only for E---------------------------------------------
  const validateE = (field, value, form) =>{
    let{fn,E}= form
    const newErrors ={}
    let Einput;
        if (E === undefined || E === '') {newErrors.E = 'E empty'}
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
            newErrors.E = 'Wrong E'
            console.log('inside final error');
        }
    }
 
    if(Object.keys(newErrors).length>0){
      setErrors(newErrors)
      console.log('inside set E error');
    }
    else{
      console.log("Successfull Submittion");
      setRSAValues(prev => ({ ...prev, E }));
      console.log('rsaValues:', rsaValues);
    }
  
    }
//----------------------------------------------------------------
const handleInputChange = (e) => {
  const inputValue = e.target.value;

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
      setErrors({ ...errors, fn: 'Please enter a valid positive number.' });
    }
  };


//--------------------------------handle submit only for D-------------------------------------------------
    
const handleInputChangeD = (field, value) => {
  // Update form state
  setField(field, value);
};


const validateD = (field, value, form) =>{
    //calculate pricate key D
  const D = Number(value);
  const E = Number(rsaValues.E);
  const fn = Number(rsaValues.fn);

    console.log(D);
    const newErrors ={}

    if (D === undefined || D === '') {newErrors.D = 'D empty'}
    else{ 
      console.log('E, Fn' +E + '  - '+fn);
      let y=modInverse(E, fn);
      console.log('D= '+D+ ' and y=' +y);
    //  const D=Number(D);
      if(D !== y){
        console.log('D is diff from y');
        newErrors.D = 'Wrong D' 
        }
    }

    if(Object.keys(newErrors).length>0){
      setErrors(newErrors)
      console.log('inside set D error');
    }
    else{
      console.log('Successful Submission');
      setRSAValues(prev => ({ ...prev, D }));
     // setField('D', value);
      console.log('rsaValues:', rsaValues);
    }

  }

  //--------------------------calculation functions--------------------------------------------------------


  const isPrime = (num) => {
    let j;
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
  
/*
  function extendedEuclidean(a, b) {
    if (b === 0) {
        return [1, 0, a];
    }
    const [x, y, gcd] = extendedEuclidean(b, a % b);
    return [y, x - Math.floor(a / b) * y, gcd];
}


function modInversee(a, m) {
  let m0 = m, t, q;
  let x0 = 0, x1 = 1;

  if (m === 1) {
      return 0;
  }

  while (a > 1) {
      // q is the quotient
      q = Math.floor(a / m);
      t = m;

      // m is the remainder now, process same as Euclid's algorithm
      m = a % m;
      a = t;
      t = x0;

      x0 = x1 - q * x0;
      x1 = t;
  }

  // Make x1 positive
  if (x1 < 0) {
      x1 += m0;
  }

  return x1;
}


*/

  return ( 
                
          <Card border="info" className="customcard">
            <Card.Body>
           
              <Row className="align-items-center">
               <Col>
               <Card.Title>Bob: Key Generation     &nbsp;
              <Button variant="outline-info" onClick={handleShow}>
                   <i class="bi bi-lightbulb"></i>
                </Button>
              </Card.Title>
            </Col>
            
            <Col className="text-end">
            <div style={{ fontSize: '1.25rem' }}>Step 1</div>
            
            </Col>
          </Row>
              

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Help: Bob Calculations</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <ul>
                          <li>n: P x Q </li>
                          <li>Φ(n): (P-1)x(Q-1) </li>
                          <li>E: it should not multiply by factors of Φ(n) and also not divide by Φ(n) </li>
                          <li>D:  (DxE)mod(Φ(n))=1 </li>
                       </ul>     
                 
                </Offcanvas.Body>
              </Offcanvas>

               
                <Form className="customform">                    
                  <Form.Label>
                    1.  Choose two prime numbers P and Q
                  </Form.Label>

                  <Row className="mb-3">
                      <Col xs={1}>
                      <Form.Label>P: </Form.Label>
                      </Col>
                      <Col xs={4}>
                        <Form.Control
                            type="number"
                            size="sm"
                            value={form.p}
                            onChange={(e) => setField('p', e.target.value)}
                            isInvalid={!!errors.p}
                          />
                        <Form.Control.Feedback type= 'invalid'>
                          {errors.p}
                        </Form.Control.Feedback>
                      </Col>
                     

                      <Col xs={1}>
                        <Form.Label>Q: </Form.Label>
                      </Col>
                      <Col xs={4}>
                      <Form.Control
                            type="number"
                            size="sm"
                            onChange={(e) => setField('q', e.target.value)}
                            isInvalid={!!errors.q}
                          />
                       <Form.Control.Feedback type= 'invalid'>
                          {errors.q}
                        </Form.Control.Feedback>
                      </Col>
                   </Row> 
                                      
                 </Form>


                 <Form className="customform">                    
                  <Form.Label>
                    2. Calculate n and Φ(n)
                  </Form.Label>

                  <Row className="mb-3">
                      <Col xs={1}>
                      <Form.Label>n: </Form.Label>
                      </Col>
                      <Col xs={4}>
                        <Form.Control
                            type="number"
                            size="sm"
                            value={form.n}
                            onChange={(e) => setField('n', e.target.value)}
                            isInvalid={!!errors.n}
                          />
                        <Form.Control.Feedback type= 'invalid'>
                          {errors.n}
                        </Form.Control.Feedback>
                      </Col>
                     

                      <Col xs={1}>
                        <Form.Label>Φ(n): </Form.Label>
                      </Col>
                      <Col xs={4}>
                      <Form.Control
                            type="number"
                            size="sm"                            
                            value={form.fn}
                        //    onChange={(e) => setField('fn', e.target.value)}
                            onChange={handleInputChange}                            
                            isInvalid={!!errors.fn}
                          />
                       <Form.Control.Feedback type= 'invalid'>
                          {errors.fn}
                        </Form.Control.Feedback>
                      </Col>
                  </Row> 
                                          
                 </Form>



                 <Form className="customform">                    
                  <Form.Label>
                  3.  Choose public key &nbsp;
                      <i class="bi bi-unlock-fill" style={{fontSize: '20px'}}></i> 
                     E. It should not multiply by factors of Φ(n) and also not divide by Φ(n) .
                  </Form.Label>


                {factors && ( 
                <Row className="mb-3"> 
                      <Col xs={3}>
                      <Form.Label>Φ(n) factors are: </Form.Label>
                      </Col>
                      <Col xs={4}>
                      <Form.Control
                            type="text"
                            readOnly
                            value={factors}
                          />
                        </Col>                                
                    </Row> 
                  )}

                  <Row className="mb-3"> 
                      <Col xs={1}>
                      <Form.Label>E: </Form.Label>
                      </Col>
                      <Col xs={4}>
                        <Form.Control
                            type="integer"
                            size="sm"
                            value={form.E}
                            onChange={(e) => setField('E', e.target.value)}
                            isInvalid={!!errors.E}
                          />
                        <Form.Control.Feedback type= 'invalid'>
                          {errors.E}
                        </Form.Control.Feedback>
                      </Col>                                    
                    </Row> 
                                      
                 </Form>



                 <Form className="customform">                    
                  <Form.Label>
                  4.  Choose private key  &nbsp;
                      <i class="bi bi-key-fill"  style={{fontSize: '20px'}} ></i> 
                     D
                  </Form.Label>

                  <Row className="mb-3">
                  <Col xs={5}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>         
                  <span style={{ fontSize: '16px' }}>D:</span>       
                    <Form.Control                          
                         type="number" 
                         value={form.D} 
                       //  onChange={(e) => handleInputChangeD('D', e.target.value)} 
                         onChange={(e) => setField('D', e.target.value)}
                         isInvalid={!!errors.D}
                         placeholder="D" 
                        style={{ width: '70px', padding: '5px', fontSize: '16px', textAlign: 'center', marginLeft: '1px' }} 
                       />                   
                    <span style={{ fontSize: '16px' }}>* {rsaValues.E || 'E'} mod {rsaValues.fn || 'Φ(n)'} = 1</span>
                    </div>
                    <Form.Control.Feedback type= 'invalid'>
                          {errors.D}
                        </Form.Control.Feedback>
                    </Col>
                    {/*                     
                      <Col xs={7}>
                        <Button onClick={onSendClick} variant="outline-info">Send E to Alice</Button>
                     </Col>  
                    */}
                     <Col xs={7}>
                        <Button onClick={handleSubmit} variant="outline-info">Send E to Alice</Button>
                     </Col>  
                 
                    </Row> 
                                      
                 </Form>


            </Card.Body>
          </Card>
         
    

);
}
export default Bob;

//---------------------------------------------CORRECT END--------------------------------------------------
