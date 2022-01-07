class TestClass {
    private readonly x: number;
    private readonly y: number;
    constructor(x: number, y: number) {
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

class Car {
    private name: string;
    private year: number;
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
