import { Toaster } from './Toaster';

//this will work
let toaster = new Toaster();
toaster.insertBread();
toaster.pullLever();
toaster.ejectBread();
toaster.removeBread();

//this will not work
let toaster2 = new Toaster();
toaster2.ejectBread();