
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col,Button } from 'react-bootstrap';
import { RSAProvider } from './RSAContext.jsx';
import Bob from './Bob';
import BobDecr from './BobDecr.jsx';
import Alice from './Alice';
import EndModal from './EndModal';  // Import Component B




function Training(){


const [isAliceBlurred, setIsAliceBlurred] = useState(true);
const [isBobDecrBlurred, setIsBobDecrBlurred] = useState(true);

const handleBobSendClick = () => {
  console.log('Bob send button clicked');
  setIsAliceBlurred(false);
};

const handleAliceUnlockClick = () => {
  console.log('Alice unlock button clicked');
  setIsBobDecrBlurred(false);
};

 // State to store RSA values
 const [rsaValuess, setRSAValues] = useState({
  p: null,
  q: null,
  n: null,
  fn: null,
  E: null,
  D: null,
});



  // Function to update RSA values from Bob component
  const updateRSAValues = (newValues) => {
    setRSAValues((prevValues) => ({
      ...prevValues,
      ...newValues,
    }));
  };

  const [showModal, setShowModal] = useState(false); // Manage modal state

  const handleWin = () => {
    setShowModal(true); // Trigger the modal
  };

  // Function to refresh the browser
  const refreshPage = () => {
    window.location.reload();
  };
  

return (
  <RSAProvider>
    <Container fluid>
        <Row>
           <Col md={6} style={{  height: '100vh' }}>

                 <Button variant="dark" onClick={refreshPage} style={{ marginLeft: '30px' }}>
                    Restart <i class="bi bi-arrow-clockwise"></i>
                 </Button>


            /
          <Bob onSendClick={handleBobSendClick} rsaValuess={rsaValuess} updateRSAValues={updateRSAValues}/>
          </Col>
          <Col md={6}>
            <Row style={{  height: '40vh' }}>
              <Col>
                /
                <Alice isBlurred={isAliceBlurred} onUnlockClick={handleAliceUnlockClick} rsaValuess={rsaValuess}/>
              </Col>
            </Row>
            <Row style={{ height: '50vh' }}>
              <Col>
              /
                <BobDecr isBlurred={isBobDecrBlurred} rsaValuess={rsaValuess} triggerWin={handleWin}/>
              </Col>
            </Row>
          </Col>
        </Row>
        <EndModal showModal={showModal} />
      </Container>
  </RSAProvider>
);

}
export default Training;
