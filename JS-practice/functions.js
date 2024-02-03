// syntax of functions according to the crud format study

// create a function

function messageDisplay() {
  console.log("good afternoon");
}

// read a function(Function invoking)
messageDisplay();

// update a function or to modify (function params and arguments)

function messageDisplay2(a) {
  //(a) it is a parameter
  console.log(a);
}

messageDisplay2("call many times as you wish"); // arguments;
messageDisplay2("enjoy creating the functions");

// calculate an age according to today's year
function calculateAge(yearOfBirth) {
  let currentYear = 2024;
  let age = currentYear - yearOfBirth;
  //   console.log(age);
  return age;
}

console.log(calculateAge(1996), calculateAge(2001), calculateAge(1974));

/* points to remember:

we can give the default parameter with desired value in the parameter itself.
functions are simple business logic related codeblock consisting some statements which execute and return something from them.

the lines after the function is returned do not execute and considered meaningless */
