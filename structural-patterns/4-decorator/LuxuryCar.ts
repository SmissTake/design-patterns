import { CarInterface } from "./CarInterface";
import { CarDecorator } from "./CarDecorator";

export class LuxuryCar extends CarDecorator {
    constructor(car: CarInterface) {
        super(car);
    }

    public assemble():void {
        console.log("Adding features of Luxury Car");
    }
}