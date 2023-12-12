// share

// базовый класс
class Share {
  constructor() {}
  area() {}
  perimeter() {}
}

// класс прямоугольника
class Rectangle extends Share {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  // функция для вычисления периметра прямоугольника
  perimeter() {
    return (this.width + this.height) * 2;
  }

  // функция для вычисления площади прямоугольника
  area() {
    return this.width * this.height;
  }
}

// класс круга
class Circle extends Share {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  // функция для вычисления периметра круга
  perimeter() {
    return 2 * 3.14159 * this.radius;
  }

  // функция для вычисления площади круга
  area() {
    return 3.14159 * this.radius * this.radius;
  }
}

// класс треугольника
class Triangle extends Share {
  constructor(a, b, c) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
  }

  // функция для вычисления периметра треугольника
  perimeter() {
    return this.a + this.b + this.c;
  }

  // функция для вычисления площади треугольника
  area() {
    const semiperimeter = this.perimeter() / 2;
    return Math.sqrt(
      semiperimeter *
        (semiperimeter - this.a) *
        (semiperimeter - this.b) *
        (semiperimeter - this.c),
    );
  }
}

const rectangle = new Rectangle(10, 10);
const circle = new Circle(10);
const triangle = new Triangle(10, 10, 10);
console.log(rectangle.area());
console.log(circle.area());
console.log(triangle.area());
