import { Post } from "./Post";
import { Pub } from "./Pub";
import { User } from "./user";

export class Comment { 
    id: number;
    content: string;
    created_at:Date;
    updated_at	:Date;
    pub:Pub;
    user:User;
    public constructor() {
     
     
     }
  }