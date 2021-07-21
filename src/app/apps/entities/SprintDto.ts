import { Periority } from "./priority";

import { TaskDto } from "./TaskDto";

export class SprintDto { 
    sprint_id: number;
    start_date: Date;
    end_date: Date;
    priority:Periority;
    status:string;
    description:string;
    sprintsTask=new Array<TaskDto>();
    sprint_type: number;
    toggle:boolean;
    public constructor() {
        this.toggle=false;
     
     }
  }