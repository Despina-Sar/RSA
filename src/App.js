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
import background from "./pp.jpg";



function App() { 
 return (
 <div  style={{ backgroundImage: `url(${background})`,backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh'}}> 
    {/* <Router>*/}

     <HashRouter>
        <div className="App">
          <NavBar/>
            <div className="content">
              <Routes>
                <Route path="/" element={<Home/>}/> 
                <Route path="/Demo" element={<Demo/>}/>
                <Route path="/Training" element={<Training/>}/>
                <Route path="/Real" element={<Real/>}/>                            
             </Routes>
            </div>
        </div>       
   {/*   </Router>  */}
   </HashRouter>

  </div>

       
  );
  
}

export default App;


