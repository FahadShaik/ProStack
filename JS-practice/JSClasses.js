/* Javascript has variety of classes which includes 
1. JSON
2. Object
3. Array
4. Sets Etc

1. to read the object on the html page that is not possible example */
const employee = {
  empId: 101,
  name: "Steve Rogers",
};
const nameOne = "Avengers";
const numberOne = 1;
// document.write(employee, numberOne, nameOne); // result is[object Object] for employee and number and string can be printed

// So to read the object data on our screen we need methods from JS classes and these classes are very benefitial and powerful

/* 1.JSON have various methods lets look into it one after one
-> JSON.stringify()
document.write(JSON.stringify(employee));
-> JSON.parse() */
const amazingMovie = {
  movieName: "Endgame",
  villian: "Thanos",
  mission: "Inifinity Stones",
  numOfStones: 5,
  numOfAvengers: 6,
};

document.write(amazingMovie);
document.write(JSON.stringify(amazingMovie));

const nameStr = '{"sample": 23, "nameher":"Natasha"}';
console.log(JSON.parse(nameStr)); // this returns an object
