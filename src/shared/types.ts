export type TComment = {
    id: number;
    created: Date;
    text: string;
    author: number;
    parent: number | null;
    likes: number;
    children?: any[];
}

export type TSetTotalLikes = (prevLikes: (prevLikes: number) => number)=> void
