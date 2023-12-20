const value1 = Number(prompt("Enter the first value"));
const value2 = Number(prompt("Enter thr second value"));
const operator = prompt("Enter what calculation you want to make ");

switch (operator) {
  case "+":
    alert(value1 + value2);
    break;

  case "-":
    alert(value1 - value2);
    break;

  case "*":
    alert(value1 * value2);
    break;

  case "/":
    alert(value1 / value2);
    break;

  default:
    alert("INVALID OPERATOR !!!");
    break;
}
