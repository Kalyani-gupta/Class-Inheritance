export class Circle extends Shape {
    constructor(color){
        super(color);
    }
    
    calculateArea() {
        console.log("Area calculated by child Class");
    }
}

var c = new Circle("black");