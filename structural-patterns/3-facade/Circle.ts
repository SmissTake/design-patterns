import { ShapeInterface } from "./ShapeInterface";

export class Circle implements ShapeInterface {
    public draw(): void {
        console.log("Circle::draw()");
    }
}