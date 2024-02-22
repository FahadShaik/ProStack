/**call apply and bind method */

const myObjOne = {
  productName: "Iphone",
  productModel: " Pro maX",
  concatFn: function () {
    console.log(this.productName + this.productModel);
  },
};

myObjOne.concatFn(); // gives concat string

const myObjTwo = {
  productName: "Samasung",
  productModel: " S23 Ultra",
};

myObjOne.concatFn.call(myObjTwo); //performs same
