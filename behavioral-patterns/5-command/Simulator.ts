import { Light } from './Light';
import { FlipUpCommand } from './FlipUpCommand';
import { FlipDownCommand } from './FlipDownCommand';
import { Switch } from './Switch';


const light = new Light();
const switchUp = new FlipUpCommand(light);
const switchDown = new FlipDownCommand(light);

const s = new Switch();

if (s.storeAndExecute(switchUp)) {
    s.storeAndExecute(switchDown);
}