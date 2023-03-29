import { Tesla } from './Tesla';
import { ElectricCarAdapter } from './ElectricCarAdapter';

const tesla = new Tesla();
const teslaAdapter = new ElectricCarAdapter(tesla);

teslaAdapter.accelerate();
console.log(teslaAdapter.speed);
teslaAdapter.brake();
console.log(teslaAdapter.speed);
teslaAdapter.accelerate();
console.log(teslaAdapter.speed);
teslaAdapter.brake();

console.log(tesla.charge);

tesla.chargeCar();

console.log(teslaAdapter.speed);

console.log(tesla.charge);