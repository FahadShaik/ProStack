var prompt = require("prompt-sync")();

/* Write a program to check if a number is divisible by 7 or not? */

/* const num = parseInt(prompt("Enter a number"));

if (num % 7 === 0) {
  console.log("num divisible by 7");
} else {
  console.log("num not divisible");
}
 */

//Write a program to check if a number is multiple of 3 or not?

/* 
const multipleThree = parseInt(prompt("enter a number: "));

if (multipleThree % 3 === 0) {
  console.log("the number is multiple of 3");
} else {
  console.log("Tata bye bye , Khatam gaya.");
}
 */

//Write a program to check if a number is positive or not?
/* const positiveNum = parseInt(prompt("Enter a digit: "));

if (positiveNum > 0) {
  console.log("thank god!num is a positive not corona's checkup");
} else {
  console.log("number negative");
} */

//Write a program to check if a number is 3-digit numbers or not?

// const threeDigitNum = parseInt(prompt("Enter a digit: "));

// if (threeDigitNum >= 100) {
//   console.log("this is three digit number");
// } else {
//   console.log("no this is not 3 digit number");
// }

//  Write a program to print even or odd for a given number?

/* const evenOrOdd = parseInt(prompt("Enter a digit: "));
if (evenOrOdd % 2 === 0) {
  console.log("The number is even");
} else {
  console.log("the number is odd");
} */

//26. Write a program to print the greatest number in given two numbers?

// const num1 = parseInt(prompt("Enter a digit 1: "));
// const num2 = parseInt(prompt("Enter a digit 2: "));

// if (num2 > num1) {
//   console.log(`${num2} is greater`);
// }
// if (num1 > num2) {
//   console.log(`${num1} is greater`);
// }
// if (num1 === num2) {
//   console.log(`${num1} and ${num2} are equal`);
// }

// 27. Write a program to print the least number given two numbers?

// const num1 = parseInt(prompt("Enter a digit 1: "));
// const num2 = parseInt(prompt("Enter a digit 2: "));

// if (num2 < num1) {
//   console.log(`${num2} is lowest`);
// }
// if (num1 < num2) {
//   console.log(`${num1} is lowest`);
// }
// if (num1 === num2) {
//   console.log(`${num1} and ${num2} are equal`);
// }

// Write a program to print the greatest number in given three numbers?
/* 
const num1 = parseInt(prompt("Enter a digit 1: "));
const num2 = parseInt(prompt("Enter a digit 2: "));
const num3 = parseInt(prompt("Enter a digit 3: "));

if (num1 > num2 && num1 > num3) {
  console.log(`${num1} is greater`);
}
if (num2 > num1 && num2 > num3) {
  console.log(`${num2} is greater`);
}
if (num3 > num1 && num3 > num2) {
  console.log(`${num3} is greater`);
} */

// Write a program to print the least number in given three numbers?

// const num1 = parseInt(prompt("Enter a digit 1: "));
// const num2 = parseInt(prompt("Enter a digit 2: "));
// const num3 = parseInt(prompt("Enter a digit 3: "));

// if (num1 < num2 && num1 < num3) {
//   console.log(`${num1} is least`);
// }
// if (num2 < num1 && num2 < num3) {
//   console.log(`${num2} is least`);
// }
// if (num3 < num1 && num3 < num2) {
//   console.log(`${num3} is least`);
// }

// 30. Write a program to print the given 3 numbers in ascending orders?

// const num1 = parseInt(prompt("Enter a digit 1: "));
// const num2 = parseInt(prompt("Enter a digit 2: "));
// const num3 = parseInt(prompt("Enter a digit 3: "));

// 23 43 5
// 5 23 43
/* if (num1 < num2 && num2 < num3) {
  console.log(num1, " ", num2, " ", num3);
}
if (num3 < num2 && num2 < num1) {
  console.log(num3, " ", num2, " ", num1);
}
if (num1 < num3 && num3 < num2) {
  console.log(num1 + " " + num3 + " " + num2);
}
if (num2 < num1 && num1 < num3) {
  console.log(num2 + " " + num1 + " " + num3);
}
if (num2 < num3 && num3 < num1) {
  console.log(num2 + " " + num3 + " " + num1);
}
if (num3 < num1 && num1 < num2) {
  console.log(num3 + " " + num1 + " " + num2);
} */

/* const a = parseInt(prompt("Enter a digit 1: "));
const b = parseInt(prompt("Enter a digit 2: "));
const c = parseInt(prompt("Enter a digit 3: "));

if (a >= b && b >= c) {
  console.log(a, " ", b, " ", c);
} else if (a >= c && c >= b) {
  console.log(a, " ", c, " ", b);
} else if (b >= a && a >= c) {
  console.log(b, " ", a, " ", c);
} else if (b >= c && c >= a) {
  console.log(b, " ", c, " ", a);
} else if (c >= a && a >= b) {
  console.log(c, " ", a, " ", b);
} else if (c >= b && b >= a) {
  console.log(c, " ", b, " ", a);
}
 */

//32. JavaScript Program to find largest of Three Numbers?
/* const dig1 = 102;
const dig2 = 33;
const dig3 = 2000;

if (dig1 > dig2 && dig1 > dig3) {
  console.log(dig1);
}
if (dig2 > dig1 && dig2 > dig3) {
  console.log(dig2);
}
if (dig3 > dig1 && dig3 > dig2) {
  console.log(dig3);
} */

// Ternary operator questions
// 33. JS Program check if a number is divisible by 7 or not using a ternary operator?
//const num = 14;

/* num % 7 === 0 ? console.log("divisible by 7") : console.log("not divisible "); */

//34. JS Program to check if a number is multiple of 3 or not using a ternary operator?
// const multipleThree = 13;

// multipleThree % 3 === 0 ? console.log("yes") : console.log("no");

// const posNum = 1;

// posNum >= 0 ? console.log("positive num") : console.log("negative");

// //36. JS Program to check if a number is 3-digit numbers or not using a ternary operator?

// const num = 12;
// num > 99 && num < 999 ? console.log("three digit") : console.log("not 3 digit");

// 37. Write a program to print even or odd for a given number using a ternary operator?
const evnOdd = 2;

evnOdd % 2 === 0 ? console.log("even") : console.log("odd");
