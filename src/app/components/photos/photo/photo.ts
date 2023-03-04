export interface Photo {
  id: number;
  url: string;
  postDate: Date;
  description: string;
  allowComments: boolean;
  likes: number;
  comments: number;
  userId: number;
}
