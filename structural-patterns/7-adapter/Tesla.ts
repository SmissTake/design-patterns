import { ElectricCar } from './ElectricCarInterface';

export class Tesla implements ElectricCar {
    charge: number = 0;

    chargeCar() {
        this.charge = 100;
    }

    accelerate() {
        this.charge -= 10;
    }

    brake() {
        this.charge -= 5;
    }
}