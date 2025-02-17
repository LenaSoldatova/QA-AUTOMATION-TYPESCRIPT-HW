import { Post } from './interfaces';

export class PostShortInfo {
    public userId: number;
    public title: string;
    public personName: string;

    public constructor(post: Post) {
        this.userId = post.userId;
        this.title = post.title;
        this.personName = post.person.name;
    }

    public getShortInfo(): string {
        return `Post by ${this.personName} (User ID: ${this.userId}): ${this.title}`;
    }
}
