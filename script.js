class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }

  getPerimeter() {
    return 4 * this._width;
  }
}

// Create instances and display output
const rectangle = new Rectangle(5, 10);
const square = new Square(4);

const outputDiv = document.getElementById('output');
outputDiv.innerHTML = `
  <p>Rectangle:</p>
  <p>Width: ${rectangle.width}</p>
  <p>Height: ${rectangle.height}</p>
  <p>Area: ${rectangle.getArea()}</p>
  <br>
  <p>Square:</p>
  <p>Side Length: ${square.width}</p>
  <p>Area: ${square.getArea()}</p>
  <p>Perimeter: ${square.getPerimeter()}</p>
`;
