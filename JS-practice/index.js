// practice based on the CRUD operation

// primitive data types creation
// create
var brandName = "tommy hilfiger";
var price = 2200;
var rating = 2.4;
var cashOnDel = true;
var bestOffers;

//read
console.log(brandName, price, rating, cashOnDel, bestOffers);
// find the type of data
console.log(
  typeof brandName,
  typeof price,
  typeof rating,
  typeof cashOnDel,
  typeof bestOffers
);

// update data
brandName = "Louis Vuitton";
price = "40000";
cashOnDel = false;

console.log(brandName, price, cashOnDel);

delete bestOffers;
console.log(bestOffers);
