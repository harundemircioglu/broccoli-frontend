import { User } from "./user.model";
import { Category } from "./category.model";

export class Post {
  id: number = 0;
  user_id: number = 0;
  category_id: number = 0;
  post_header: string = "";
  post_detail: string = "";
  popularity: number = 0;
  user: User = new User;
  category: Category = new Category;
}
