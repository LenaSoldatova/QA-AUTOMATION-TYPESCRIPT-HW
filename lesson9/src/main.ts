import { IVehicle } from './ivehicle';
import { Bike } from './bike';
import { Truck } from './truck';
import { Car } from './car';

function operateVehicle(vehicle: IVehicle): void {
    vehicle.startEngine();
    console.log(vehicle.getStatus());
    vehicle.setSpeed(60);
    vehicle.move();
    console.log(vehicle.getStatus());
    console.log(`Speed: ${vehicle.getSpeed()} km/h`);
    vehicle.stopEngine();
    console.log(vehicle.getStatus());
}

const bike = new Bike();
const truck = new Truck();
const car = new Car();

bike.setName('Mountain Bike');
truck.setName('Heavy Truck');
car.setName('Sports Car');

operateVehicle(bike);
operateVehicle(truck);
operateVehicle(car);
