import { CategorieOffer } from "./CategorieOffer";
import { GeneralPost } from "./General_Post";
import { Profile } from "./Profile";
import { Sprint } from "./sprint";
import { SprintDto } from "./SprintDto";
import { Task } from "./Task";

export class ProjectDto{ 
    project_id: number;
    start_date: Date;
    end_date: Date;
    title:string;
    is_active:number;
    description:string;
    project_category:CategorieOffer;
    sprints=new Array<SprintDto>() 

    public constructor() {
     
     
     }
  }