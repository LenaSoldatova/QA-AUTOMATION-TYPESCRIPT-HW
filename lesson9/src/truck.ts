import { IVehicle } from './ivehicle';

export class Truck implements IVehicle {
    private name = 'Truck';
    private status = '';
    private speed = 0;

    public startEngine(): void {
        this.status = `${this.name} engine started.`;
    }
    public stopEngine(): void {
        this.status = `${this.name} engine stopped.`;
    }
    public move(): void {
        this.status = `${this.name} is moving at ${this.speed} km/h.`;
    }
    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }
    public getStatus(): string {
        return this.status;
    }
    public getSpeed(): number {
        return this.speed;
    }
    public setSpeed(speed: number): void {
        this.speed = speed;
    }
}
