import { Observer } from './Observer';

export interface SubjectInterface {
    subscribe(observer: Observer):void
    unsubscribe(observer: Observer):void
    notify(news:String):void
}