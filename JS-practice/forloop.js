/* This condition is used to do repeated things multiple times  

    Syntax for the for loop
    1. Initialization of the single value;
    2. Statement to iterate the code until when it should execute(Final condition)
    3. Incrementation of the code .

    for (step 1; step 2; step 3){
        business logic
    }

*/

// print the number from 1 to 10

/* for (let i = 0; i <= 10; i++) {
  console.log(i);
}
 */

// Code to write all the even numbers from 0 - 20(first twenty even numbers)

// for (let i = 0; i <= 20; i = i + 2) {
//   console.log(i);
// }

// code to print all the odd numbers from 1-20
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
