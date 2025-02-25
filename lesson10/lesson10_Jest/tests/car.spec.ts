import { Car } from "../src/car";
import { expect } from '@jest/globals';

describe('Car Class', () => {
    let car: Car;

    beforeEach(() => {
        car = new Car();
    });

    test('should start the engine', () => {
        car.startEngine();
        expect(car.getStatus()).toBe('Car engine started.');
    });

    test('should stop the engine', () => {
        car.stopEngine();
        expect(car.getStatus()).toBe('Car engine stopped.');
    });

    test('should accelerate properly', () => {
        car.accelerate();
        expect(car.getSpeed()).toBe(7);
        expect(car.getStatus()).toBe('Car accelerates smoothly.');
    });

    test('should brake properly', () => {
        car.setSpeed(10);
        car.brake();
        expect(car.getSpeed()).toBe(3);
        expect(car.getStatus()).toBe('Car stops efficiently.');
    });
});