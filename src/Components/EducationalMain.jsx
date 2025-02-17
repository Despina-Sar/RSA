
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col,Button } from 'react-bootstrap';
import { RSAProvider } from './RSAContext.jsx';
import Educational from './Educational';
import EndModal from './EndModal';  // Import Component B




function EducationalMain(){


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
        
               
          <Educational rsaValuess={rsaValuess} updateRSAValues={updateRSAValues}/>
          
             <EndModal showModal={showModal} />
  </RSAProvider>
);

}
export default EducationalMain;
{/*



const EducationalMain = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Welcome to Component One</h2>
      <p>This is the content for Component One.</p>
    </div>
  );
};

export default EducationalMain;

*/}