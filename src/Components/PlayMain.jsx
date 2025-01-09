
import React, {useEffect, useRef, useState} from 'react';
import { RSAProvider } from './RSAContext.jsx';
import Play from './Play';
import EndModal from './EndModal';  // Import Component B
import NavBar from './NavBar'



function PlayMain(){


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
        
        <NavBar where={"Play"}/>      
        <br/>
          <Play rsaValuess={rsaValuess} updateRSAValues={updateRSAValues}/>
          
             <EndModal showModal={showModal} />
  </RSAProvider>
);

}
export default PlayMain;


