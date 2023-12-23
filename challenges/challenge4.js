//Write a JavaScript program to calculate multiplication and division of two numbers.(use same function to achieve this)

/// Asking for prompt values...
const num1 = Number(prompt("Enter first number"));
const num2 = Number(prompt("Enter second number:"));

// Defining arrow function...
const multiDivi = (num1, num2) => {
  const multi = num1 * num2;
  alert(`Multiplication is ${multi}`);
  const divi = num1 / num2;
  alert(`Division is ${divi}`);
};
const multiDivii = multiDivi(num1, num2);
