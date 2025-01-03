import React, { useState } from 'react';
import styles from './CardCarousel.module.css'; // Import the CSS Module
import useIsMobile from './TestuseIsMobile';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import {Modal,Button} from 'react-bootstrap';
import NavBar from './NavBar'

const CardCarousel = () => {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [currentCard, setCurrentCard] = useState(0);
  const isMobile = useIsMobile();
  const navigate = useNavigate(); 


  // Functions for performing operations
  const getSum = () => parseInt(x) + parseInt(y);
  const getProduct = () => parseInt(x) * parseInt(y);
  const getDifference = () => parseInt(x) - parseInt(y);

  // Handler for next and back buttons
  const handleNext = () => {
    if (currentCard < 3) setCurrentCard(currentCard + 1);
  };

  const handleBack = () => {
    if (currentCard > 0) setCurrentCard(currentCard - 1);
  };

  const HomeRedirection = () => {
    navigate('/'); // Navigate to the '/' route when button is clicked
  };
  

  return (
  
      <div className={styles['carousel-container']}>
      

        {/*
        <Button onClick={HomeRedirection}  className={styles['top-right-btn']}
          variant="dark"    
        >
         Αρχική
         </Button>

     Card 1: Input */}
        <div
          className={`${styles.card} ${
            currentCard === 0 ? styles.show : styles.hide
          }`}
        >
          {currentCard === 0 && (
            <>
              <h2>Enter values for x and y</h2>
              <input
                type="number"
                placeholder="x"
                value={x}
                onChange={(e) => setX(e.target.value)}
              />
              <input
                type="number"
                placeholder="y"
                value={y}
                onChange={(e) => setY(e.target.value)}
              />
              <div className={styles['button-container']}>
                <button onClick={handleNext}>Next</button>
              </div>
            </>
          )}
        </div>
  
        {/* Card 2: Sum */}
        <div
          className={`${styles.card} ${
            currentCard === 1 ? styles.show : styles.hide
          }`}
        >
          {currentCard === 1 && (
            <>
              <h2>Sum of x and y</h2>
              <p>{getSum()}</p>
              <div className={styles['button-container']}>
                <button onClick={handleBack}>Back</button>
                <button onClick={handleNext}>Next</button>
              </div>
            </>
          )}
        </div>
  
        {/* Card 3: Product */}
        <div
          className={`${styles.card} ${
            currentCard === 2 ? styles.show : styles.hide
          }`}
        >
          {currentCard === 2 && (
            <>
              <h2>Product of x and y</h2>
              <p>{getProduct()}</p>
              <div className={styles['button-container']}>
                <button onClick={handleBack}>Back</button>
                <button onClick={handleNext}>Next</button>
              </div>
            </>
          )}
        </div>
  
        {/* Card 4: Difference */}
        <div
          className={`${styles.card} ${
            currentCard === 3 ? styles.show : styles.hide
          }`}
        >
          {currentCard === 3 && (
            <>
              <h2>Difference of x and y</h2>
              <p>{getDifference()}</p>
              <div className={styles['button-container']}>
                <button onClick={handleBack}>Back</button>
                <button onClick={handleNext}>Finish</button>
              </div>
            </>
          )}
        </div>
      </div>
 
    );
  };
  

export default CardCarousel;