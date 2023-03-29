import { ObserverInterface } from "./ObserverInterface";

export class Observer implements ObserverInterface {
    constructor(public readonly name:string) {}
    private feed:string[] = []; 
    update(news:string) {
        this.feed.push(news)
       console.log(`${this.name} recieved  a news`)
    }
    showFeed() {
        console.log(this.name + ":" + this.feed)
    }
}