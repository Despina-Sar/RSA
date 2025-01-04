
import React, { useState,useContext,useRef,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import {Modal,Form,Button, Row, Col, Navbar } from 'react-bootstrap';
import { RSAContext } from './RSAContext';
import useIsMobile from './TestuseIsMobile'; // Import the custom hook
import Confetti from 'react-confetti';
import './Play.css';
import Test from './Test.jsx';
import NavigateButton from './NavigateButton.jsx';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom




const Help = ({rsaValuess, updateRSAValues ,step }) => {
  // Boy's state
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [z, setZ] = useState('');
  const isMobile = useIsMobile();
  //const [step, setStep] = useState(0); // to track the step

  // Girl's state
  const [p, setP] = useState('');
  const [f, setF] = useState('');
  const [isFCorrect, setIsFCorrect] = useState(false);

  const refreshPage = () => {
    window.location.reload();
  };

  // Handle the boy sending z to the girl
  const handleSendZ = () => {
    setIsZCorrect(Number(z) === Number(x) + Number(y));
  };

  // Handle input change for girl's inputs and reset validation
  const handleGirlInputChange = (e, setter) => {
    const value = e.target.value;
    setter(value);
    setIsFCorrect(false);
  };

  // Handle the girl sending p back to the boy if f is correct
  const handleSendP = () => {
    setIsFCorrect(Number(f) === Number(z) + Number(p));
  };



  //-----------------------------   ME   -----------------------------------
  //const [locked, setLocked] = useState(false); 
  const { rsaValues, setRSAValues } = useContext(RSAContext);
  const [form, setForm] = useState(rsaValues);
  const[errors, setErrors] = useState({})
  const [showModalH, setShowModalH] = useState(false); 
  const [showModalB, setShowModalB] = useState(false); 
  const [showModalA, setShowModalA] = useState(false); 
  const [showModalE, setShowModalE] = useState(false); // Manage modal state
  const [factors, setFactors] = useState('');
  const [isZCorrect, setIsZCorrect] = useState(false);                              //from 7.11



  const [error, setError] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);
  const target = useRef(null);
  const [randomNumber, setRandomNumber] = useState(null);



  // Function to close the modal
  const handleCloseModB = () => setShowModalB(false);
  const handleCloseModA = () => setShowModalA(false);
  const handleCloseModH = () => setShowModalH(false);


  useEffect(() => {
    // Ελέγχουμε αν το popup έχει ήδη εμφανιστεί σε αυτή τη συνεδρία
    const hasSeenModal = sessionStorage.getItem("hasSeenModal");

    if (!hasSeenModal) {
      setShowModalH(true); // Εμφανίζουμε το modal
      sessionStorage.setItem("hasSeenModal", "true"); // Καταγράφουμε ότι εμφανίστηκε
    }
  }, []); // Τρέχει μόνο όταν φορτώνεται η σελίδα


    // Handle input changes for the bobs's inputs                                   //from 7.11
    const handleInputChange2 = (e, setter) => {
      const value = e.target.value;
      setter(value);
      setIsZCorrect(false); // Reset validation on input change 
    };
   
    const generateRandomNumber = () => {
        const number = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
        console.log("Random num is" +number);
        return number;
      };

    const PREFIX_MAP = {
      fn: "Φ(n)",
      p: "P",
      q: "Q",
      n: "n",
      E: "E",
      D: "D",
      CT: "CT",
      M: "M"

  };


  const setField = (field, value) => {
   // if (locked) return;

    // Get the prefix for this field from the PREFIX_MAP, default to an empty string if not found
    const prefix = PREFIX_MAP[field] || "";


    // Remove the prefix from the value if it exists to avoid duplicate prefixes
      console.log(value);
      console.log(typeof value);

      const  rawValue = value.startsWith(prefix) ? value.slice(prefix.length + 1) : value;  // Account for the '=' character


    setForm(prevForm => {
        const updatedForm = { ...prevForm, [field]: rawValue };

        // Validate field on each change
        validateField(field, rawValue, updatedForm);

        return updatedForm;
    });

    // Update RSA values in context
    setRSAValues(prev => ({
        ...prev,
        [field]: rawValue,
        
    }));
    console.log(rawValue);
    
    // Clear errors for the field if valid
    if (!!errors[field]) {
        setErrors(prevErrors => ({
            ...prevErrors,
            [field]: null,
        }));
    }
};


React.useEffect(() => {
  if (step === 0) {
    handleCalculatePrimeP(); // Set random value for x
} else if (step === 1) {
    handleCalculatePrimeQ(); // Set random value for y
} else if (step === 2) {
    calculateE(form.fn);
} else if (step === 3) {
   const varE= calculateD(form.E, form.fn);
   const formattedValue = `${PREFIX_MAP['D']}=${varE}`; 
   setField('D', formattedValue);
}   else if (step === 4) {
    handleSubmit();
}
else if (step === 5){
   const varM=generateRandomNumber();
   const formattedValueM = `${PREFIX_MAP['M']}=${varM}`; 
   setField('M',formattedValueM);
}
else if (step === 6){
    const varCT= rsaEncrypt(form.M , form.E , form.n);        
    const formattedValueCT = `${PREFIX_MAP['CT']}=${varCT}`; 
    setField('CT',formattedValueCT);
 }
 else if (step === 7){
    handleButtonClick()
 }
  // Add other steps as needed
}, [step]);


{/*
const handleNext = () => {
    if (step === 0) {
        handleCalculatePrimeP(); // Set random value for x
    } else if (step === 1) {
        handleCalculatePrimeQ(); // Set random value for y
    } else if (step === 2) {
        calculateE(form.fn);
    } else if (step === 3) {
       const varE= calculateD(form.E, form.fn);
       const formattedValue = `${PREFIX_MAP['D']}=${varE}`; 
       setField('D', formattedValue);
    }   else if (step === 4) {
        handleSubmit();
    }
    else if (step === 5){
       const varM=generateRandomNumber();
       const formattedValueM = `${PREFIX_MAP['M']}=${varM}`; 
       setField('M',formattedValueM);
    }
    else if (step === 6){
        const varCT= rsaEncrypt(form.M , form.E , form.n);        
        const formattedValueCT = `${PREFIX_MAP['CT']}=${varCT}`; 
        setField('CT',formattedValueCT);
     }
     else if (step === 7){
        handleButtonClick()
     }
    
    setStep(step + 1); // Move to the next step
  };
*/}


const validateField = (field, value, updatedForm) => {
  const{p,q,n,fn,E,D,CT,M}= updatedForm;
  let newErrors = { ...errors }; // Start with current errors
  console.log(newErrors);
  switch (field) {
    case 'p':
      console.log("before revalidation of P: "+p);
      validateP(field, value,updatedForm,newErrors);
      if(q !== undefined && q !== ''){setNFn(p,q);}
      if (E !== undefined && E !== '') { console.log("Entered ValidateE");validateE('E', E, updatedForm,newErrors);}
      if (D !== undefined && D !== '') { console.log("Entered ValidateD");validateD('D', D, updatedForm,newErrors);}
      if (CT !== undefined && CT !== '') { console.log("Entered ValidateCT");handleSubmitCT('CT', CT, updatedForm,newErrors);}
      if (M !== undefined && M !== '') { console.log("Entered ValidateM");handleSubmitM('M', M, updatedForm,newErrors);}
      setErrors(newErrors);
       break;
    case 'q':
      validateQ(field, value,updatedForm,newErrors);
      if(p !== undefined && p !== ''){setNFn(p,q);}
      if (E !== undefined && E !== '') { console.log("Entered ValidateE");validateE('E', E, updatedForm,newErrors);}
      if (D !== undefined && D !== '') { console.log("Entered ValidateD");validateD('D', D, updatedForm,newErrors);}
      if (CT !== undefined && CT !== '') { console.log("Entered ValidateCT");handleSubmitCT('CT', CT, updatedForm,newErrors);}
      if (M !== undefined && M !== '') { console.log("Entered ValidateM");handleSubmitM('M', M, updatedForm,newErrors);}
    // Finally, update the errors state once with all accumulated errors
     setErrors(newErrors);
        break;
    case 'E':
       validateE(field, value, updatedForm,newErrors);
       if (D !== undefined && D !== '') { console.log("Entered ValidateD");validateD('D', D, updatedForm,newErrors);}
       if (CT !== undefined && CT !== '') { console.log("Entered ValidateCT");handleSubmitCT('CT', CT, updatedForm,newErrors);}
       if (M !== undefined && M !== '') { console.log("Entered ValidateM");handleSubmitM('M', M, updatedForm,newErrors);}
      setErrors(newErrors);
      break;
    case 'D':
      validateD(field, value, updatedForm,newErrors);
       if (E !== undefined && E !== '') { console.log("Entered ValidateE");validateE('E', E, updatedForm,newErrors);}
      if (CT !== undefined && CT !== '') { console.log("Entered ValidateCT");handleSubmitCT('CT', CT, updatedForm,newErrors);}
      if (M !== undefined && M !== '') { console.log("Entered ValidateM");handleSubmitM('M', M, updatedForm,newErrors);}
      setErrors(newErrors);
      break;
    case 'M':
      console.log("Entered M");
      handleSubmitM(field, value,updatedForm,newErrors);
      setErrors(newErrors);
      break;
    case 'CT':
      handleSubmitCT(field, value,updatedForm,newErrors);
      if (E !== undefined && E !== '') { console.log("Entered ValidateE");validateE('E', E, updatedForm,newErrors);}
      if (D !== undefined && D !== '') { console.log("Entered ValidateD");validateD('D', D, updatedForm,newErrors);}
      if (M !== undefined && M !== '') { console.log("Entered ValidateM");handleSubmitM('M', M, updatedForm,newErrors);}
      setErrors(newErrors);
      break;
    default:
      break;
  }
};





//-----------------------------------handle submit only for P-------------------------------------------

const validateP = (field, value, form,newErrors) =>{
  const{p}= form
  console.log('P: '+p+' is prime: '+isPrime(p));
   //-validation for p == prime
   if (p === undefined || p === '' ) {newErrors.p = 'Το πεδίο είναι κενό'}
   else{
    if (!(/^\d*$/.test(p))) { // Allows only digits
       newErrors.p = 'Δεν επιτρέπονται αλφαριθμητικοί χαρακτήρες'; }

        else{
          const numericValue = Number(p);
          if (numericValue <= 0 || numericValue >= 100) {
            newErrors.p = 'Επιτρέπονται μόνο αριθμοί μεταξύ 0 - 100';
           }
           else {
                 if (!isPrime(p)) { newErrors.p = 'Το '+p+' δεν είναι πρώτος αριθμός';}   
                else {
                    delete newErrors.p; // Clear error if validation passes
                    console.log('tetttt' + (!form.q === undefined && !form.q === '') );
                    console.log(form.q);
                    if (form.q !== undefined && form.q !== '' ){ handleInputChange('fn',(form.p -1) * (form.q-1)); }
                   
                    console.log('deleted error');  
                    setErrors(newErrors);      
                 }  
            }
      }
   }
  }




 //---------------------------------handle submit only for Q --------------------------------------------
 const validateQ = (field, value, form,newErrors) =>{
  const{ q }= form
  console.log("Entered Q "+q);
  console.log(isPrime(q));
  
  //validation for q == prime
    if (q === undefined || q === '') {newErrors.q = 'Το πεδίο είναι κενό'}
    else{ 

      if (/^\d*$/.test(q)) { // Allows only digits
        const numericValue = Number(q);
        if (numericValue >= 0 && numericValue <= 100) {

           if (!isPrime(q)) { newErrors.q = 'Το '+q+' δεν είναι πρώτος αριθμός';}   
           else {
            delete newErrors.q; // Clear error if validation passes

            if (form.p !== undefined && form.p !== '' ){ handleInputChange('fn',(form.p -1) * (form.q-1)); }      
        }  
        }else 
          {  newErrors.q = 'Επιτρέπονται μόνο αριθμοί μεταξύ 0 - 100';
            }
      }
      else 
          {  newErrors.q = 'Δεν επιτρέπονται αλφαριθμητικοί χαρακτήρες';
            }
  }          
}



//----------------------------------------handle submit only for E---------------------------------------------

const setNFn = (valueP,valueQ) => {
    console.log('Entered setnfnf');
    let valueN,valueFn;

    if (valueP !== undefined && valueP !== '' && valueQ !== undefined && valueQ !== '')
    {
        valueN = valueP * valueQ;
        valueFn = (valueP-1) *(valueQ-1);
        setField('n', String(valueN));
        setField('fn', String(valueFn));
        console.log('N: '+form.n+" fn: "+form.fn);
    }
   
    return ;
  };

const validateE = (field, value, form, newErrors) => {
  let { fn, E } = form;
  
  // Μετατροπή των τιμών σε αριθμούς
  let Einput = Number(form.E);
  fn = Number(form.fn);

  // Έλεγχος αν το πεδίο E είναι κενό
  if (Einput === undefined || Einput === '') {
    newErrors.E = 'Το πεδίο E είναι κενό. Παρακαλώ εισάγετε έναν αριθμό.';
    console.log('Validation Error: Το πεδίο E είναι κενό.');
    return;
  }

  // Έλεγχος ότι E και fn είναι θετικοί ακέραιοι μεγαλύτεροι του 1
  if (!Number.isInteger(Einput) || Einput <= 1) {
    newErrors.E = 'Το E πρέπει να είναι θετικός ακέραιος μεγαλύτερος του 1.';
    console.log('Validation Error: Το E δεν είναι θετικός ακέραιος μεγαλύτερος του 1. E:', Einput);
    return;
  }


  if (!Number.isInteger(fn) || fn <= 1) {
    newErrors.E = 'Το φ(n) (fn) πρέπει να είναι θετικός ακέραιος μεγαλύτερος του 1.';
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
    newErrors.E = Number(E)+ ' δεν είναι "σχετικά πρώτο" με το '+ fn+' .Επιλέξτε αριθμό που να μην έχει κοινούς παράγοντες με το '+ fn+' εκτός από το 1.';
    console.log('Validation Error: Το E δεν είναι κατάλληλο δημόσιο κλειδί, διότι έχει κοινούς διαιρέτες με το φ(n). GCD:', a);
  } else {
    delete newErrors.E; // Αφαίρεση του μηνύματος λάθους εάν όλα είναι σωστά
    console.log('Success: Το E είναι έγκυρο δημόσιο κλειδί.');
  }
};


const validateD = (field, value, form, newErrors) => {
  const D = Number(value);
  const E = Number(form.E);
  const fn = Number(form.fn);

  if (D === undefined || D === '') {
    newErrors.D = 'Το πεδίο D είναι κενό. Παρακαλούμε εισάγετε μια τιμή.';
    console.log('Λάθος: Το πεδίο D είναι κενό.');
  } else { 
    const expectedD = modInverse(E, fn);
    if(expectedD == -1 ){ newErrors.D = D+' δεν έχει αντίστροφο mod του '+form.E;}
    if (D !== expectedD) {
         newErrors.D = '('+D+' * '+E+') mod '+fn+' ≠ 1';
    } else {
       delete newErrors.D; // Καθαρισμός του λάθους αν είναι σωστό το D
    }
  }
};


//----------------------------------------------------------------
const handleInputChange = (field, value) => {
 // if (locked) return; // Prevent changes if locked

  // Remove the prefix if it's present and not needed
  //const cleanedValue = value.replace(`${PREFIX_MAP['fn']}=`, ''); // Remove 'fn=' if present
  const cleanedValue =value;
  // Handle the case of empty input
  if (value === '') {
   // setField('fn', '');  // Clear the value completely
    setFactors('');
    setErrors({ ...errors, fn: 'Φn empty' });
    return;
  }

  // Parse cleaned value to integer
  const inputNumber = parseInt(cleanedValue);

  // Check if it's a valid positive number
  if (!isNaN(inputNumber) && inputNumber > 0) {
    // Update field with valid input, adding the prefix back
   // setField(field, `${PREFIX_MAP['fn']}=${cleanedValue}`);

    // Calculate factors
    const factorsArray = [];
    let n = inputNumber;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      while (n % i === 0) {
        factorsArray.push(i);
        n /= i;
      }
    }
    if (n > 1) {
      factorsArray.push(n);
    }

    // Format factors as string
    const factorsString = factorsArray.join(' * ');
    setFactors(factorsString);

    // Clear any existing error for 'fn'
    setErrors({ ...errors, fn: '' });
  } else {
    // If not a valid number, just set the input value and show error
    setForm({ ...form, fn: value });
    setFactors('');
    setErrors({ ...errors, fn: 'Παρακαλώ εισάγετε το σωστό θετικό αριθμό.' });
  }
};


  // -------------------------------isPrime function---------------------------------//
