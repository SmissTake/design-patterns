import { ShapeInterface } from "./ShapeInterface";

export class Circle implements ShapeInterface {
    private color: string;
    private x: number;
    private y: number;
    private radius: number;

    constructor(color: string) {
        this.color = color;
    }

    public setX(x: number): void {
        this.x = x;
    }

    public setY(y: number): void {
        this.y = y;
    }

    public setRadius(radius: number): void {
        this.radius = radius;
    }

    public draw(): void {
        console.log(`Circle: Draw() [Color : ${this.color}, x : ${this.x}, y : ${this.y}, radius : ${this.radius}]`);
    }
}