var prompt = require("prompt-sync")();

// complex problems 56-62

// 56. Write a program first ten multiples of 4 using a while loop (4, 8, 12, 16…)
/* let i = 1;
while (i <= 10) {
  console.log(i * 4);
  i++;
} */
// 57. Write a program to print a multiplication table of 6 using a while loop.
// let i = 1;
// while (i <= 10) {
//   console.log(i * 6);
//   i++;
// }
// 58. Write a program Factors of 24 using while loop
// const num = 24;

// let i = 1;
// while (i <= num) {
//   if (num % i === 0) {
//     console.log(i);
//   }
//   i++;
// }

// (Factors of 24 are 1, 2,3, 4, 6, 12, 24)

// 59. Write a program to print reverse of digits of numbers

// 60. Write a program to read 5 numbers and print only the even numbers.

for (let i = 1; i <= 5; i++) {
  let input = prompt(`enter the digit ${i} :`);
  let digit = parseInt(input);
  if (digit % 2 === 0) {
    console.log("this number is even ", digit);
  } else {
    console.log("Not a even number");
  }
}

// 61. Write a program to print the Fibonacci number series up to a given number.
// Expected out 17 -: 0 1 1 2 3 5 8 13
// 62. Write a program to check if a given number is an Armstrong number or not.
