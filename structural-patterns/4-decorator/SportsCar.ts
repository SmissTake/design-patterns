import { CarDecorator } from "./CarDecorator";
import { CarInterface } from "./CarInterface";

export class SportsCar extends CarDecorator {
    constructor(car: CarInterface) {
        super(car);
    }

    public assemble():void {
        super.assemble();
        console.log("Adding features of Sports Car.");
    }
}