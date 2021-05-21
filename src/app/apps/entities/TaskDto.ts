import { Periority } from "./priority";
import { Sprint } from "./sprint";
import { Status } from "./Status";

export class TaskDto { 
    task_id: number;
    task_type: Date;
    status:string;
    duration:number;
    description:string;
    is_done:number;
    priority:Periority;
    start_date: Date;
    end_date: Date;
    public constructor() {
     
     
     }
  }
