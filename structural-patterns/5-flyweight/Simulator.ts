import { ShapeFactory } from "./ShapeFactory";
import { Circle } from "./Circle";

const colors = ['Red', 'Green', 'Blue', 'White', 'Black'];

for(let i = 0; i < 20; i++) {
    const circle = ShapeFactory.getCircle(getRandomColor());
    circle.setX(getRandomX());
    circle.setY(getRandomY());
    circle.setRadius(100);
    circle.draw();
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomX() {
    return Math.floor(Math.random() * 100);
}

function getRandomY() {
    return Math.floor(Math.random() * 100);
}