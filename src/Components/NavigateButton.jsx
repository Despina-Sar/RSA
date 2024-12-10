import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NavigateButton = ({ to, label }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to); // Navigate to the specified route
  };

  return (
    <Button onClick={handleClick}>
      {label}
    </Button>
  );
};

export default NavigateButton;
