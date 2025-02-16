import { Post } from './interfaces';
export abstract class BaseEntity {
    public abstract display(): void;
}

export class PostEntity extends BaseEntity {
    public constructor(private readonly post: Post) {
        super();
    }

    public display(): void {
        console.log(`${this.post.id}: ${this.post.title}`);
    }
}
