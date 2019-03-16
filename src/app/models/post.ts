export interface Post {
    id: number;
    title: string;
    creationDate: Date;
    lastUpdateDate: Date;
    summary: string;
    body: string;
    userId: number;
    tags: string[];
}