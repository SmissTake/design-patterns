import { ShapeInterface } from "./ShapeInterface";

export class Rectangle implements ShapeInterface {
    public draw(): void {
        console.log("Rectangle::draw()");
    }
}