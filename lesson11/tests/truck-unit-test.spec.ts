import { expect } from 'chai';
import sinon from 'sinon';
import { Truck } from '../src/truck';

describe('Truck Class with Mocks', () => {
    let truck: Truck;

    beforeEach(() => {
        truck = new Truck();
    });

    it('should mock accelerate method', () => {
        const mockAccelerate = sinon.stub(truck, 'accelerate').callsFake(() => {
            truck.setSpeed(30);
            truck['status'] = 'Truck is accelerating heavily.';
        });
        truck.accelerate();
        expect(truck.getSpeed()).to.equal(30);
        expect(truck.getStatus()).to.equal('Truck is accelerating heavily.');
        mockAccelerate.restore();
    });

    it('should mock brake method', () => {
        const mockBrake = sinon.stub(truck, 'brake').callsFake(() => {
            truck.setSpeed(5);
            truck['status'] = 'Truck is braking with difficulty.';
        });
        truck.setSpeed(50);
        truck.brake();
        expect(truck.getSpeed()).to.equal(5);
        expect(truck.getStatus()).to.equal('Truck is braking with difficulty.');
        mockBrake.restore();
    });

    it('should start the engine', () => {
        truck.startEngine();
        expect(truck.getStatus()).to.equal('Truck engine started.');
    });

    it('should stop the engine', () => {
        truck.stopEngine();
        expect(truck.getStatus()).to.equal('Truck engine stopped.');
    });

    it('should allow setting and getting name', () => {
        truck.setName('Heavy Truck');
        expect(truck.getName()).to.equal('Heavy Truck');
    });

    it('should mock move method', () => {
        const mockMove = sinon.stub(truck, 'move').callsFake(() => {
            truck['status'] = `Truck is moving at ${truck.getSpeed()} km/h.`;
        });
        truck.setSpeed(40);
        truck.move();
        expect(truck.getStatus()).to.equal('Truck is moving at 40 km/h.');
        mockMove.restore();
    });

    it('should not allow negative speed', () => {
        truck.setSpeed(-15);
        expect(truck.getSpeed()).to.be.at.least(0);
    });

    it('should set speed correctly', () => {
        truck.setSpeed(70);
        expect(truck.getSpeed()).to.equal(70);
    });

    it('should ensure two different truck objects have independent properties', () => {
        const truck1 = new Truck();
        const truck2 = new Truck();
        truck1.setSpeed(80);
        expect(truck2.getSpeed()).to.equal(0);
    });

    it('should verify object modification does not affect other instances', () => {
        const truckA = new Truck();
        const truckB = new Truck();
        truckA.setName('Big Truck');
        expect(truckB.getName()).to.not.equal('Big Truck');
    });
});
