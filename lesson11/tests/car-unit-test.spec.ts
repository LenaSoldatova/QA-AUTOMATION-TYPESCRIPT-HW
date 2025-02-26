import { expect } from 'chai';
import sinon from 'sinon';
import { Car } from '../src/car';

describe('Car Class with Mocks', () => {
    let car: Car;
    let mockAccelerate: sinon.SinonStub;
    let mockBrake: sinon.SinonStub;

    beforeEach(() => {
        car = new Car();
        mockAccelerate = sinon.stub(car, 'accelerate').callsFake(() => {
            car.setSpeed(50);
            car['status'] = 'Car is accelerating.';
        });
        mockBrake = sinon.stub(car, 'brake').callsFake(() => {
            car.setSpeed(10);
            car['status'] = 'Car is braking.';
        });
    });

    afterEach(() => {
        mockAccelerate.restore();
        mockBrake.restore();
    });

    it('should mock accelerate method', () => {
        car.accelerate();
        expect(car.getSpeed()).to.equal(50);
        expect(car.getStatus()).to.equal('Car is accelerating.');
    });

    it('should mock brake method', () => {
        car.setSpeed(60);
        car.brake();
        expect(car.getSpeed()).to.equal(10);
        expect(car.getStatus()).to.equal('Car is braking.');
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
