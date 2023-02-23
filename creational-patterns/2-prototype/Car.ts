export class Car {
    private price: number;
    private model: string;
    private brand: string;

    public constructor(price: number, model: string, brand: string) {
        this.price = price;
        this.model = model;
        this.brand = brand;
    }

    public clone(): Car {
        const clone = Object.create(this);
        return clone;
    }

    public setModel(model: string): void {
        this.model = model;
    }

    public getModel(): string {
        return this.model;
    }
}