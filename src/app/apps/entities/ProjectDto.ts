import { CategorieOffer } from "./CategorieOffer";

import { SprintDto } from "./SprintDto";

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