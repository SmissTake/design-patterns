import { Circle } from "./Circle";

export class ShapeFactory {
    private static circleMap: Map<string, Circle> = new Map<string, Circle>();

    public static getCircle(color: string): Circle {
        let circle = this.circleMap.get(color);

        if (!circle) {
            circle = new Circle(color);
            this.circleMap.set(color, circle);
            console.log("Creating circle of color : " + color);
        }

        return circle;
    }
}