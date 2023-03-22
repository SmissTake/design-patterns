import { SportsCar } from "./SportsCar";
import { LuxuryCar } from "./LuxuryCar";
import { BasicCar } from "./BasicCar";

const mySportsCar = new SportsCar(new BasicCar());
mySportsCar.assemble();

const myLuxuryCar = new LuxuryCar(new BasicCar());
myLuxuryCar.assemble();