// Classes and objects
/**
 * classes are the plan, draft, mould or a sketch to create an object which consist of properties and methods
 *
 * classes begin with syntax class and class name starts with first letter uppercase
 * Below is the example
 */

class Product {
  productType = "cellphones";
  switchOn() {
    console.log("Greets from me");
  }
  dailling() {
    console.log("make a call");
  }
  alerting() {
    console.log("recieve a call");
  }
  sleepMode() {
    console.log("keep me aside time to sleep");
  }
  shutDown() {
    console.log("Charge me");
  }
}
// creating a new object
const phoneOne = new Product();
console.log(phoneOne);
phoneOne.shutDown();
