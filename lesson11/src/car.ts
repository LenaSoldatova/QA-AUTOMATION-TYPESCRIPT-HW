import { Vehicle } from './vehicle';

export class Car extends Vehicle {
    public constructor() {
        super('Car');
    }
    public accelerate(): void {
        this.speed += 7; this.status = `${this.name} accelerates smoothly.`;
    }
    public brake(): void {
        this.speed -= 7; this.status = `${this.name} stops efficiently.`;
    }
}
