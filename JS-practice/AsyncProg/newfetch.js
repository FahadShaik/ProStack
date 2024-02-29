// const data = fetch("https://dummyjson.com/products/1");
// console.log(data);

// let newData = data.then(() => {
//   console.log("Hello");
// });

const myPromise = new Promise((resolve, reject) => {
  const myText = "Helllo";
  if (myText === "Helllo") {
    resolve(); // explicit call
  } else {
    reject();
  }
});

console.log(myPromise);

myPromise
  .then((pass) => {
    console.log("this is pass");
  }) // implicit call
  .catch(() => {
    console.log("this is fail");
  });
