
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Form,Button, Row, Col } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Bob(){

//------------------offcanvas-------------
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

//------------------validation----------------
  const[form, setForm] = useState({})
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


  /*
  
  const validateForm = ()=>{
    const{p, q, n , fn}= form
    const newErrors ={}

    //------prime error p--------------- 
    let i, flag = true;
    for (i = 2; i <= p - 1; i++) {
        if (p % i === 0) {
            flag = false;
            break;
        }
    }
    if (flag === false) 
    {
      newErrors.p = 'This is not a prime number'  
      console.log(p + " is not prime");
    } 
    if (p ==='') newErrors.p = 'p empty'   

     //---------prime error q-----------------------
     let j, flag2 = true;
     for (j = 2; j <= q - 1; j++) {
         if (q % j == 0) {
             flag2 = false;
             break;
         }
     }
     if (flag2 == false) 
     {
       newErrors.q = 'This is not a prime number'  
       console.log(q + " is not prime");
     } 
     if (q ==='') newErrors.q = 'q empty'  

        //-------- n error--------------------------

      if (n != p*q) 
      {
        newErrors.n = 'Wrong Calculation'  
        console.log(n + " not p x q");
      } 
  
     //--------fn error-------------------------
     if (fn != ((q-1)*(p-1))) 
         newErrors.fn = 'Wrong fn'  
         console.log(fn + "invalid");



    return newErrors
  
  }



  const handleSubmit = e =>{
    e.preventDefault()
    const formErrors = validateForm()
    if(Object.keys(formErrors).length>0){
      setErrors(formErrors)
    }
    else{console.log("Successfull Submittion");}
    console.log(form)
  }
*/
  


  
//----------handle submit only for p q--------------

  const handleSubmitpq = e =>{
    e.preventDefault()
    const{p, q }= form
    const newErrors ={}
     //-validation for p == prime
     let i, flag = true;
     console.log('q= '+q);

     if (p === undefined || p === '' ){newErrors.p = 'p empty'}
     else{
     for (i = 2; i <= p - 1; i++) {
         if (p % i === 0) {
             flag = false;
             //add break logic
          }
     }
     if (flag === false) 
     {
       newErrors.p = 'This is not a prime number'  
       console.log(p + " is not prime");
     } 
    }
        //validation for q == prime
      let j, flag2 = true;
   
      if (q === undefined || q === '') {newErrors.q = 'q empty'}
      else{  
      for (j = 2; j <= q - 1; j++) {
          if (q % j == 0) {
              flag2 = false;
              //add break logic
           }
      }
      if (flag2 == false) 
      {
        newErrors.q = 'This is not a prime number'  
        console.log(q + " is not prime");
      }
    }     
    if(Object.keys(newErrors).length>0){
      setErrors(newErrors)
    }
    else{console.log("Successfull Submittion");}
    console.log(form)
  }

  
  
//------------handle submit only for n Fn-----------------
  const handleSubmitnFn = e =>{
    e.preventDefault()
    const{p,q,n,fn}= form
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
    else{console.log("Successfull Submittion");}
    console.log(form)
  }



//---------------handle submit only for E-------------
  const handleSubmitE = e =>{
    e.preventDefault()
    let{fn,E}= form
    const newErrors ={}
        if (E === undefined || E === '') {newErrors.E = 'E empty'}
    else{ 
        // Check if E and phi(N) are positive integers
        E=Number(E);
        fn=Number(fn);
        if (!Number.isInteger(E) || !Number.isInteger(fn) || (E <= 1) || (fn <= 1)) 
          { newErrors.E = 'Wrong E' }
        // Check if E is coprime  phi(N)
       // if( gcd(E, fn) != 1){ newErrors.E = 'Wrong E'
       // console.log('not coprime with  phi(N)')}

        // Check if E is coprime with phi(N)
        while (fn !== 0) {
            var temp = fn;
            fn = E % fn;
            E = temp;
        }
       console.log('E= '+E);
       console.log((E != 1));
        if(E != 1){
            newErrors.E = 'Wrong E'
            console.log('inside final error');
        }
    }
 
    if(Object.keys(newErrors).length>0){
      setErrors(newErrors)
      console.log('inside set error');
    }
    else{console.log("Successfull Submittion");}
    console.log(form)
    }


    const handleSubmitD = e =>{
    //calculate pricate key D
    e.preventDefault()
    let{fn,E}= form
    const newErrors ={}
    if (E === undefined || E === '') {newErrors.E = 'E empty'}
    else{ 
      console.log(modInverse(E, fn));
    }
  }

  function modInverse(a, m) {
    // Calculate the modular inverse of 'a' modulo 'm' using the Extended Euclidean Algorithm
    var [x, y, gcd] = extendedEuclidean(a, m);
    if (gcd !== 1) {
        return null; // Modular inverse does not exist
    }
    return (x % m + m) % m;
  }
  

  function extendedEuclidean(a, b) {
    if (b === 0) {
        return [1, 0, a];
    }
    const [x, y, gcd] = extendedEuclidean(b, a % b);
    return [y, x - Math.floor(a / b) * y, gcd];
}





  return ( 
                
          <Card border="info" className="customcard">
            <Card.Body>
              <Card.Title>Bob   
              <Button variant="outline-info" onClick={handleShow}>
                   <i class="bi bi-lightbulb"></i>
                </Button>
              </Card.Title>

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
                    1.  Choose two prime numbers P and Q
                  </Form.Label>

                  <Row className="mb-3">
                      <Col>
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
                     

                      <Col>
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
                     
                      <Col xs={2}>
                        <Button type='submit' onClick={handleSubmitpq} className='my-2' variant="outline-info">
                           Step 2
                        </Button>
                      </Col>                     
                    </Row> 
                                      
                 </Form>


                 <Form className="customform">                    
                  <Form.Label>
                    2. Calculate n and Φ(n)
                  </Form.Label>

                  <Row className="mb-3">
                      <Col>
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
                     

                      <Col>
                        <Form.Label>Φ(n): </Form.Label>
                      </Col>
                      <Col xs={4}>
                      <Form.Control
                            type="number"
                            size="sm"                            
                            value={form.fn}
                            onChange={(e) => setField('fn', e.target.value)}
                            isInvalid={!!errors.fn}
                          />
                       <Form.Control.Feedback type= 'invalid'>
                          {errors.fn}
                        </Form.Control.Feedback>
                      </Col>
                     
                      <Col xs={2}>
                        <Button type='submit' onClick={handleSubmitnFn} className='my-2' variant="outline-info">
                           Step 3
                        </Button>
                      </Col>                     
                    </Row> 
                                      
                 </Form>



                 <Form className="customform">                    
                  <Form.Label>
                  3.  Choose public key &nbsp;
                      <i class="bi bi-unlock-fill" style={{fontSize: '20px'}}></i> 
                     E
                  </Form.Label>

                  <Row className="mb-3">
                      <Col>
                      <Form.Label>E: </Form.Label>
                      </Col>
                      <Col xs={3}>
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
                     
                      <Col xs={8}>
                        <Button type='submit' onClick={handleSubmitE} className='my-2' variant="outline-info">
                           Step 4
                        </Button>
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
                      <Col>
                      <Form.Label>E: </Form.Label>
                      </Col>
                      <Col xs={3}>
                        <Form.Control
                            type="number"
                            size="sm"
                            value={form.D}
                            onChange={(e) => setField('D', e.target.value)}
                            isInvalid={!!errors.D}
                          />
                        <Form.Control.Feedback type= 'invalid'>
                          {errors.D}
                        </Form.Control.Feedback>
                      </Col>                                    
                     
                      <Col xs={8}>
                        <Button type='submit' onClick={handleSubmitD} className='my-2' variant="outline-info">
                           Step 5
                        </Button>
                      </Col>                     
                    </Row> 
                                      
                 </Form>


            </Card.Body>
          </Card>
         
     

  

);
}
export default Bob;

