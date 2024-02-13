class Bottle {
  price;
  color;
  quantity;

  //for the
  constructor(drinkPrice, drinkColor, drinkQuantity) {
    this.price = drinkPrice;
    this.color = drinkColor;
    this.quantity = drinkQuantity;
    console.log("welcome in");
  }

  tasteEnhance() {
    console.log("This drink gives your tastebuds a hangover");
    return this.color;
  }
  biryaniSupport() {}
}

const thumsUp = new Bottle(120, "black", "250ml");
console.log(thumsUp);
console.log(thumsUp.tasteEnhance());
