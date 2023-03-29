import { Data } from "./DataInterface";

export class DataProxy implements Data {
    private remoteData: Data;
    private localData: string;

    constructor(remoteData: Data) {
        this.remoteData = remoteData;
    }

    async getData(): Promise<string> {
        if (!this.localData) {
            this.localData = await this.remoteData.getData();
        }

        return "Cached "+this.localData;
    }
}