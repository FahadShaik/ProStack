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
console.log(mensClothing);

//read particular property from js
console.log(mensClothing.headgear.hat);
console.log(mensClothing.headgear.size);
console.log(mensClothing.topwear);
