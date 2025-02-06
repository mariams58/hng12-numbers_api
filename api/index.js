const express = require('express');
const axios = require('axios');
const cors = require('cors');
// const serverless = require('serverless-http');


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
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

// Helper function: Checks if a number is a perfect number
function isPerfect(n) {
    if (n <= 1) return false;
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i;
            if (i !== n / i) {
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
    const str = n.toString();
    let numDigits = str.length;
    let sumPow = 0;
    for (let i = 0; i < numDigits; i++) {
        sumPow += Math.pow(parseInt(str.charAt(i), 10), numDigits);
    }
    return sumPow === n;
}

// GET endpoint:  /api/classify-number
app.get('/api/classify-number', async (req, res) => {
    const { number } = req.query;

    // Validate input: chck for valid integer
    const vnum = Number(number);
    if (number === undefined || number.toString().trim === "" || isNaN(vnum) || !Number.isInteger(vnum || vnum < 0)) {
        return res.status(400).json({
            number: number,
            error: true
            
        });
    }

    // Get property arry based on Armstrong and parity property
    let props = [];
    if (isArmstrong(vnum)) {
        props.push('armstrong');
        props.push(vnum % 2 === 0 ? 'even' : 'odd');
    } else {
        props.push(vnum % 2 === 0 ? 'even' : 'odd');
    }

    // Fetch fun fact from number api (math)
    let funFact = '';
    try {
        const apiUrl = `http://numbersapi.com/${vnum}/math?json`;
        const response = await axios.get(apiUrl);
        funFact = response.data.text;
      } catch (error) {
        funFact = 'No fun fact available at the moment.';
      }

    // response object
    const result = {
        number: vnum,
        is_prime: isPrime(vnum),
        is_perfect: isPerfect(vnum),
        properties: props,
        digit_sum: sumDigit(vnum),
        fun_fact: funFact
    };

    return res.status(200).json(result);
});

app.listen(3000, () => console.log("Server ready on port 3000"));
// Export the app wrapped serverless-http
module.exports = app;
