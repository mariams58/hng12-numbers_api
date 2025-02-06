# HNG12 STAGE ONER SUBMISSION

## DESCRIPTION

This is a submission to the HNG Stage 1 task submission.It is a simple public API built with Express js that accepts a number and returns interesting mathematical properties about the number along with a funfact. The API handles Cross-Origin Resource Sharing (CORS) and also utilises the [The Number Api](http://numbersapi.com/#33)


## FEATURES

- **Mathematical Analysis:**  
  - Checks if the number is **prime**.
  - Checks if the number is a **perfect** number.
  - Checks if the number is an **Armstrong** number.
  - Computes the **digit sum**.
  - Determines a **properties** array based on whether the number is Armstrong and its parity (odd/even).

- **Fun Fact:**  
  Retrieves a math-related fun fact from the Numbers API.

- **Error Handling:**  
  Returns proper HTTP status codes and JSON error messages for invalid input.

- **CORS Support:**  
  Configured to support cross-origin requests.


## SETUP INSTRUCTIONS
### Prerequisites

Ensure you have the following installed
- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/)
- **Vercel CLI**(for deployment optional)

### Installation Steps
1. **Clone the repository:**
```bash
    git clone https://github.com/mariams58/hng12-numbers_api
    cd hng12-numbers_api
```
2. **Install dependencies**
```bash
    npm install
```
3. **Run the application locally:**
```bash
npm install -g vercel
```
from the project root, run:
```bash
vercel dev
```
This command emulates Vercel’s serverless environment locally. By default, it will run on http://localhost:3000.

## API Documentation
#### Endpoint: GET ``` /api/classify-number ```
**Query Parameter:**
-```number```: A valid integer

**Response format:** JSON

#### Success Response(HTTP 200):
`
{
  "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^= 371"
}
`

#### Error Response (HTTP 400):
`
{
    "number": "alphabet",
    "error": true
}
`
**Example Request:**
```
GET http://localhost:3000/api/classify-number?number=371
```