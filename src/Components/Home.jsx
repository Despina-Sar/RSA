
import React from 'react'

function Home(){
return(
  
  /*
  <header>
   <div className = "head-text">
    <div className = "head-image">
      <div  className="image-container">
       <img
        alt=""
        src= {require('../images/up_2017_logo_gr.jpg')}
        height="auto" width="70%"        
      />       
      </div>
      </div>
          <h3> Welcome to my Blog </h3>
          <p> FREEEEDOM </p>
      </div>
    </header>
*/

      <header>
      <div className = "head-text">
      <div  className="image-container">
       <img
        alt=""
        src= {require('../images/ceidlogo.PNG')}
        height="auto" width="60%"        
      />   
      </div>
         
          <h3> Welcome to RSA App </h3>
          <p> This app serves an educational purpose, aiming to teach and explain the RSA algorithm 
            to students. Users can navigate through the menu bar, where the Main Algorith tab features a
             real-life example of RSA, while the Educational tab provides step-by-step calculations
              to enhance understanding of the algorithm. Additional educational content, including
               historical context and contemporary applications of RSA, can be found in the top-right 
               menu. Enjoy exploring the app!</p>
      </div>
      <div  className="image-container">
       <img
        alt=""
        src= {require('../images/up_2017_logo_gr.jpg')}
        height="auto" width="50%"        
      />   
      </div>
      <h1>{'\t'} . </h1>
    </header>
    
    
);

}

export default Home;


