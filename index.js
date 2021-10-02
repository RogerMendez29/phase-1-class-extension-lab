class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  get countSides() {
    return this.sides.length;
  }
  get perimeter() {
    return this.sides.reduce((a, b) => a + b);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3) {
      if (this.perimeter - this.sides[0] > this.sides[0]) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get area() {
    return Math.pow(this.sides[0], 2);
  }
  get isValid() {
    if (
      this.sides.length === 4 &&
      this.sides[0] + this.sides[1] === this.sides[2] + this.sides[3]
    ) {
      return true;
    }
    return false;
  }
}

let triangle = new Triangle([15, 10, 1]);

let square = new Square([5, 4, 3, 2]);

console.log(square.isValid);
