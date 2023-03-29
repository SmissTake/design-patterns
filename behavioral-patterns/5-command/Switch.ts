import { Command } from './CommandInterface';

export class Switch {
    private history: Command[] = [];

    public storeAndExecute(cmd: Command): boolean {
        this.history.push(cmd);
        return cmd.execute();
    }
}