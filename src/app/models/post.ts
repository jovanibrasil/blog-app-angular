export interface Post {
    id: number;
    title: string;
    creationDate: Date;
    lastUpdateDate: Date;
    summary: string;
    body: string;
    userName: string;
    tags: string[];
    bannerUrl: string;
}