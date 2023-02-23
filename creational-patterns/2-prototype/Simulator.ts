import { Car } from './Car';

const car = new Car(1000, 'A4', 'Audi');
const car2 = car.clone();

car2.setModel('A5');

console.log(car.getModel()); // A4
console.log(car2.getModel()); // A5