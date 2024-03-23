
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';


function Algorithm(){
   
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
             
          <Button variant="primary" type="submit">
            Submit
          </Button>
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