const isPrime = (num) => {
  let j;
  if(num==1 || num==0){return false;}
  for (j = 2; j <= num - 1; j++) {
    if (num % j == 0) {
      return false;
        //add break logic
     }
}
  return true;
};

function isWholeNumber(value) {
  // Check if the value is a string or number and use regex to test if it matches a whole number
  return /^\d+$/.test(value);
}



function modInverse(e, phiN) {
  let [t, newT] = [0, 1];
  let [r, newR] = [phiN, e];

  while (newR !== 0) {
    let quotient = Math.floor(r / newR);
    [t, newT] = [newT, t - quotient * newT];
    [r, newR] = [newR, r - quotient * newR];
  }

  if (r > 1) {
   // throw new Error(`${e} has no modular inverse mod ${phiN}`);
   return -1;
  }

  if (t < 0) {
    t = t + phiN;
  }

  return t;
}

//----------------------bob----------------------

const handleSubmit = () => {
  // Update the RSA values in the parent component
  const newErrors ={}
  const { p, q, n, fn, E, D } = form;

  const hasEmptyFields = !p || !q || !n || !fn || !E || !D;
  const hasErrors = Object.values(errors).some((error) => error !== null && error !== '');

  updateRSAValues({ p, q, n, fn, e: E, d: D });

   if (hasEmptyFields || hasErrors) {
    // Show an alert if any field is empty
    console.log('errors ' +newErrors);
    setShowModalB(true); // Show modal if fields are empty
    return; // Exit the function, preventing the rest of the code from running
   // setLocked(false);
  }else{
   // Lock the form
   setIsZCorrect(true);
  // setLocked(true);
  //onSendClick();
  }  
};

