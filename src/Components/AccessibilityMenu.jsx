import React, { useState, useEffect } from 'react';
import './AccessibilityMenu.css';

const AccessibilityMenu = () => {
  const [fontSize, setFontSize] = useState('16px');
  const [darkMode, setDarkMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    // Apply font size
    document.documentElement.style.fontSize = fontSize;

    // Apply dark mode
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }

    // Apply high contrast mode
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [fontSize, darkMode, highContrast]);

  return (
    <div className="accessibility-menu">
      <h3>Accessibility Options</h3>
      <div>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div>
        <button onClick={() => setHighContrast(!highContrast)}>
          {highContrast ? 'Disable High Contrast' : 'Enable High Contrast'}
        </button>
      </div>
      <div>
        <label>Font Size:</label>
        <button onClick={() => setFontSize('14px')}>A-</button>
        <button onClick={() => setFontSize('16px')}>A</button>
        <button onClick={() => setFontSize('18px')}>A+</button>
      </div>
    </div>
  );
};

export default AccessibilityMenu;
