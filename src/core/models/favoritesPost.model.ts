import { User } from "./user.model";
import { Post } from "./post.model";

export class FavoritesPost {
  id: number = 0;
  user_id: number = 0;
  post_id: number = 0;
  user: User = new User;
  post: Post = new Post;
}