//--------------------Alice---------------------------
const handleButtonClick = () => {
  const{M,CT}= form
  console.log('M: '+M +'  ,CT:'+CT);
  const hasEmptyFields = !M || !CT;
  const hasErrors = Object.values(errors).some((error) => error !== null && error !== '');

  // Check if any fields are empty or has errors
  if (hasEmptyFields || hasErrors) {
    setShowModalA(true); // Show modal if fields are empty
  // setLocked(false);
  } else {
    // Call the onUnlockClick function since fields are filled
   //onUnlockClick();
    setIsFCorrect(true);
    console.log("before 5sec");
    setTimeout(() => {
      setShowModalE(true);
    }, 2000); // 5000ms = 5 seconds
    console.log("after 5sec");
  // setLocked(true);
    console.log('CT sent to Bob!'); // Placeholder for any additional functionality
  }
};



//----------------------------------------handle submit only for M---------------------------------------------

const handleSubmitM = (field, value, form,newErrors) =>{
  
  //1109  const handleSubmitM = e =>{
      //e.preventDefault()
      let{M}= form
      console.log("Inside M validation " +M);
      if (M === undefined || M === '') {newErrors.M = 'Το πεδίο είναι κενό'}
      else{ 

        if (/^\d*$/.test(M)) { // Allows only digits
          const numericValue = Number(M);
          if (numericValue >= 0 && numericValue <= 100) {
            delete newErrors.M; // Clear error if validation passes          

          }else 
          {  newErrors.M = 'Επιτρέπονται μόνο αριθμοί μεταξύ 0 - 100';
            }
        } else 
        {  newErrors.M = 'Δεν επιτρέπονται αλφαριθμητικοί χαρακτήρες'; }
        }     
      }
  
  //----------------------------------------handle submit only for CT---------------------------------------------
  const handleSubmitCT = (field, value, form,newErrors) =>{
    const { E, n } = rsaValues;
    console.log('Soo lets check bob values ..E= '+ E+' N= '+n);
  
    console.log('rsaValues:', rsaValues);
    let{M,CT}= form
    console.log("Inside CT validation " +CT);
     if (CT === undefined || CT === '') {newErrors.CT = 'Το πεδίο είναι κενό'}
     
    else{ 
        // Check if E and phi(N) are positive integers
       /*E=Number(E);
        M=Number(M);
        n=Number(n);
        */
        const E = Number(form.E);
        const n = Number(form.n);
        console.log('M: '+ M )
        console.log( 'E: '+E )
        console.log('n: '+n)


        let encryptedMessage = rsaEncrypt(Number(M) , E , n);
        console.log("Encrypted Message (C):", encryptedMessage);
  
        if (encryptedMessage !== Number(CT)) 
          { console.log("x^y = xeʸ");
            newErrors.CT = CT + ' ≠ ' + M + ' ' + convertToSuperscript(E) + ' mod ' + n;}
        else {
            delete newErrors.CT; // Clear error if validation passes
        }
     }
    }
  
  
  
    function convertToSuperscript(number) {
      const superscriptMap = {
          '0': '\u00B0', '1': '\u00B9', '2': '\u00B2', '3': '\u00B3', '4': '\u2074',
          '5': '\u2075', '6': '\u2076', '7': '\u2077', '8': '\u2078', '9': '\u2079'
      };
      return number.toString().split('').map(digit => superscriptMap[digit] || digit).join('');
  }

  function modExp(base, exp, mod) {
    if (mod === 1) return 0;
    let result = 1;
    base = base % mod;
    while (exp > 0) {
        if (exp % 2 === 1) {
            result = (result * base) % mod;
        }
        exp = exp >> 1;
        base = (base * base) % mod;
    }
    return result;
  }
  
  // RSA Encrypt function
  function rsaEncrypt(M, E, N) {
    return modExp(M, E, N);
  }
  
  

    // Conditional placeholder logic
    const placeholderN = form.p && form.q
        ? `n = P x Q = ${form.p * form.q}` 
        : 'n = P x Q ';  // If p or q is empty, just show the base placeholder

    const placeholderFn = form.p && form.q
    ? `Φ(n) = (P-1) x (Q-1) = ${(form.p -1) * (form.q-1)}` 
    : 'Φ(n) = (P-1) x (Q-1)';  // If p or q is empty, just show the base placeholder    

    const placeholderE = (!errors.E && form.E !== '')
    ? `Δημόσιο κλειδί (Ε,n):(${form.E},${form.n})` 
    : '';  // If p or q is empty, just show the base placeholder    


    const placeholderD = (!errors.D && form.D !== '')
    ? `Ιδιωτικό κλειδί (D,n):(${form.D},${form.n})` 
    : '';  // If p or q is empty, just show the base placeholder    

      const navigate = useNavigate(); // Initialize navigate function
    
    const HomeRedirection = () => {
      navigate('/'); // Navigate to the '/' route when button is clicked
    };

  
    const handleCalculatePrimeP = () => {
      // Helper function to check if a number is prime
      const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      };
    
      // Generate a random prime number between 0 and 100
      const primes = [];
      for (let i = 0; i <= 50; i++) {
        if (isPrime(i)) primes.push(i);
      }
    
      const randomPrime = primes[Math.floor(Math.random() * primes.length)];
      const formattedValue = `${PREFIX_MAP['p']}=${randomPrime}`; // Format as P={result}
      setField('p', formattedValue); // Save the numeric part
    };

    
    const handleCalculatePrimeQ = () => {
      // Helper function to check if a number is prime
      const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      };
    
      // Generate a random prime number between 0 and 100
      const primes = [];
      for (let i = 0; i <= 50; i++) {
        if (isPrime(i)) primes.push(i);
      }
    
      const randomPrime = primes[Math.floor(Math.random() * primes.length)];
      const formattedValue = `${PREFIX_MAP['q']}=${randomPrime}`; // Format as P={result}
      setField('q', formattedValue); // Save the numeric part
      console.log(typeof randomPrime);
      console.log(typeof formattedValue);
    };
    


    const calculateE = (fn) => {
       // let { fn} = form;
        let e = 3;
        while (e < fn) {
          if (gcd(e, fn) === 1) {
            const formattedValue = `${PREFIX_MAP['E']}=${e}`; 
            setField('E', formattedValue);
            return e;
          }
          e += 1;
        }
        throw new Error("No valid 'e' found. Check your inputs.");
      };

      const gcd = (a, b) => {
        while (b !== 0) {
          [a, b] = [b, a % b];
        }
        return a;
      };


      function calculateD(a, m) {
        // validate inputs
        [a, m] = [Number(a), Number(m)]
        if (Number.isNaN(a) || Number.isNaN(m)) {
          return NaN // invalid input
        }
        a = (a % m + m) % m
        if (!a || m < 2) {
          return NaN // invalid input
        }
        // find the gcd
        const s = []
        let b = m
        while(b) {
          [a, b] = [b, a % b]
          s.push({a, b})
        }
        if (a !== 1) {
          return NaN // inverse does not exists
        }
        // find the inverse
        let x = 1
        let y = 0
        for(let i = s.length - 2; i >= 0; --i) {
          [x, y] = [y,  x - y * Math.floor(s[i].a / s[i].b)]
        }
        return (y % m + m) % m
      }

   
     


  
  return (

   <div  className="PlayMain">
 {/*{!isMobile && (<NavigateButton to="/HomeGrid" label="How To" />)}*/}


 <div className="right-buttons">
 
 {/* <Button 
                          onClick={handleNext}                         
                          style={{
                            fontSize: '1rem', // Slightly larger font for better readability
                            padding: '0.4rem 0.7rem', // Adjusted padding for a balanced look
                            fontWeight: 'bolder',
                            borderColor: '#c22748', // Custom border color
                            borderWidth: '2px', // Custom border thickness
                            color: '#c22748', // Ensure text color matches or complements the border
                            backgroundColor: 'rgb(8, 4, 4)', // Dark background
                            borderRadius: '5px', // Rounded corners for a modern look
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
                            transition: 'all 0.3s ease-in-out', // Smooth animation for hover effects
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#c22748'; // Change to border color on hover
                            e.target.style.color = '#fff'; // Make text white on hover
                            e.target.style.boxShadow = '0 8px 12px rgba(194, 39, 72, 0.5)'; // Highlight shadow
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'rgb(8, 4, 4)'; // Reset to original background
                            e.target.style.color = '#c22748'; // Reset text color
                            e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)'; // Reset shadow
                          }}
                        >
                          Επόμενο
                        </Button>
    */}


{/*
  {!isMobile && (
       <Button variant="dark"        
                onClick={HomeRedirection}> 
                 Αρχική
              </Button>
   )}
  
  
    {!isMobile && ( <Button variant="dark" onClick={refreshPage}>
      <i class="bi bi-arrow-clockwise"></i>
    </Button>
   )}
*/}

   
           
</div>

    <div className="Main">

         {/* Bootstrap Modal for displaying empty field alert */}
                  <Modal show={showModalH} onHide={handleCloseModH} centered>
                      <Modal.Header className="modal-header-dark">
                        <Modal.Title>Οδηγίες</Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="modal-body-dark">
                      Αυτό το τμήμα είναι σχεδιασμένο για να σας καθοδηγήσει βήμα προς βήμα σχετικά 
                      με το πως λειτουργεί η εφαρμογή. Πατήστε το κουμπί "Επόμενο" για να ξεκλειδώσετε το
                     επόμενο βήμα.
                      </Modal.Body>
                      <Modal.Footer className="modal-footer-dark">
                        <Button
                          className="modal-close-button"
                          onClick={handleCloseModH}
                        >
                          Ξεκινήστε
                        </Button>
                      </Modal.Footer>
                    </Modal>

      {/* Boy's card with inputs and z calculation */}
      <Card style={{ borderColor: '#c22748' }}  className="customcardBobPlay">
         
      
              
        
            <Card.Title style={{ fontWeight: 'bold' ,fontSize: '1.4rem' ,color:'#c22748',textAlign: 'left', }}>
                  <i class="bi bi-person-square"style={{fontSize: '40px', color:'#c22748'}} ></i> &nbsp;
                    Bob   
               </Card.Title><br /> 
    <Row className="mb-3">
            <Col>
              Επίλεξε δύο πρώτους αριθμούς
           </Col>        
      
            <Col xs={4} className="form-container" style={{ position: 'relative' }}>
            <div className="input-wrapper">
                <Form.Control
                className="custom-placeholderPQPlay"
                placeholder="P"
                readOnly
                style={{
                    backgroundColor: 'rgb(243, 219, 219)',
                    fontWeight: 'bold',
                    fontSize: '1.0rem',
                    color: 'rgb(108,117,125)',
                    paddingRight: '40px', // Reserve space for the button
                }}
                value={form.p ? `${PREFIX_MAP['p']}=${form.p}` : ''}
                onChange={(e) => {
                    const value = e.target.value.replace(`${PREFIX_MAP['p']}=`, '');
                    setField('p', value);
                }}
                isInvalid={!!errors.p}
               // disabled={locked}
                />
                <Form.Control.Feedback type="invalid">
                {errors.p}
                </Form.Control.Feedback>
         </div>
            </Col>



            <Col xs={4} className="form-container" style={{ position: 'relative' }}>
            <div className="input-wrapper">
                <Form.Control
                className="custom-placeholderPQPlay"
                placeholder="Q"
                readOnly
                style={{
                    backgroundColor: 'rgb(243, 219, 219)',
                    fontWeight: 'bold',
                    fontSize: '1.0rem',
                    color: 'rgb(108,117,125)',
                    paddingRight: '40px', // Reserve space for the button
                }}
                value={form.q ? `${PREFIX_MAP['q']}=${form.q}` : ''}
                onChange={(e) => {
                    const value = e.target.value.replace(`${PREFIX_MAP['q']}=`, '');
                    setField('q', value);
                }}
                isInvalid={!!errors.q}
              //  disabled={locked}
                />
                <Form.Control.Feedback type="invalid">
                {errors.q}
                </Form.Control.Feedback>
            </div>
            </Col>

       </Row>

        <Row className="mb-3">
         
         <Col xs={5}>
            <Form.Control
                 className="custom-placeholderNF"
               //  value={form.n ? `${PREFIX_MAP['n']}=${form.n}` : ''} // Add "=" only if form.p has a value
                placeholder={placeholderN} 
                style={{ backgroundColor: 'rgb(243, 219, 219)',fontWeight: 'bold',fontSize: '0.83rem'}}
                isInvalid={!!errors.n}
                readOnly
             />
             <Form.Control.Feedback type= 'invalid' >
                 {errors.n}
              </Form.Control.Feedback>
          </Col>

          <Col xs={7}>
          <Form.Control
              className="custom-placeholderNF"
              placeholder= {placeholderFn}
              //value={form.fn ? `${PREFIX_MAP['fn']}=${form.fn}` : ''}  // Only show the prefix if form.fn is set
              style={{ backgroundColor: 'rgb(243, 219, 219)',fontWeight: 'bold', fontSize: '0.83rem'}}
              isInvalid={!!errors.fn} // Show invalid feedback if there's an error
              readOnly
            />
            <Form.Control.Feedback type="invalid">
              {errors.fn}
            </Form.Control.Feedback>
           </Col>
       </Row>

        <Row className="mb-3">    
        <Col xs={5}>
            Παράγοντες Φ(n) 
       </Col>  
       <Col xs={6}>         
        <Form.Control
            className="custom-placeholderPQ"
            type="text"
            readOnly
            placeholder=""
            value={factors}
            style={{ 
                               
                textAlign: 'center', 
                backgroundColor: 'rgb(243, 219, 219)',
                fontWeight: 'bold'
            }} 
            />   
             </Col>                                               
           </Row> 
   
                 <Row className="mb-3"  style={{ alignItems: 'center'}} > 
                      <Col xs={6}>
                        <Form.Control
                          className="custom-placeholder"
                           placeholder="Επίλεξε το E"
                           value={form.E ? `${PREFIX_MAP['E']}=${form.E}` : ''}
                           onChange={(e) => setField('E', e.target.value)}
                           isInvalid={!!errors.E}
                           readOnly
                           style={{ 
                            fontSize: '1.0rem', 
                            padding: '0.5rem 0.5rem',
                            color:'rgb(255, 255, 255)' ,
                            backgroundColor: 'rgb(4,145,141)',
                            fontWeight:'bolder',
                            boxShadow : '0 0 8px rgba(255, 255, 255, 0.8)'}}
                          />
                        <Form.Control.Feedback type= 'invalid'>
                          {errors.E}
                        </Form.Control.Feedback>
                        
                      </Col>      
                      <Col xs={6}>
                        <Form.Control
                          className="custom-placeholder"
                          
                           placeholder="Υπολόγισε το D"
                           value={form.D ? `${PREFIX_MAP['D']}=${form.D}` : ''}
                           onChange={(e) => setField('D', e.target.value)}
                           isInvalid={!!errors.D}
                           readOnly                          
                           style={{ 
                            fontSize: '1.0rem', 
                            padding: '0.5rem 0.5rem',
                            color:'rgb(255, 255, 255)',
                            backgroundColor: 'rgb(138,4,17)',
                            fontWeight:'bolder' ,
                            boxShadow : '0 0 8px rgba(255, 255, 255, 0.8)',
                            
                            '::placeholder': {color:'rgb(255, 255, 255)'}
                          }}
                          />
                        <Form.Control.Feedback type= 'invalid'>
                          {errors.D}
                        </Form.Control.Feedback>
                        
                      </Col>                            
                        
       </Row>
       <Row  className="mb-4">
        <Col style={{width: '300px'}}>
           {placeholderE}  
        </Col>
        <Col style={{width: '300px'}}>
           {placeholderD}  
        </Col>
       </Row>
               
                        <Button 
                          onClick={handleSubmit}  
                          disabled={true}                       
                          style={{
                            fontSize: '1rem', // Slightly larger font for better readability
                            padding: '0.4rem 0.7rem', // Adjusted padding for a balanced look
                            fontWeight: 'bolder',
                            borderColor: '#c22748', // Custom border color
                            borderWidth: '2px', // Custom border thickness
                            color: '#c22748', // Ensure text color matches or complements the border
                            backgroundColor: 'rgb(8, 4, 4)', // Dark background
                            borderRadius: '5px', // Rounded corners for a modern look
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
                            transition: 'all 0.3s ease-in-out', // Smooth animation for hover effects
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#c22748'; // Change to border color on hover
                            e.target.style.color = '#fff'; // Make text white on hover
                            e.target.style.boxShadow = '0 8px 12px rgba(194, 39, 72, 0.5)'; // Highlight shadow
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'rgb(8, 4, 4)'; // Reset to original background
                            e.target.style.color = '#c22748'; // Reset text color
                            e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)'; // Reset shadow
                          }}
                        >
                          Στείλε το κλειδί
                        </Button>

                       <div style={styles.receivedMessage}>
                        {isZCorrect ? (
                           <div>Περιμένει μήνυμα από την Alice</div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    
                  <div style={styles.receivedMessage}>
                        {isFCorrect ? (
                          <>
                            Έλαβε το κρυπτογραφημένο μήνυμα {form.CT}.  <br />
                            <div>
                                <br/>
                        <Form.Control                          
                              className="custom-placeholder"
                              readOnly
                              placeholder={`M = ${form.CT}${convertToSuperscript(form.D)} mod ${form.n} = ${form.M}`}
                              style={{
                                fontSize: '1.2rem',
                                padding: '0.5rem 0.5rem',
                                color: 'rgb(255, 255, 255)',
                                backgroundColor: 'rgb(33,37,41)',
                                fontWeight: 'bolder',
                                border: '2px solid rgb(255, 255, 255)', // Default border
                                transition: 'box-shadow 0.3s ease-in-out', // Smooth animation for the glow
                                boxShadow : '0 0 8px rgba(255, 255, 255, 0.8)',
                                 width:'100%',
                                 textAlign:'center !important'
                              
                              }}                          
                             /> </div> 
                          </>
                        ) : (
                          <div></div>
                        )}
                      </div>
                      <br />

              {/* Bootstrap Modal for displaying empty field alert */}
              <Modal show={showModalB} onHide={handleCloseModB} centered>
                <Modal.Header className="modal-header-dark">
                  <Modal.Title>Μήνυμα λάθους</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body-dark">
                  Παρακαλώ συμπληρώσε σωστά όλα τα πεδία ώστε να μπορέσεις να στείλεις το Public Key στην Alice.
                </Modal.Body>
                <Modal.Footer className="modal-footer-dark">
                  <Button
                    className="modal-close-button"
                    onClick={handleCloseModB}
                  >
                    Κλείσιμο
                  </Button>
                </Modal.Footer>
              </Modal>




              {showModalE} {/* Blue and Black Confetti */}
              <Modal
                show={showModalE}
                centered
              >
              <Modal.Header className="modal-header-dark">
                  <Modal.Title>Συγχαρητήρια</Modal.Title>                
                </Modal.Header>
                <Modal.Body className="modal-body-dark">
                 Ολοκλήρωσες επιτυχώς τον αλγόριθμο κρυπτογράφισης RSA!
                </Modal.Body>
                <Modal.Footer className="modal-footer-dark">
                  <Button
                    className="modal-close-button"
                    onClick={refreshPage}
                  >
                    Δοκίμασε ξανά
                  </Button>
                </Modal.Footer>
              </Modal>

      </Card>

      {/* Arrows column with two arrows, showing values */}
      <div style={styles.arrowsColumn}>
        {/* Arrow showing z sent from boy to girl */}


        {isZCorrect && (
        <div style={styles.arrowContainer}>
          {!isMobile ? (
            // Desktop layout
            <Col>
              <div className="arrowRightPlay">
                <i className="bi bi-arrow-right" style={{ fontSize: '60px', color: 'white' }}></i>
                <span style={styles.valueLabel}>
                  <i
                    className="bi bi-unlock-fill"
                    style={{ fontSize: '40px', color: 'rgb(4,145,141)' }}
                  ></i>
                  ({form.E},{form.n})
                </span>
              </div>
            </Col>
          ) : (
            // Mobile layout
            <div className="mobileArrowContainer">
              <Row>
              <div className="arrowDownPlay">
                <i className="bi bi-arrow-down" style={{ fontSize: '60px', color: 'white' }}></i>
              
              <span className="mobileValueLabel">
                <i
                  className="bi bi-unlock-fill"
                  style={{ fontSize: '40px', color: 'rgb(4,145,141)' }}
                ></i>
                ({form.E},{form.n})
              </span>
              </div>
              </Row>
            </div>
          )}
        </div>
      )}


  {/* Arrow showing p sent from girl back to boy NOW*/}
   {isFCorrect && (
        <div style={styles.arrowContainer}>
          {!isMobile ? (
            // Desktop layout
            <Col>
              <div className="arrowLeftPlay">
                <i className="bi bi-arrow-left" ></i>
                <span style={styles.valueLabel}>
                  <i
                    className="bi bi-file-earmark-lock-fill"
                    style={{ fontSize: '40px', color: 'rgb(138,4,17)' }}
                  ></i>
                 {form.CT}
                </span>
              </div>
            </Col>
          ) : (
            // Mobile layout
            <div className="mobileArrowContainer">
              <Row>
              <div className="arrowUpPlay">
                <i className="bi bi-arrow-up" style={{ fontSize: '60px', color: 'white' }}></i>
             
              <span className="mobileValueLabel">
                <i
                  className="bi bi-file-earmark-lock-fill"
                  style={{fontSize: '40px', color:'rgb(138,4,17)'}}
                ></i>
                 CT : {form.CT}
              </span>
              </div>
              </Row>
            </div>
          )}
        </div>
      )}


     
      </div>

       
      {/* Girl's card with inputs and f calculation */}
      <Card style={{ borderColor: '#06c3c9' }}  className="customcardAlicePlay">

      <Card.Title style={{ fontWeight: 'bold' ,fontSize: '1.4rem' ,color:'#06c3c9',textAlign: 'center', }}>
           <i class="bi bi-person-square"style={{fontSize: '40px', color:'#06c3c9'}} ></i> &nbsp;
           Alice 
           </Card.Title>


           <div style={styles.receivedMessage}>
               {isZCorrect ? `Έλαβε το δημόσιο κλειδί (${form.E},${form.n}) του Bob` :
               ( <span dangerouslySetInnerHTML={{ __html: "Θέλει να στείλει μήνυμα στον Bob. <br/> Περιμένει το δημόσιο κλειδί του." }} />)}
           </div> <br /> <br />
                                 

        {isZCorrect && (
          <>

            
            <Row className="mb-3">
                <Col>
                 Επίλεξε το μήνυμα που θέλεις να στείλεις
                </Col>
                 <Col xs={4}>
                   <Form.Control
                      classname='custom-placeholderMPlay'
                       placeholder="Μήνυμα"
                       readOnly
                       value={form.M ? `${PREFIX_MAP['M']}=${form.M}` : ''}
                       onChange={(e) => setField('M', e.target.value)}
                       isInvalid={!!errors.M}
                      // disabled={locked}
                       style={{ backgroundColor: 'rgb(243, 219, 219)',fontWeight: 'bold', padding: '0.5rem 0.5rem' ,fontSize: '1.0rem',color: 'rgb(108,117,125)'}}
                     />
                   <Form.Control.Feedback type= 'invalid'>
                     {errors.M}
                   </Form.Control.Feedback>
                 </Col>    
            </Row> 

            <Row className="mb-3">
                <Col>
                 Υπολόγισε το κρυπτογραφημένο μήνυμα
                </Col>
                 <Col xs={4}>                                
                 <Form.Control                          
                     className="custom-placeholder"
                     placeholder="CT"
                     value={form.CT ? `${PREFIX_MAP['CT']}=${form.CT}` : ''}
                    //  onChange={(e) => handleInputChangeD('D', e.target.value)} 
                    onChange={(e) => setField('CT', e.target.value)}
                     isInvalid={!!errors.CT}
                     readOnly
                    // disabled={locked}
                     style={{
                      fontSize: '1.2rem',
                      padding: '0.5rem 0.5rem',
                      color: 'rgb(255, 255, 255)',
                      backgroundColor: 'rgb(33,37,41)',
                      fontWeight: 'bolder',
                      border: '2px solid rgb(255, 255, 255)', // Default border
                      transition: 'box-shadow 0.3s ease-in-out', // Smooth animation for the glow
                      boxShadow : '0 0 8px rgba(255, 255, 255, 0.8)'
                    }}
                   
                  
                   />   
                    <Form.Control.Feedback type= 'invalid'>
                     {errors.CT}
                   </Form.Control.Feedback> 
                </Col>                
               </Row> 

           
               <Button 
                          onClick={handleButtonClick}
                          disabled={true}   
                          style={{
                            fontSize: '1rem', // Slightly larger font for better readability
                            padding: '0.4rem 0.7rem', // Adjusted padding for a balanced look
                            fontWeight: 'bolder',
                            borderColor: '#06c3c9', // Custom border color
                            borderWidth: '2px', // Custom border thickness
                            color: '#06c3c9', // Ensure text color matches or complements the border
                            backgroundColor: 'rgb(8, 4, 4)', // Dark background
                            borderRadius: '5px', // Rounded corners for a modern look
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
                            transition: 'all 0.3s ease-in-out', // Smooth animation for hover effects
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#06c3c9'; // Change to border color on hover
                            e.target.style.color = '#fff'; // Make text white on hover
                            e.target.style.boxShadow = '0 8px 12px rgba(194, 39, 72, 0.5)'; // Highlight shadow
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'rgb(8, 4, 4)'; // Reset to original background
                            e.target.style.color = '#06c3c9'; // Reset text color
                            e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)'; // Reset shadow
                          }}
                        > 
                Στείλε το μήνυμα
            </Button>

          </>
        )}
               <Modal show={showModalA} onHide={handleCloseModA} centered>
                  <Modal.Header  className="modal-header-darkB">
                    <Modal.Title>Μήνυμα λάθους</Modal.Title>
                  </Modal.Header>
                  <Modal.Body  className="modal-body-dark">
                  Παρακαλώ συμπληρώσε σωστά όλα τα πεδία ώστε να μπορέσεις να στείλεις το κρυπτογραφημένο μήνυμα στον Bob.
                  </Modal.Body>
                  <Modal.Footer className="modal-footer-dark">
                    <Button className="modal-close-buttonB"
                    onClick={handleCloseModA}>
                      Κλείσιμο
                    </Button>
                  </Modal.Footer>
                </Modal>

      </Card>
     

    
    </div>
    </div>
  );
};

// CSS styles for the updated layout
const styles = {
 
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    width: '200px',
    textAlign: 'center'
  },
  iconContainer: {
    fontSize: '60px',
    marginBottom: '10px'
  },
  inputGroup: {
    margin: '10px 0',
    width: '100%'
  },
  label: {
    fontSize: '14px',
    color: '#ffffff',
    position: 'relative',
    top: '-10px',
    backgroundColor: 'rgb(33,37,41)',
    padding: '0 4px'
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '16px',
    textAlign: 'center'
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  },

   arrowContainer: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '50px',
    marginTop: '20px'
  },
 
  valueLabel: {
    marginLeft: '10px',
    fontSize: '20px',
    color: 'white',
    fontWeight:'bolder'
  },
  receivedMessage: {
    marginTop: '10px',
    fontSize: '14px',
    color:'rgb(255, 255, 255)',
    backgroundColor: 'rgb(8, 6, 6)',
   
  }
};

export default Help;
