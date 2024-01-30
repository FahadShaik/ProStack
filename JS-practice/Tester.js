const adderArray = [0, 1, 2, 3, 4, 5];

const AdderFn = adderArray.reduce((elemA, elemB) => {
  const result = elemA + elemB;
  return result;
});

console.log(AdderFn);
