// crud style for JS object

//create
const mensClothing = {
  topwear: "shirt",
  bottomwear: "pants",
  wristwear: ["bracelets", "watch"],
  headgear: {
    hat: "being human",
    size: 22,
  },
  footwear: null,
  eyewear: undefined,
};

//read from an object
// console.log(mensClothing);

//read particular property from js
// console.log(mensClothing.headgear.hat);
// console.log(mensClothing.headgear.size);
// console.log(mensClothing.topwear);
//Rare way to call the object's value
console.log(mensClothing["topwear"]);
// print keys in array format
console.log(Object.keys(mensClothing));
//object's length
console.log(Object.keys(mensClothing).length);

//iterating over an object is not possible but still if we wanna do it we go for the for of loop

for (key in mensClothing) {
  console.log(key, ":", mensClothing[key]);
}
