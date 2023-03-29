import { IteratorP } from './Iterator';

export class Collection {
    private _items: any[] = [];

    public getIterator(): IteratorP {
        return new IteratorP(this._items);
    }

    public addItem(item: any): void {
        this._items.push(item);
    }
}