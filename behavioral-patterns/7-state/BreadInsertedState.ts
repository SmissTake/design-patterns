import { ToasterState } from "./ToasterState";
import { ToastingState } from "./ToastingState";

export class BreadInsertedState extends ToasterState {
    public pullLever(): ToasterState {
        return new ToastingState();
    }
}