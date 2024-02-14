class Shape {
  color;
  getInfo() {}
}

class Circle extends Shape {
  radius;
  getInfo(r) {
    return (this.radius = r * 3.14);
  }
}
class Square extends Shape {
  sideLength;
  getInfo(side) {
    return (this.sideLength = side * side);
  }
}

const myShape1 = new Circle();
const myShape2 = new Square();

console.log(myShape1.getInfo(2));
console.log(myShape1.getInfo(3));
