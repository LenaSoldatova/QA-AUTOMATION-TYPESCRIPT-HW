import { Post } from './interfaces';

export abstract class BaseEntity {
    public abstract displayInfo(): void;

    public logCreation(): void {
        console.log(`${this.constructor.name} instance created.`);
    }
    public initializePerson(person?: { name: string; age: number }): { name: string; age: number } {
        return person || { name: 'Unknown', age: 0 };
    }
}

export class PostEntity extends BaseEntity {
    public userId: number;
    public id: number;
    public details: {
        title: string;
        body: string;
    };
    public person: { name: string; age: number };

    public constructor(post: Post) {
        super();
        const { userId, id, title, body, person } = post;
        this.userId = userId;
        this.id = id;
        this.details = { title, body };
        this.person = this.initializePerson(person);
        this.logCreation();
    }

    public displayInfo(): void {
        console.log(`Post ID: ${this.id}, Title: ${this.details.title}, Author: ${this.person.name}`);
    }
    public setPerson(name: string, age: number): void {
        this.person = { name, age };
        console.log('Person updated:', this.person);
    }
}
