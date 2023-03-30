import { ToasterState } from "./ToasterState";
import { IdleState } from "./IdleState";

export class BreadEjectedState extends ToasterState {
    public removeBread(): ToasterState {
        return new IdleState();
    }
}