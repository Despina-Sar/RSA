import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { BrowserRouter as Router } from "react-router-dom";

import "../node_modules/react-bootstrap/dist/react-bootstrap.min";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './i18n'; // Import the i18n configuration



{/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <App />
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

*/}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
