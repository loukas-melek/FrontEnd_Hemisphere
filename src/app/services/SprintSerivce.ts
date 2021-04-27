import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Project } from "../apps/entities/project";
import { Sprint } from "../apps/entities/sprint";


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
        return this.Http.get<Project[]>("http://localhost:3000/project"+"/getall")
      }

}