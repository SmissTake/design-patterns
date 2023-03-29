import { Command } from './CommandInterface';
import { Light } from './Light';

export class FlipDownCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    public execute(): boolean {
        return this.light.turnOff();
    }
}