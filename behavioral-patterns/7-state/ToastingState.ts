import { ToasterState } from "./ToasterState";
import { BreadEjectedState } from "./BreadEjectedState";

export class ToastingState extends ToasterState {
    public ejectBread(): ToasterState {
        return new BreadEjectedState();
    }
}