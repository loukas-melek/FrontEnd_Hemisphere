import { GeneralPost } from "./General_Post";
import { Profile } from "./Profile";

export class Comment { 
    id: number;
    content: string;
    created_at:Date;
    updated_at	:Date;
    general_Post:GeneralPost;
;
    profile:Profile;
    public constructor() {
     
     
     }
  }