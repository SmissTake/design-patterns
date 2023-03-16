import { MenuInterface } from "./MenuInterface";

export class MenuItem implements MenuInterface {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public display(depth: number): void {
        console.log(`${"-".repeat(depth)}${this.name}`);
    }
}