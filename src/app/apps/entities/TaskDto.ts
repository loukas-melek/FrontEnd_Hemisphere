import { Sprint } from "./sprint";
import { Status } from "./Status";

export class TaskDto { 
    task_id: number;
    task_type: Date;
    status:string;
    duration:number;
    priority:number;
    description:string;
    is_done:number;
    public constructor() {
     
     
     }
  }
