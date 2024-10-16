import React, { useState } from 'react';
import JSEncrypt from 'jsencrypt';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function Real() {
  const [message, setMessage] = useState('');
  const [publicKey, setPublicKey] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const generateKeys = () => {
    setLoading(true);
    const encrypt = new JSEncrypt({ default_key_size: 2048 });
    encrypt.getKey(() => {
      const publicKey = encrypt.getPublicKey();
      const privateKey = encrypt.getPrivateKey();
      setLoading(false);
      setPublicKey(publicKey);
      setPrivateKey(privateKey);
    });
  };

  const handleEncrypt = () => {
    const encrypt = new JSEncrypt();
    if (publicKey.length === 0) {
      alert("Public Key is empty. Please generate keys to proceed with encryption");
    } else {
      encrypt.setPublicKey(publicKey);
      if (message.length === 0) {
        alert("Input Message is empty. Please enter a message to encrypt");
      } else {
        const encrypted = encrypt.encrypt(message);
        setEncryptedMessage(encrypted);
      }
    }
  };

  const handleDecrypt = () => {
    const decrypt = new JSEncrypt();
    decrypt.setPrivateKey(privateKey);
    if (encryptedMessage.length === 0) {
      alert("Encrypted Message is empty.");
    } else {
      const decrypted = decrypt.decrypt(encryptedMessage);
      setDecryptedMessage(decrypted);
    }
  };

  return (

    <Container>
     <Row>    
       <Col>
   
      <Card border="light" className="customcardReal">
        <Card.Body>
          <Card.Title style={{ fontWeight: 'bold' }}>Key....... Generation</Card.Title>
          <Button onClick={generateKeys} disabled={loading}  variant="outline-info" className="mb-3">
            {loading ? 'Loading...' : 'Δημιουργία Κλειδιών'}
          </Button>

        <Form className="customform mb-3">
              <Form.Label>Public Key:</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={publicKey || ""}
                placeholder="Το Public Key θα δημιουργηθεί αυτόματα"
                readOnly
                style={{
                  background: '#f8f9fa', // Light gray background for better contrast
                  borderRadius: '10px',
                  color: '#333', // Dark text color for visibility
                  padding: '10px',
                  resize: 'none'
                }}
              />
            </Form>
      
            <Form className="customform mb-3">
              <Form.Label>Private Key:</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={privateKey || ""}
                placeholder="Το Private Key θα δημιουργηθεί αυτόματα"
                readOnly
                style={{
                  background: '#f8f9fa', // Light gray background for better contrast
                  borderRadius: '10px',
                  color: '#333', // Dark text color for visibility
                  padding: '10px',
                  resize: 'none'
                }}
              />
            </Form>
         


          <Form className="customform mb-3">
            <Form.Label>Enter Message to encrypt:</Form.Label>
            <Form.Control
              type="text"
             // placeholder="Enter Message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form>

          <Button  onClick={handleEncrypt} variant="outline-info"  className="mb-3">
            Κρυπτογράφιση
          </Button>


          <Form className="customform mb-3">
            <Form.Label>Κρυπτογραφημένο Μήνυμα:</Form.Label>
            <Form.Control
                as="textarea"
                rows={2}
                value={encryptedMessage || ""}
                placeholder="Το κρυπτογραφημένο μήνυμα θα δημιουργηθεί αυτόματα"
                readOnly
                style={{
                  background: '#f8f9fa', // Light gray background for better contrast
                  borderRadius: '10px',
                  color: '#333', // Dark text color for visibility
                  padding: '10px',
                  resize: 'none'
                }}
              />
          </Form>
          

          <Button onClick={handleDecrypt} variant="outline-info"  className="mb-3">
          Αποκρυπτογράφιση
          </Button>


          <Form className="customform mb-3">
            <Form.Label>Αποκρυπτογραφημένο Μήνυμα:</Form.Label>
            <Form.Control
                as="textarea"
                rows={1}
                value={decryptedMessage || ""}
                placeholder="Το αποκρυπτογραφημένο μήνυμα θα δημιουργηθεί αυτόματα"
                readOnly
                style={{
                  background: '#f8f9fa', // Light gray background for better contrast
                  borderRadius: '10px',
                  color: '#333', // Dark text color for visibility
                  padding: '10px',
                  resize: 'none'
                }}
              />
          </Form>

          
        </Card.Body>
      </Card>
       </Col>   
      </Row>
    </Container>
  
  );
}

export default Real;
