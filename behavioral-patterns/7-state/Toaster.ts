import { ToasterInterface } from "./ToasterInterface";
import { ToasterState } from "./ToasterState";
import { IdleState } from "./IdleState";

export class Toaster implements ToasterInterface {

    private _state: ToasterState = new IdleState();

    constructor() {
        this.logCurrentState();
    }

    public insertBread(): void {
        this._state = this._state.insertBread();
        this.logCurrentState();
    }

    public pullLever(): void {
        this._state = this._state.pullLever();
        this.logCurrentState();
    }

    public ejectBread(): void {
        this._state = this._state.ejectBread();
        this.logCurrentState();
    }

    public removeBread(): void {
        this._state = this._state.removeBread();
        this.logCurrentState();
    }

    private logCurrentState(): void {
        console.log(this._state);
    }
}