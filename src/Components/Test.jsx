import React, { useState } from 'react';

const Test = () => {
  // Boy's state
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [z, setZ] = useState('');
  const [isZCorrect, setIsZCorrect] = useState(false);

  // Girl's state
  const [p, setP] = useState('');
  const [f, setF] = useState('');
  const [isFCorrect, setIsFCorrect] = useState(false);

  // Handle input changes for the boy's inputs
  const handleInputChange = (e, setter) => {
    const value = e.target.value;
    setter(value);
    setIsZCorrect(false); // Reset validation on input change
  };

  // Handle the boy sending z to the girl
  const handleSendZ = () => {
    setIsZCorrect(Number(z) === Number(x) + Number(y));
  };

  // Handle input change for girl's inputs and reset validation
  const handleGirlInputChange = (e, setter) => {
    const value = e.target.value;
    setter(value);
    setIsFCorrect(false);
  };

  // Handle the girl sending p back to the boy if f is correct
  const handleSendP = () => {
    setIsFCorrect(Number(f) === Number(z) + Number(p));
  };

  return (
    <div style={styles.pageContainer}>
      {/* Boy's card with inputs and z calculation */}
      <div style={styles.card}>
        <div style={styles.iconContainer}>👦</div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>x</label>
          <input
            type="number"
            value={x}
            onChange={(e) => handleInputChange(e, setX)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>y</label>
          <input
            type="number"
            value={y}
            onChange={(e) => handleInputChange(e, setY)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>z (x + y)</label>
          <input
            type="number"
            value={z}
            onChange={(e) => handleInputChange(e, setZ)}
            style={styles.input}
          />
        </div>
        <button onClick={handleSendZ} style={styles.button}>
          Send z
        </button>
      </div>

      {/* Arrows column with two arrows, showing values */}
      <div style={styles.arrowsColumn}>
        {/* Arrow showing z sent from boy to girl */}
        {isZCorrect && (
          <div style={styles.arrowContainer}>
            <div style={styles.arrowRight}>
              ➡️ <span style={styles.valueLabel}>z = {z}</span>
            </div>
          </div>
        )}
        {/* Arrow showing p sent from girl back to boy */}
        {isFCorrect && (
          <div style={styles.arrowContainer}>
            <div style={styles.arrowLeft}>
              ⬅️ <span style={styles.valueLabel}>p = {p}</span>
            </div>
          </div>
        )}
      </div>

      {/* Girl's card with inputs and f calculation */}
      <div style={styles.card}>
        <div style={styles.iconContainer}>👧</div>
        <div style={styles.receivedMessage}>
          {isZCorrect ? `Received z = ${z}` : "Waiting for z..."}
        </div>
        {isZCorrect && (
          <>
            <div style={styles.inputGroup}>
              <label style={styles.label}>p</label>
              <input
                type="number"
                value={p}
                onChange={(e) => handleGirlInputChange(e, setP)}
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>f (z + p)</label>
              <input
                type="number"
                value={f}
                onChange={(e) => handleGirlInputChange(e, setF)}
                style={styles.input}
              />
            </div>
            <button onClick={handleSendP} style={styles.button}>
              Send p
            </button>
          </>
        )}
      </div>
    </div>
  );
};

// CSS styles for the updated layout
const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f4f8'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    width: '200px',
    textAlign: 'center'
  },
  iconContainer: {
    fontSize: '60px',
    marginBottom: '10px'
  },
  inputGroup: {
    margin: '10px 0',
    width: '100%'
  },
  label: {
    fontSize: '12px',
    color: '#777',
    position: 'relative',
    top: '-10px',
    backgroundColor: '#fff',
    padding: '0 4px'
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '16px',
    textAlign: 'center'
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  },
  arrowsColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowContainer: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '50px',
    marginTop: '20px'
  },
  arrowRight: {
    color: '#4CAF50',
    display: 'flex',
    alignItems: 'center'
  },
  arrowLeft: {
    color: '#FF5722',
    display: 'flex',
    alignItems: 'center'
  },
  valueLabel: {
    marginLeft: '10px',
    fontSize: '20px',
    color: '#333'
  },
  receivedMessage: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#4CAF50'
  }
};

export default Test;
