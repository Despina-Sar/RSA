import React from 'react';
 import './index.css';
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Educational from './Components/Educational';
import Algorithm from './Components/Algorithm';
import Why from './Components/Pages/Why';
import Where from './Components/Pages/Where';
import Security from './Components/Pages/Security';
import RSAHistory from './Components/Pages/RSAHistory';
import background from "./pp.jpg";





/*
------------------------- Register RSA ---------------+
let App = () => {
return(
<>
  <Navbar bg="dark" expand="sm" variant="dark">
   <Container>
     <Navbar.Brand> <h4>RSA App</h4></Navbar.Brand>
   </Container>
  </Navbar>
  <Register/>
</>


);
}
export default App;
*/


/* ------------------Correct------------------ */

function App() {

  
 return (
 <div  style={{ backgroundImage: `url(${background})`,backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh'}}> 
     <Router>
        <div className="App">
          <NavBar/>
            <div className="content">
              <Routes>
                <Route path="/" element={<Home/>}/> 
                <Route path="/Educational" element={<Educational/>}/> 
                <Route path="/Algorithm" element={<Algorithm/>}/> 
               
                <Route path="/Why" element={<Why/>}/>     
                <Route path="/Where" element={<Where/>}/>     
                <Route path="/Security" element={<Security/>}/>     
                <Route path="/RSAHistory" element={<RSAHistory/>}/>    
             </Routes>
            </div>
        </div>
       
     </Router>
      <Footer/>
  </div>

       
  );
  /*
  return (
    <div
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
     // backgroundPosition: 'center',
      height: '100vh', // Set height to fill the entire viewport
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white', // Add text color for better contrast
      fontSize: '24px', // Add font size for better visibility
    }}
  >
    <Router>
          <div className="App">
            <NavBar/>
              <div className="content">
                <Routes>
                  <Route path="/" element={<Home/>}/> 
                  <Route path="/Algorithm" element={<Algorithm/>}/> 
                  <Route path="/Example2" element={<Example2/>}/> 
                 
                  <Route path="/Why" element={<Why/>}/>     
                  <Route path="/Where" element={<Where/>}/>     
                  <Route path="/Security" element={<Security/>}/>     
                  <Route path="/RSAHistory" element={<RSAHistory/>}/>    
               </Routes>
              </div>
          </div>
         
       </Router>
       <Footer/>
  </div>
  );
  */
}

export default App;


