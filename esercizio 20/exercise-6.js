class AreaCalculator {
  static calculate(a) {
    let area
    if (a instanceof Square) {
      return area = a.side * 2;
    }
    else if (a instanceof Rectangle) {
      return area = (a.width * a.height);
    }
    else if (a instanceof Circle) {
      return area = Number(((a.radius * a.radius) * Math.PI).toFixed(1));
      
    }
    console.log(area)
  }
  
}
class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}



const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));