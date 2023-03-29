import { RemoteData } from './RemoteData';
import { DataProxy } from './DataProxy';

const remoteData = new RemoteData();
const dataProxy = new DataProxy(remoteData);

remoteData.getData().then((data) => {
    console.log(data);
});

dataProxy.getData().then((data) => {
    console.log(data);
});