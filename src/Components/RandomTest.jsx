import React, { useState, useEffect } from 'react';

const RandomTest = ({ encryptedMessage, updateSelectedMessage, isMessageSet, index }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Only generate a random message if it hasn't been set already
    if (!isMessageSet) {
      const randomValue = Math.random();
      console.log("Card's "+ (index+6)+" correct answer is: " + encryptedMessage+ ".");
      let selectedMessage;

      if (randomValue < 0.5) {
        
        selectedMessage = encryptedMessage;
        console.log("User see on card the correct value ->" + encryptedMessage+ ".");
      } else {
        selectedMessage = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
        console.log("User see on card wrong value ->" + selectedMessage+ ".");
      }

      setMessage(selectedMessage);
      updateSelectedMessage(selectedMessage); // Update  parent component with the selected message
    }
  }, [encryptedMessage, updateSelectedMessage, isMessageSet, index]);

  return <div>{message}</div>;
};

export default RandomTest;
