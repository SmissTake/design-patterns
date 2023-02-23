import { SeaLogistics, RoadLogistics } from './Logistics';

const seaLogistics = new SeaLogistics();
seaLogistics.planDelivery();

const roadLogistics = new RoadLogistics();
roadLogistics.planDelivery();