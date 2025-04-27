export interface Post {
        id?: string,
        title: string,
        img:string,
        description: string,
        comments?: Comment[],
}
