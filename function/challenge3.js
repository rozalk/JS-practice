//Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.
const number = Number(prompt("Enter any number"));

if (number > 0) {
  const checkPrime = (number) => {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        alert("Not a prime number");
        return;
      }
    }
    alert("Prime number");
  };

  const result = checkPrime(number);
} else {
  alert("Enter a positive number");
}
