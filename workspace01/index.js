class TestClass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.x * this.y;
    }
}

const square = new TestClass(10, 50);
console.log(square.area);


class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
