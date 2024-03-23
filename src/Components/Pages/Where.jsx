import React from 'react'

function Where(){
return(
    <>
     <h4>Where</h4>
     <p>
     As previously described, RSA encryption has a number of different tasks that it is used for. One of these is digital signing for code and certificates. Certificates can be used to verify who a public key belongs to, by signing it with the private key of the key pair owner. This authenticates the key pair owner as a trusted source of information. Code signing is also done with the RSA algorithm. To ensure the owner is not sending dangerous or incorrect code to a buyer, the code is signed with the private key of the code creator. This verifies the code has not been edited maliciously in transit, and that the code creator verifies that the code does what they have said it does.
     </p>

     <p>
     RSA was used with Transport Layer Security (TLS) to secure communications between two individuals. Other well-known products and algorithms, like the Pretty Good Privacy algorithm, use RSA either currently or in the past. Virtual Private Networks (VPNs), email services, web browsers, and other communication channels have used RSA as well. VPNs will use TLS to implement a handshake between the two parties in the information exchange. The TLS Handshake will use RSA as its encryption algorithm, to verify both parties are who they say who they are
     </p>
    </>
);

}

export default Where;
