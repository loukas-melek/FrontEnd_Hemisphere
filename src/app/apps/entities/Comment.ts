import { Post } from "./Post";
import { GeneralPost } from "./General_Post";
import { User } from "./user";

export class Comment { 
    id: number;
    content: string;
    created_at:Date;
    updated_at	:Date;
    pub:GeneralPost;
;
    user:User;
    public constructor() {
     
     
     }
  }