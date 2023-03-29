import { Car } from "./CarInterface";

export class BMW implements Car {
    speed: number = 0;

    accelerate() {
        this.speed += 10;
    }

    brake() {
        this.speed -= 10;
    }
}