import { Comment } from "./Comment";
import { Offer } from "./offer";
import { Post } from "./Post";
import { React } from "./react";
import { SharedPost } from "./SharedPost";
import { Task } from "./Task";
import { User } from "./user";

export class Pub { 
    id: number;
    created_at:Date
    updated_at:Date
    offer:Offer;
    nlike:number;
    ncomment:number;
    nshare:number;
    comment:Comment;
    post:Post;
    task:Task;
    user:User;
    affichedate:String;
    sharedpost:SharedPost
    public constructor() {
    this.post=null;
     
     }
  }