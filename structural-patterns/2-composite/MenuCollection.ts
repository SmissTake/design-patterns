import { MenuInterface } from "./MenuInterface";

export class MenuCollection implements MenuInterface {
    private name: string;
    private menuItems: MenuInterface[];

    constructor(name: string) {
        this.name = name;
        this.menuItems = [];
    }

    public add(menuItem: MenuInterface): void {
        this.menuItems.push(menuItem);
    }

    public remove(menuItem: MenuInterface): void {
        const index = this.menuItems.indexOf(menuItem);
        if (index > -1) {
            this.menuItems.splice(index, 1);
        }
    }

    public display(depth: number): void {
        console.log(`${"-".repeat(depth)}${this.name}`);
        this.menuItems.forEach((menuItem) => menuItem.display(depth + 2));
    }
}