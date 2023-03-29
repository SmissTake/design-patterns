import { Data } from './DataInterface';

export class RemoteData implements Data {
    async getData(): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Returning data');
            }, 2000);
        });
    }
}