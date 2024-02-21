// normal execution context

let calcFn = (a, b, operation) => {
  if (operation === "sum") {
    return a + b;
  }
  if (operation === "mul") {
    return a * b;
  }
};

let r1 = calcFn(10, 20, "sum");
let r2 = calcFn(10, 20, "mul");
console.log(r1);
console.log(r2);
