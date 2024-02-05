/* Javascript has variety of classes which includes 
1. JSON
2. Object
3. Array
4. Sets Etc

1. to read the object on the html page that is not possible example */
// const employee = {
//   empId: 101,
//   name: "Steve Rogers",
// };

// document.write(employee); // result is[object Object] for employee and number and string can be printed

// So to read the object data on our screen we need methods from JS classes and these classes are very benefitial and powerful

/* 1.JSON have various methods lets look into it one after one
-> JSON.stringify()
document.write(JSON.stringify(employee));
-> JSON.parse() */
/* const amazingMovie = {
  movieName: "Endgame",
  villian: "Thanos",
  mission: "Inifinity Stones",
  numOfStones: 5,
  numOfAvengers: 6,
};

document.write(amazingMovie);
document.write(JSON.stringify(amazingMovie));

const nameStr = '{"sample": 23, "nameher":"Natasha"}';
console.log(JSON.parse(nameStr)); */ // this returns an object
/*************************************************** */
//Array Methods
// 1. shift
// 2. unshift
// 3. push
// 4. pop
//5.length

// const array = [101, 102, 103, 104];

// array.push(133); //adds element to last index
// console.log(array);
// document.write(array);

// array.pop(array[1]); // deletes array element from last index
// console.log(array);

// array.unshift(100); // adds element to the first of array
// console.log(array);

// array.shift(array[2]); // deletes 2 elemets from initial array
// array.shift(101);

// console.log(array);
/***********************Object methods */

const employee = {
  empId: 101,
  name: "Steve Rogers",
};

console.log(Object.keys(employee));
console.log(Object.values(employee));

// to find the length we use the length after getting the keys property from the retreiving sequence arrays from the keys
console.log(Object.keys(employee).length); // 2
