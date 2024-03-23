import React from 'react';

function Footer(){
  return ( 

 

    <footer className="footer">
        <div className="container-fluid text-center text-md-left bg-dark p-2 text-white">  
          <img
              alt=""
              src= {require('../images/favicon.png')}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           &copy;{new Date().getFullYear()} RSA App - All Rights Reserved
         
        </div> 
    
    </footer>
  

  )
}
export default Footer;