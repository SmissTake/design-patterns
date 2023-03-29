export class IteratorP {
    private _index: number = 0;
    private _collection: any[] = [];

    constructor(collection: any[]) {
        this._collection = collection;
    }

    public next(): any {
        return this._collection[this._index++];
    }

    public hasNext(): boolean {
        return this._index < this._collection.length;
    }
}