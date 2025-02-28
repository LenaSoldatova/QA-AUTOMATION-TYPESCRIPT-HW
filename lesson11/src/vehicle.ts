export abstract class Vehicle {
    protected name: string;
    protected status = '';
    protected speed = 0;

    public constructor(name: string) {
        this.name = name;
    }

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
        this.speed = Math.max(0, speed);
    }

    public abstract accelerate(): void;
    public abstract brake(): void;
}
