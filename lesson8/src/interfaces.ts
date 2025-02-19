export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    person: {
        name: string;
        age: number;
    };
}
