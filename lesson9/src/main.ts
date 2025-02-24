import { Vehicle } from './vehicle';
import { Bike } from './bike';
import { Truck } from './truck';
import { Car } from './car';

function operateVehicle(vehicle: Vehicle): void {
    vehicle.startEngine();
    console.log(vehicle.getStatus());
    vehicle.accelerate();
    console.log(vehicle.getStatus());
    console.log(`Speed: ${vehicle.getSpeed()} km/h`);
    vehicle.brake();
    console.log(vehicle.getStatus());
    console.log(`Speed: ${vehicle.getSpeed()} km/h`);
    vehicle.stopEngine();
    console.log(vehicle.getStatus());
}

const bike = new Bike();
const truck = new Truck();
const car = new Car();

operateVehicle(bike);
operateVehicle(truck);
operateVehicle(car);
