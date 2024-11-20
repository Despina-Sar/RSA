import React from 'react';
 import './index.css';
import NavBar from './Components/NavBar'
//import Footer from './Components/Footer'
import Home from './Components/Home'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import {HashRouter} from "react-router-dom";
import Demo from './Components/Demo';
import Training from './Components/Training';
import Real from './Components/Real';
import EducationalMain from './Components/EducationalMain';
import Test from './Components/Test';
import { Row, Col, Container } from 'react-bootstrap';

{/*


function App() { 
 return (
 

  
<div  className="background-container">
   

     <HashRouter>
        <div className="App">
           <NavBar/>
      
            <div className="content">
            <Test/>
            
              <Routes>
                <Route path="/" element={<Home/>}/> 
                <Route path="/Demo" element={<Demo/>}/>
                <Route path="/EducationalMain" element={<EducationalMain/>}/>
                <Route path="/Training" element={<Training/>}/>
                <Route path="/Real" element={<Real/>}/>       
                <Route path="/Test" element={<Test/>}/>                            
             </Routes>
            </div>
        </div>      
      </HashRouter>
    

     </div>
   

       
  );  
}
export default App;

 */}


function App() { 
  return (
  
 
   
 <div  className="background-container">
      <div className="App">    
           
       
          
           
                <img
                  alt=""
                  src= {require('./images/favicon.png')}
                  width="60"
                  height="60"
                  className="d-inline-block align-top"
                  backgroundcolor= 'rgb(33, 37, 41)'
                />{' '}
                <h2>Home</h2>
             
        
              
              <Test/>
              <EducationalMain/>            
       
          
         </div>      
  
     
 
      </div>
    
 
        
   );  
 }
 export default App;

