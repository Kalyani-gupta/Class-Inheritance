export class Shape {
    constructor(color) {
        this.color = color;
    }

    drawShape() {
        console.log("Draw shape  of " + this.color);
    }

    calculateArea() {
        console.log("Area by parent class");
    }
}
