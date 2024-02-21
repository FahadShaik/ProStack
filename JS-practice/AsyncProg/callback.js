const sum = (a, b) => {
  return a + b;
};

const mult = (a, b) => {
  return a * b;
};

const calcFn = (a, b, callbackFn) => {
  return callbackFn(a, b);
};

console.log(calcFn(19, 23, sum));
console.log(calcFn(23, 12, mult));
