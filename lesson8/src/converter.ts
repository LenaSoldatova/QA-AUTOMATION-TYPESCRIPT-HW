import { Post } from './interfaces';
export class PostSummary {
    public id: number;
    public title: string;

    public constructor(post: Post) {
        this.id = post.id;
        this.title = post.title;
    }

    public printSummary(): void {
        console.log(`Post ID: ${this.id}, Title: ${this.title}`);
    }
}
