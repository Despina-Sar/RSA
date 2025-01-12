import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'; // Ensure the CSS is correctly included

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng); // Persist language in localStorage
    setLanguage(lng);
  };

  useEffect(() => {
    const storedLang = localStorage.getItem('i18nextLng') || 'el';
    if (storedLang && storedLang !== i18n.language) {
      i18n.changeLanguage(storedLang); // Set language based on stored value
      setLanguage(storedLang);
    }
  }, [i18n]);

  return (
    <div className="language-toggle-container" style={{ display: 'flex', alignItems: 'center' }}>
      <label className="switch">
        <input
          type="checkbox"
          checked={language === 'en'}
          onChange={() => changeLanguage(language === 'en' ? 'el' : 'en')}
        />
        <span className="slider">
          <span className="slider-text">{language === 'en' ? 'EN' : 'ΕΛ'}</span>
        </span>
      </label>
    </div>
  );
};

export default LanguageSwitcher;
