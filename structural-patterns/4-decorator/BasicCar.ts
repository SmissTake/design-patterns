import { CarInterface } from "./CarInterface";

export class BasicCar implements CarInterface {
    public assemble():void {
        console.log("Basic Car");
    }
}