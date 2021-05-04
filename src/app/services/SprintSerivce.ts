import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Project } from "../apps/entities/project";
import { ProjectDto } from "../apps/entities/ProjectDto";
import { Sprint } from "../apps/entities/sprint";
import { SprintDto } from "../apps/entities/SprintDto";


@Injectable({
    providedIn: 'root'
  })
  export class SprintService {
    url = 'http://localhost:3000/sprint';
    sprint: Sprint;

   constructor(private Http: HttpClient) { }
   listSprint() {
     let id=1;
    return this.Http.get<Sprint[]>(this.url+"/sprint/"+id);
    }
    getall(){
        return this.Http.get<ProjectDto[]>("http://localhost:3000/project"+"/getall")
      }
      createSprint(sprint:Sprint){
        console.log("add",sprint)
        return this.Http.post<Sprint>(this.url, sprint);
        }
        getSprintByID(id){
          return this.Http.get<SprintDto>(this.url+"/"+id);
        }
}