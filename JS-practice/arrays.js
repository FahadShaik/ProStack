// Performing crud style learning on JS Arrays

//create
const arrayOne = [];
const arrayTwo = [1, "anny", {}, [], null, undefined, true];

// console.log(arrayTwo.length);

//read
console.log(arrayTwo[3]);
console.log(arrayTwo[4]);

//delete tbd

//looping over an array using for loop
/* for (let i = 0; i < arrayTwo.length; i++) {
  console.log("ArrayValue: ", arrayTwo[i]);
  console.log(i);
} */

// looping an array with es6 for of loop
//this is the easier logic to loop over arrays.

/* for (arrayElem of arrayTwo) {
  console.log(arrayElem);
} */
