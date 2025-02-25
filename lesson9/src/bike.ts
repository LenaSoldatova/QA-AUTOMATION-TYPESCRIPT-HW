import { Vehicle } from './vehicle';

export class Bike extends Vehicle {
    public constructor() {
        super('Bike');
    }
    public accelerate(): void {
        this.speed += 5; this.status = `${this.name} accelerates quickly.`;
    }
    public brake(): void {
        this.speed -= 5; this.status = `${this.name} slows down easily.`;
    }
}
