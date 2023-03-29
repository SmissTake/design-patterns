import { Car } from './CarInterface';
import { ElectricCar } from './ElectricCarInterface';

export class ElectricCarAdapter implements Car {
    speed: number = 0;
    charge: number = 0;

    constructor(private electricCar: ElectricCar) {}

    accelerate() {
        this.electricCar.accelerate();
        this.speed += 20;
    }

    brake() {
        this.electricCar.brake();
        this.speed -= 20;
    }
}