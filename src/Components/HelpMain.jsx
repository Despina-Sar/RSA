
import React, { useState } from 'react';
import { RSAProvider } from './RSAContext.jsx';
import Help from './Help';
import EndModal from './EndModal';  // Import Component B

import NavBar from './NavBar'


function HelpMain(){


const [isAliceBlurred, setIsAliceBlurred] = useState(true);
const [isBobDecrBlurred, setIsBobDecrBlurred] = useState(true);

const [step, setStep] = useState(-1);
const handleNext = () => {
  setStep((prevStep) => prevStep + 1);
};

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
        
        <NavBar step={step} onNext={handleNext}/>       
        <br/>
          <Help rsaValuess={rsaValuess} updateRSAValues={updateRSAValues}  step={step} />
          
             <EndModal showModal={showModal} />
  </RSAProvider>
);

}
export default HelpMain;


