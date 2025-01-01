export interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
}

export interface Comment {
  id: number;
  text: string;
  author: string;
}