import { Project } from "./project";
import { Status } from "./Status";
import { Task } from "./Task";
import { TaskDto } from "./TaskDto";

export class SprintDto { 
    sprint_id: number;
    start_date: Date;
    end_date: Date;
    status:string;
    description:string;
    sprintsTask=new Array<TaskDto>();
    sprint_type: number;
    toggle:boolean;
    public constructor() {
        this.toggle=false;
     
     }
  }