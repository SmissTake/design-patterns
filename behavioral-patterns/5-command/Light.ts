export class Light {
    private on: boolean = false;

    public turnOn(): boolean {
        this.on = true;
        console.log('Light is on');
        return true;
    }

    public turnOff(): boolean {
        this.on = false;
        console.log('Light is off');
        return true;
    }
}