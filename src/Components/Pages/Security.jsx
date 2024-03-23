
import React from 'react'

function Security(){
return(
<>
  <h5>Security of RSA Algorithm</h5>
   <p>RSA security relies on the computational difficulty of factoring large integers. As computing power increases and more efficient factoring algorithms are discovered, the ability to factor larger and larger numbers also increases
   </p>

   <p>Encryption strength is directly tied to key size. Doubling key length can deliver an exponential increase in strength, although it does impair performance. RSA keys are typically 1024- or 2048-bits long, but experts believe that 1024-bit keys are no longer fully secure against all attacks. This is why the government and some industries are moving to a minimum key length of 2048-bits.
   </p>

   <p>
   arring an unforeseen breakthrough in quantum computing, it will be many years before longer keys are required, but elliptic curve cryptography (ECC) is gaining favor with many security experts as an alternative to RSA to implement public key cryptography. It can create faster, smaller and more efficient cryptographic keys.
   </p>

   <p>Modern hardware and software are ECC-ready, and its popularity is likely to grow. It can deliver equivalent security with lower computing power and battery resource usage, making it more suitable for mobile apps than RSA.
     A team of researchers, which included Adi Shamir, a co-inventor of RSA, successfully created a 4096-bit RSA key using acoustic cryptanalysis. However, note that any encryption algorithm is vulnerable to attack.
   </p>
</>

);

}

export default Security;
