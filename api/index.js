const express = require('express');
const axios = require('axios');
const cors = require('cors');
const serverless = require('serverless-http');

// Creating express app
const app = express();

// Enabling CORS for unknown origin
app.use(cors());

// Helper function: Checks if a number is prime
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  const sqrt = Math.sqrt(n);
  for (let i = 3; i < sqrt; i+= 2) {
    if (n % i === 0) return false;
  }
  return true;
}

// Helper function: Checks if a number is a perfect number
function isPerfect(n) {
    if (n <= 0) return false;
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i;
            if (i != n / i) {
                sum += n / i;
            }
        }
    }
    return sum === n;
}

// Helper function: Return the sum of the digit in a given number
function sumDigit(n) {
    let sum = 0;

    while (n) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

// Helper function: Checks if a number ia an Armstrong number
function isArmstrong(n) {
    if (n < 0) return false;
    let numDigits = n.length;
    let sumPow = 0;
    for (let i =0; i < numDigits; i++)   {
        sum += Math.pow(n.charAt(i), numDigits);
    }
    return sum === n;
}

// GET endpoint:  /api/classify-number
app.get('/api/classify-number', async (req, res) => {
})

// Export the app
modules.export = serverless(app);
