import { Project } from "./project";
import { Status } from "./Status";
import { Task } from "./Task";

export class Sprint { 
    sprint_id: number;
    start_date: Date;
    end_date: Date;
    status:string;
    project:Project;
    description:string;
    Sprint_Task=new Array<Task>();
    sprint_type: number;
    project_id:number;
    public constructor() {
     
     
     }
  }
 