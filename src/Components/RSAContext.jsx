import React, { createContext, useState } from 'react';

export const RSAContext = createContext();

export const RSAProvider = ({ children }) => {
  const [rsaValues, setRSAValues] = useState({
    p: '',
    q: '',
    n: '',
    fn: '',
    E: '',
    D: ''
  });


  return (
    <RSAContext.Provider value={{ rsaValues, setRSAValues }}>
      {children}
    </RSAContext.Provider>
  );
};
