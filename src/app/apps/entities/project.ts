import { CategorieOffer } from "./CategorieOffer";
import { GeneralPost } from "./General_Post";
import { Profile } from "./Profile";
import { Sprint } from "./sprint";

export class Project { 
    project_id: number;
    start_date: Date;
    end_date: Date;
    title:string;
    is_active:number;
    description:string;
    project_category:CategorieOffer;
    profile:Profile;
    update_at:Date;
    created_at:Date;
    generalpost:GeneralPost
    public constructor() {
     
     
     }
  }