
import React from 'react'

function Home(){
return(
  
      <header style={{ display: 'block', textAlign: 'center', fontSize: '15px', maxWidth: '95%', marginTop: '60px'}}>
      <div className = "head-text">
           
          <h5> Καλώς ήρθατε στην Εφαρμογή RSA   </h5>
          <p>                
              Η εφαρμογή αυτή έχει καθαρά εκπαιδευτικό χαρακτήρα, με κύριο στόχο τη διδασκαλία και την εξήγηση του αλγόριθμου RSA στους φοιτητές.
              Οι χρήστες μπορούν να πλοηγηθούν εύκολα μέσω της γραμμής μενού. Στην ενότητα "Demo" θα βρείτε μια αναλυτική παρουσίαση και επεξήγηση του αλγόριθμου, 
              ενώ η καρτέλα "Training" προσφέρει βήμα προς βήμα υπολογισμούς για την πληρέστερη κατανόησή του. 
              Τέλος, η καρτέλα "Real Example" περιλαμβάνει ένα παράδειγμα του RSA σε πραγματική εφαρμογή, δίνοντας τη δυνατότητα στους χρήστες να δουν τον αλγόριθμο σε δράση.
          </p>
        <p> Καλή εξερεύνηση!</p>
      </div>

      <div  className="image-container">
       <img
        alt=""
        src= {require('../images/ceidlogo.PNG')}
        height="auto" width="35%"        
      />   
      </div>

      <div  className="image-container">
       <img
        alt=""
        src= {require('../images/up_2017_logo_gr_grey.jpg')}
        height="auto" width="20%"        
      />   
      </div>

    
   

      
    </header>
    
    
);

}

export default Home;


