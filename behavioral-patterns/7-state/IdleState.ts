import { ToasterState } from "./ToasterState";
import { BreadInsertedState } from "./BreadInsertedState";

export class IdleState extends ToasterState {
    public insertBread(): ToasterState {
        return new BreadInsertedState();
    }
}