import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcherMobile = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLanguage = i18n.language === 'en' ? 'el' : 'en';
    i18n.changeLanguage(nextLanguage);
  };

  // Prevent dropdown from closing when clicking the LanguageSwitcher
  const handleClick = (e) => {
    e.stopPropagation(); // Prevent the dropdown from closing
    toggleLanguage();
  };

  return (
    <button onClick={handleClick} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
    <i className="bi bi-translate" style={{ marginRight: '8px' }}></i>
    {i18n.language === 'en' ? 'Language: EN' : 'Γλώσσα: ΕΛ'}
  </button>
  );
};

export default LanguageSwitcherMobile;


