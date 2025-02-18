import { PostEntity } from './abstraction';
import { fetchPost } from './api';

async function main(): Promise<void> {
    const post = await fetchPost(1);
    const postEntity = new PostEntity(post);
    postEntity.setPerson('Olena', 25);
    postEntity.displayInfo();
}

(async () => {
    await main();
})();
