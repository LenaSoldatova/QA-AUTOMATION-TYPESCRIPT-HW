export interface IVehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
    getName(): string;
    setName(name: string): void;
    getStatus(): string;
    getSpeed(): number;
    setSpeed(speed: number): void;
}
