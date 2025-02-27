import { expect } from 'chai';
import sinon from 'sinon';
import { Car } from '../src/car';

describe('Car Class with Mocks', () => {
    let car: Car;

    beforeEach(() => {
        car = new Car();
    });

    it('should mock accelerate method', () => {
        const mockAccelerate = sinon.stub(car, 'accelerate').callsFake(() => {
            car.setSpeed(50);
            car['status'] = 'Car is accelerating.';
        });
        car.accelerate();
        expect(car.getSpeed()).to.equal(50);
        expect(car.getStatus()).to.equal('Car is accelerating.');
        mockAccelerate.restore();
    });

    it('should mock brake method', () => {
        car.setSpeed(60);
        const mockBrake = sinon.stub(car, 'brake').callsFake(() => {
            car.setSpeed(10);
            car['status'] = 'Car is braking.';
        });
        car.brake();
        expect(car.getSpeed()).to.equal(10);
        expect(car.getStatus()).to.equal('Car is braking.');
        mockBrake.restore();
    });

    it('should start the engine', () => {
        car.startEngine();
        expect(car.getStatus()).to.equal('Car engine started.');
    });

    it('should stop the engine', () => {
        car.stopEngine();
        expect(car.getStatus()).to.equal('Car engine stopped.');
    });

    it('should allow setting and getting name', () => {
        car.setName('Test Car');
        expect(car.getName()).to.equal('Test Car');
    });
});
