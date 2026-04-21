export interface Post {
    _id: string;
    title: string;
    content: string;
    tags: string[];
    author: string;
    authorName: string;
    authorAvatar: string;
    likesCount: number;
    commentsCount: number;
    isPublished: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

  export interface PostsResponse {
    success: boolean;
    count: number;
    posts: Post[];
  }