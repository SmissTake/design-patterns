import { ToasterInterface } from "./ToasterInterface";

export abstract class ToasterState implements ToasterInterface {
    public insertBread(): ToasterState {
        throw new Error("Method not implemented.");
    }
    public pullLever(): ToasterState {
        throw new Error("Method not implemented.");
    }
    public ejectBread(): ToasterState {
        throw new Error("Method not implemented.");
    }
    public removeBread(): ToasterState {
        throw new Error("Method not implemented.");
    }
}