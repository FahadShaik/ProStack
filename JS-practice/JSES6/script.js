// es6 concepts have several easy to use advantages mainly with the syntax
// some of the array methods will be discussed in es6 features

//map(), forEach(), filter(), reduce(), find();

// Requirement is to loop over an array and fetch new values of the older array into the newer one.

// traditional method
let employeeIds = [101, 102, 103, 104];

let newArrEmpIds;

// for of method => es6 syntax;
// for (employeeId of employeeIds) {
//   newArrEmpIds.push(employeeId);
// }

// console.log(newArrEmpIds);

// Using traditional for loop.

// for (let i = 0; i < employeeIds.length; i++) {
//   newArrEmpIds.push(employeeIds[i]);
// }
// console.log(newArrEmpIds);

// using map to replicate the same requirement without wasting memory

newArrEmpIds = employeeIds.map((empId) => {
  //   console.log(empId);
  return empId;
});
// console.log(newArrEmpIds);

// using the same forEach method.(doesn't return a value);

newArrEmpIds = employeeIds.forEach((empId) => {
  //   console.log(empId);
  //   return [empId];
  console.log(empId);
});

console.log(newArrEmpIds);
