export abstract class Transport {
    public mean:string; //means of transport = moyen de transport

    public constructor(mean:string){
        this.mean = mean;
    }

    public deliver(): void {
        console.log(`Delivering by ${this.mean}`);
    }
}

export class Truck extends Transport {
    public constructor(){
        super("Land Delivery");
    }
}

export class Ship extends Transport {
    public constructor(){
        super("Sea Delivery");
    }
}