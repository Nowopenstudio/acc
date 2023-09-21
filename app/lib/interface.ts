export interface Post{
    title: string;
    overview: string;
    content: any;
    cover:any;
    _id: string;
    slug: {
        current:string
    };
    _createdAt:string;
}