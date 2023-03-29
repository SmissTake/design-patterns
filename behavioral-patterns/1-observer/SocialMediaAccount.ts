import { SubjectInterface } from "./SubjectInterface";
import { Observer } from "./Observer";

export class SocialMediaAccount implements SubjectInterface {
    private obervers:Observer[] = [];
    
    subscribe(observer: Observer): void {
        this.obervers.push(observer);
    }

    unsubscribe(observer: Observer): void {
        this.obervers = this.obervers.filter((obs) => obs !== observer);
    }

    notify(news: string): void {
        this.obervers.forEach((observer => {
            observer.update(news);
        }));
    }
}