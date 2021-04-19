import { Comment } from "./Comment";
import { OfferTaskSolution } from "./Offer_Task_Solution";
import { Post } from "./Post";
import { Profile } from "./Profile";
    
import { SharedPost } from "./SharedPost";


export class GeneralPost { 
    id: number;
    created_at:Date
    updated_at:Date
    nlike:number;
    offertasksolution:OfferTaskSolution;
    ncomment:number;
    nshare:number;
    comment:Comment;
    post:Post;
    affichedate:String;
    sharedpost:SharedPost;
    profile:Profile;
    public constructor() {
    this.post=null;
     
     }
  }