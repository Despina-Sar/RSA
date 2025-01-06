
import React from 'react'

function RSAHistory(){



  const validateE = (fn) => {
 
    // Μετατροπή των τιμών σε αριθμούς
    let Einput = Number(form.E);
    //fn = Number(form.fn);
  
    // Έλεγχος αν το πεδίο E είναι κενό
    if (Einput === undefined || Einput === '') {
    //  newErrors.E = 'Το πεδίο E είναι κενό. Παρακαλώ εισάγετε έναν αριθμό.';
      console.log('Validation Error: Το πεδίο E είναι κενό.');
      return;
    }
  
    // Έλεγχος ότι E και fn είναι θετικοί ακέραιοι μεγαλύτεροι του 1
    if (!Number.isInteger(Einput) || Einput <= 1) {
      //newErrors.E = 'Το E πρέπει να είναι θετικός ακέραιος μεγαλύτερος του 1.';
      console.log('Validation Error: Το E δεν είναι θετικός ακέραιος μεγαλύτερος του 1. E:', Einput);
      return;
    }
  
  
    if (!Number.isInteger(fn) || fn <= 1) {
      //newErrors.E = 'Το φ(n) (fn) πρέπει να είναι θετικός ακέραιος μεγαλύτερος του 1.';
      console.log('Validation Error: Το φ(n) (fn) δεν είναι θετικός ακέραιος μεγαλύτερος του 1. fn:', fn);
      return;
    }
  
    // Έλεγχος αν το E είναι πρώτος με το φ(n)
    let a = Einput, b = fn;
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    console.log('Αποτέλεσμα του GCD για το E και το φ(n):', a);
  
    if (a !== 1) {
     // newErrors.E = Number(E)+ ' δεν είναι "σχετικά πρώτο" με το '+ form.fn+' .Επιλέξτε αριθμό που να μην έχει κοινούς παράγοντες με το '+ fn+' εκτός από το 1.';
      console.log('Validation Error: Το E δεν είναι κατάλληλο δημόσιο κλειδί, διότι έχει κοινούς διαιρέτες με το φ(n). GCD:', a);
    } else {
      //delete newErrors.E; // Αφαίρεση του μηνύματος λάθους εάν όλα είναι σωστά
      console.log('Success: Το E είναι έγκυρο δημόσιο κλειδί.');
    }
  };


























return(
    <>
     <h4>History</h4>
     <p>
     RSA Cryptography is the world’s most widely used public-key cryptography method for securing 
     communication on the Internet. Instrumental to the growth of e-commerce, RSA is used in almost
      all Internet-based transactions to safeguard sensitive data such as credit card numbers.
     </p>

     <p>
     Introduced in 1977 by MIT colleagues Ron Rivest, Adi Shamir, and Leonard Adleman, RSA—its name
     derived from the initials of their surnames—is a specific type of public-key cryptography, or PKC, 
     innovated in 1976 by Whitfield Diffie, Martin Hellman,and Ralph Merkle. Intrigued by their research,
      Rivest, with Shamir and Adleman, developed a cryptosystem to enable secure message encoding and decoding 
      between communicating parties. As Rivest and Shamir worked to develop an unbreakable key system, Adleman 
      tried to break each one, doing so 42 times before the trio achieved success.
     </p>

     <p>
     Unlike previous methods requiring securely-exchanged keys to encrypt and decrypt messages, RSA provided
      a method for encryption and decryption without both parties needing a shared secret key. RSA could also
       mark messages with a digital signature, and allowed originators to create messages intelligible only to
        intended recipients; third parties intercepting such transmissions would find them indecipherable.
     </p>

     <h2>Clarifications</h2>
      <div className="dropdown">
        {clarifications.map(item => (
          <div key={item.id} className="dropdown-item">
            <button
              className="dropdown-title"
              onClick={() => toggleClarification(item.id)}
            >
              {item.title}
            </button>
            {selectedClarification === item.id && (
              <div className="dropdown-content">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
);

}

export default RSAHistory;



