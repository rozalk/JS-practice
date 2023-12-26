//Write a function to calculate compound interest based on the principle amount
const principal = Number(prompt("Enter principal amount"));

const rate = Number(prompt("Enter rate of interest"));

const time = Number(prompt("Enter time in year"));

const no_interest = Number(
  prompt("Enter number of times interest is compounded per year")
);

const compoundInterest = (p, t, r, n) => {
  const amount = p * Math.pow(1 + r / n, n * t);
  return amount;
};
const result = compoundInterest(principal, time, rate, no_interest);
alert(`Compount Interest Amount is :${result}`);
//jgjgng
