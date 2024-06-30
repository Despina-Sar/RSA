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
/*

import React, { createContext, useState } from 'react';

export const RSAContext = createContext();

export const R
SAProvider = ({ children }) => {
  const [rsaValues, setRSAValues] = useState({ E: 65537, n: 3233 }); // Example values

  return (
    <RSAContext.Provider value={{ rsaValues, setRSAValues }}>
      {children}
    </RSAContext.Provider>
  );
};
*/