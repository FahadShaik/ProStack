// to prove if a number is even or odd

// const num = 22;

// if (num % 2 === 0) {
//   console.log(num, ":", "even");
// } else {
//   console.log(num, ":", "odd");
// }
// Here ends the confusion of modulus now i will find the answers fr the Gpt questions via code

/* What is the remainder when 15 is divided by 4?
Find the remainder when 27 is divided by 5.
Calculate the remainder when 100 is divided by 7.
Determine the remainder when 48 is divided by 9.
What is the remainder when 75 is divided by 6?
Find the remainder when 64 is divided by 3.
Calculate the remainder when 123456 is divided by 11.
Determine the remainder when 987654 is divided by 13.
What is the remainder when 256 is divided by 16?
Find the remainder when 99 is divided by 8. */

/* with the small program i am able to take all the inputs from the usr and check the remainder and say eweather the remainder is even or odd */

const numberTobeDivided = prompt("enter the divided");
const numberdividor = prompt("enter the divider");
let outPut = numberTobeDivided % numberdividor;
console.log(outPut);
if (outPut % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}
