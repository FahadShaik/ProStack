// how to check whether "c" is present in an array

const arr = ["a", "b", "c", "d", "e", "f"];

arr.filter((alphabet) => {
  if (alphabet === "e") {
    console.log(alphabet, "is present");
  }
});

/**  Point to remember for life time that the call back function like map filter reduce invoke implicitly. */
