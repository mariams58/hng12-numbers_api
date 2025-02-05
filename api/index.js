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
}

// Helper function: Checks if a number is a perfect number
function isPerfect(n) {
}

// Helper function: Return the sum of the digit in a given number
function sumDigit(n) {
}

// Helper function: Checks if a number ia an Armstrong number
function isArmstrong(n) {
}

// GET endpoint:  /api/classify-number
app.get('/api/classify-number', async (req, res) => {
})

// Export the app
modules.export = srverless(app);
