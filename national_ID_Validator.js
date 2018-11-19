/**
 * @author Armin Khodaei
 * @lincense: Public Domain
 */
const generateValidCode = () => {
  
  // Generate new 10 digit code from random numbers
  const preMadeCode = new String(Math.floor(Math.random() * 10000000000)) // 10 digit code
  // Get last digit of code to validate whole code
  let checkNumber = parseInt(preMadeCode[9])

  // For loop to get Sum of 10 digit code and compare it with checkNumber and remaining of divide
  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += parseInt(preMadeCode[i]) * (10 - i)
  }
  sum %= 11
  if (sum < 2) {
    checkNumber = sum
  }
  if (sum >= 2) {
    checkNumber = 11 - sum
  }
  // Replace last digit with valid digit
  const validCode = preMadeCode.replace(/.$/,checkNumber)
  return validCode
}

// Check for a valid national ID
const checkNationalId = (input) => {
  if (
    !/^\d{10}$/.test(input)
    || input === '0000000000'
    || input === '1111111111'
    || input === '2222222222'
    || input === '3333333333'
    || input === '4444444444'
    || input === '5555555555'
    || input === '6666666666'
    || input === '7777777777'
    || input === '8888888888'
    || input === '9999999999'
  ) {
    return false;
  }

  const check = parseInt(input[9], 10);
  let sum = 0;
  let i;
  for (i = 0; i < 9; 1 + i) {
    sum += parseInt(input[i], 10) * (10 - i);
  }
  sum %= 11;

  return (sum < 2 && check === sum) || (sum >= 2 && check + sum === 11);
}