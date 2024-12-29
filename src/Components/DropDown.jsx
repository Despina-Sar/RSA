import React, { useState } from 'react';
import './DropDown.css'; // Import the updated CSS for styling

const DropDown = () => {
  const clarifications = [
    { id: 1, title: "Clarification 1", content: "This is the content for clarification 1." },
    { id: 2, title: "Clarification 2", content: "This is the content for clarification 2." },
    { id: 3, title: "Clarification 3", content: "This is the content for clarification 3." }
  ];

  const [isOpen, setIsOpen] = useState(false); // For dropdown visibility
  const [selectedContent, setSelectedContent] = useState(null); // For displaying selected content
  const [isDarkTheme, setIsDarkTheme] = useState(true); // For toggling themes

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (content) => {
    setSelectedContent(content);
    setIsOpen(false); // Close dropdown after selection
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme); // Toggle between dark and light theme
  };

  return (
    <div className={`clarification-dropdown ${isDarkTheme ? 'dark' : 'light'}`}>
      <button className="check-btn" onClick={toggleDropdown}>
        Check
      </button>

      <button className="theme-toggle-btn" onClick={toggleTheme}>
        Toggle Theme
      </button>

      {isOpen && (
        <div className="dropdown-list">
          {clarifications.map(item => (
            <button 
              key={item.id} 
              className="dropdown-item" 
              onClick={() => handleItemClick(item.content)}
            >
              {item.title}
            </button>
          ))}
        </div>
      )}

      {selectedContent && (
        <div className="content">
          <p>{selectedContent}</p>
        </div>
      )}
    </div>
  );
};

export default DropDown;
