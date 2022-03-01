class Circle {
    constructor(r) {
        this.radius = r;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        this.radius = value / 2;
    }

    get area() {
        return Math.PI * (this.radius ** 2);
    }
}

let c = new Circle(2);
console.log(c.radius);
c.diameter = 2
console.log(c.radius);