import { Carrier } from './Carrier';

export class Message {
    public contenu:string;
    protected sender:Carrier;

    constructor(contenu:string, sender:Carrier){
        this.contenu = contenu;
        this.sender = sender;
    }

    public send():void{
        this.sender.send();
    }
}