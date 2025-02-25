import { expect } from 'chai';
import { Car } from '../src/car';

describe('Car Class', () => {
    let car: Car;

    beforeEach(() => {
        car = new Car();
    });

    test('should start the engine', () => {
        car.startEngine();
        expect(car.getStatus()).equal('Car engine started.');
    });

    test('should stop the engine', () => {
        car.stopEngine();
        expect(car.getStatus()).equal('Car engine stopped.');
    });

    test('should accelerate properly', () => {
        car.accelerate();
        expect(car.getSpeed()).equal(7);
        expect(car.getStatus()).equal('Car accelerates smoothly.');
    });

    test('should brake properly', () => {
        car.setSpeed(10);
        car.brake();
        expect(car.getSpeed()).equal(3);
        expect(car.getStatus()).equal('Car stops efficiently.');
    });

    test('should not have negative speed', () => {
        car.setSpeed(0);
        car.brake();
        expect(car.getSpeed()).greaterThanOrEqual(0);
    });

    test('should set and get name correctly', () => {
        car.setName('Sports Car');
        expect(car.getName()).equal('Sports Car');
    });

    test('should not exceed a max speed limit', () => {
        for (let i = 0; i < 100; i++) {
            car.accelerate();
        }
        expect(car.getSpeed()).lessThanOrEqual(300); // if max speed - 300
    });
});