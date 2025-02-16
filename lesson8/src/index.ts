import { fetchPost } from './api';
import { PostSummary } from './converter';
import { PostEntity } from './abstraction';

async function main(): Promise<void> {
    try {
        const post = await fetchPost(1);
        const summary = new PostSummary(post);
        summary.printSummary();

        const entity = new PostEntity(post);
        entity.display();
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
