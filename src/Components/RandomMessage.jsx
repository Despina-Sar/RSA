import React, { useState, useEffect } from 'react';

const RandomMessage = ({ encryptedMessage, updateSelectedMessage, isMessageSet }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check if message has already been set
    
    if (!isMessageSet) {
      // Generate a random number between 0 and 1
      const randomValue = Math.random();

      let selectedMessage;
      if (randomValue < 0.5) {
        selectedMessage = encryptedMessage;
      } else {
        selectedMessage = Math.floor(Math.random() * (80 - 10 + 1)) + 10;
      }

      setMessage(selectedMessage);
      updateSelectedMessage(selectedMessage); // Update the parent component with the selected message
    } 
   
  }, [encryptedMessage, updateSelectedMessage, isMessageSet]);

  return message;
};

export default RandomMessage;
