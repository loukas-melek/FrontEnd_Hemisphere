import { Project } from "./project";
import { Status } from "./Status";
import { Task } from "./Task";

export class Sprint { 
    sprint_id: number;
    start_date: Date;
    end_date: Date;
    status:string;
    project=new Project();
    description:string;
    sprint_type: number;
    project_id:number;
    public constructor() {
     
     
     }
  }
 