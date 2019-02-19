export interface Post {
    id: number;
    title: string;
    date: Date;
    lastUpdateDate: Date;
    summary: string;
    body: string;
    userId: number;
}