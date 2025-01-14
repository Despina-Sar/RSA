import React, { useState, useEffect } from 'react';

const RandomTest = ({ encryptedMessage, updateSelectedMessage, isMessageSet, index }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Only generate a random message if it hasn't been set already
    if (!isMessageSet) {
      const randomValue = Math.random();
      let selectedMessage;

      if (randomValue < 0.5) {
        selectedMessage = encryptedMessage;
      } else {
        selectedMessage = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
      }

      setMessage(selectedMessage);
      updateSelectedMessage(selectedMessage); // Update the parent component with the selected message
    }
  }, [encryptedMessage, updateSelectedMessage, isMessageSet, index]);

  return <div>{message}</div>;
};

export default RandomTest;
