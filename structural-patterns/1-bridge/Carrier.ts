export interface Carrier {
    send():void;
}

export class Mail implements Carrier {
    public send(): void {
        console.log("Envoi par email");
    }
}

export class Twitter implements Carrier {
    public send(): void {
        console.log("Envoi par Twitter");
    }
}