import { CarInterface } from "./CarInterface"

export class CarDecorator implements CarDecorator {
    protected car: CarInterface;

    constructor(car: CarInterface) {
        this.car = car;
    }

    public assemble():void {
        this.car.assemble();
    }
}