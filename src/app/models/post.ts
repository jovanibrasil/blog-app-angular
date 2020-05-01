export interface Post {
  bannerId: string;
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