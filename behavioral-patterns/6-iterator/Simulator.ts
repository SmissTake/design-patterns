import { Collection } from "./Collection";

let collection = new Collection();
collection.addItem("First Item");
collection.addItem("Second Item");
collection.addItem("Third Item");

let iterator = collection.getIterator();

while (iterator.hasNext()) {
    console.log(iterator.next());
}