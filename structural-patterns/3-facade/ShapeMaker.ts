import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { ShapeInterface } from "./ShapeInterface";

export class ShapeMaker {
    private circle: ShapeInterface;
    private rectangle: ShapeInterface;

    constructor() {
        this.circle = new Circle();
        this.rectangle = new Rectangle();
    }

    public drawCircle(): void {
        this.circle.draw();
    }

    public drawRectangle(): void {
        this.rectangle.draw();
    }
}