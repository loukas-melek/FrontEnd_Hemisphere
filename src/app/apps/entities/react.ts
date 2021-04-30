import { Post } from "./Post";
import { User } from "./user";
import { Comment } from "./Comment";


export class React { 
    id: number;
    date: Date;
    nlike:number;
    comment:Comment;
    user:User;
    public constructor() {
     this.nlike=0;
     }
  }