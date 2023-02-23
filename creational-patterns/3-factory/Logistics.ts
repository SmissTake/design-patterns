import { Transport, Truck, Ship } from './Transport';
abstract class Logistics {
    public abstract createTransport(): Transport;

    public planDelivery(): void {
        const transport = this.createTransport();
        transport.deliver();
    }
}

export class RoadLogistics extends Logistics {
    public createTransport(): Transport {
        return new Truck();
    }
}

export class SeaLogistics extends Logistics {
    public createTransport(): Transport {
        return new Ship();
    }
}