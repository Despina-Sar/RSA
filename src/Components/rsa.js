

// Function to generate RSA key pair
function generateKeyPair() {
  // Randomly select two large prime numbers
  const p = generateLargePrime();
  const q = generateLargePrime();

  // Calculate n = p * q (modulus)
  const n = p * q;
  console.log("p= "+p+" ,q= "+q+ " ,n= "+n);

  // Calculate Euler's totient function: φ(n) = (p-1) * (q-1)
  const phi = (p - 1) * (q - 1);

  // Choose public exponent (e) such that 1 < e < φ(n) and gcd(e, φ(n)) = 1
  const e = selectPublicExponent(phi);

  // Calculate private exponent (d) such that (d * e) ≡ 1 (mod φ(n))
  const d = modInverse(e, phi);
  console.log("phi= "+phi+" ,e= "+e+ " ,d= "+d);
  return {
    publicKey: { e, n },
    privateKey: { d, n }
  };
}
  
  
// Function to encrypt message using RSA public key
function encrypt(message, publicKey) {
    const { e, n } = publicKey;
    const encrypted = powerMod(message, e, n);
    console.log("encrypted= "+encrypted);
    return encrypted;
  }
  
  // Function to decrypt message using RSA private key
  function decrypt(encryptedMessage, privateKey) {
    const { d, n } = privateKey;
    const decrypted = powerMod(encryptedMessage, d, n);
    console.log("decrypted= "+decrypted);
    return decrypted;
  }
  
  // Helper function to generate large prime numbers
  function generateLargePrime() {
    // Simplified prime generation, not suitable for large-scale applications
    // Generate a random number and check if it's prime
    // Here, we just use small prime numbers for demonstration
    const smallPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
    const randomIndex = Math.floor(Math.random() * smallPrimes.length);
    return smallPrimes[randomIndex];
  }
  
  // Helper function to select public exponent
  function selectPublicExponent(phi) {
    // Commonly used public exponent
    return 65537;
  }
  
  // Function to calculate modular multiplicative inverse
  function modInverse(a, m) {
    // Extended Euclidean Algorithm
    let [old_r, r] = [a, m];
    let [old_s, s] = [1, 0];
    let [old_t, t] = [0, 1];
  
    while (r !== 0) {
      const quotient = Math.floor(old_r / r);
      [old_r, r] = [r, old_r - quotient * r];
      [old_s, s] = [s, old_s - quotient * s];
      [old_t, t] = [t, old_t - quotient * t];
    }
  
    // Ensure result is positive
    if (old_s < 0) {
      old_s += m;
    }
  
    return old_s;
  }
  
  // Function to calculate (base^exp) % modulus
  function powerMod(base, exp, modulus) {
    let result = 1;
    while (exp > 0) {
      if (exp % 2 === 1) {
        result = (result * base) % modulus;
      }
      base = (base * base) % modulus;
      exp = Math.floor(exp / 2);
    }
    return result;
  }
  
  module.exports = { generateKeyPair, encrypt, decrypt };
  