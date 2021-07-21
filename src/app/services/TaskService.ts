import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Task } from "../apps/entities/task";
import { TaskDto } from "../apps/entities/TaskDto";


@Injectable({
    providedIn: 'root'
  })
  export class Sprint_TaskService {
    url = 'http://localhost:3000/sprint_tasks';
    task: Task;

   constructor(private Http: HttpClient) { }
   listSprint_TaskBySprint(id) {
    return this.Http.get<Task[]>(this.url+"/task/"+id);
    }

  
      updatetask(task:Task) {

        
        console.log(task);
        return this.Http.put<Task>(this.url + '/' +task.task_id,task);
        }


        createTask(task:Task){
          console.log("add",task)
          return this.Http.post<Task>(this.url  , task);
          }
        gettaskById(id){
          return this.Http.get<TaskDto>(this.url+'/'+id);
        }

}