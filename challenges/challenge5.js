//Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
//[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

const temp = Number(prompt("Enter the temperature"));
const unit = prompt("Enter C for conversion in celsius and F for fahrenheit");

// if (unit==='C'){
//    const cel = 5*(temp-32)/9;
//     alert("Temperature in celsius is "+cel);

// }elseif (unit==='F'){
//   const fah = (9*temp/5)+32;
//     alert("Temperature in Fahrenheit is "+fah);
// }
// else{
//     alert("Invalid Choice!!!");

// }
switch (unit) {
  case "C":
    const cel = (5 * (temp - 32)) / 9;
    alert("Temperature in celsius is " + cel);
    break;

  case "F":
    const fah = (9 * temp) / 5 + 32;
    alert("Temperature in Fahrenheit is " + fah);
    break;

  default:
    alert("Invalid Choice!!!");
}
