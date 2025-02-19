import { Post } from './interfaces';

export async function fetchPost(id: number): Promise<Post> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch post');
    }
    const data: Post = await response.json();
    return data;
}
