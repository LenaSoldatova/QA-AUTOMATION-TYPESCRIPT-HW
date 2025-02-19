import { Vehicle } from './vehicle';

export class Truck extends Vehicle {
    public constructor() {
        super('Truck');
    }
    public accelerate(): void {
        this.speed += 3; this.status = `${this.name} accelerates slowly.`;
    }
    public brake(): void {
        this.speed -= 3; this.status = `${this.name} needs more time to stop.`;
    }
}
