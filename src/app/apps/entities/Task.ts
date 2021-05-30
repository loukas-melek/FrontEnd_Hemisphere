import { Periority } from "./priority";
import { Sprint } from "./sprint";

export class Task { 
    task_id: number;
    task_type: Date;
    status:string;
    duration:number;
    priority:Periority;
    description:string;
    is_done:number;
    start_date: Date;
    end_date: Date;
    sprint=new Sprint();
    public constructor() {
     
     
     }
  }
