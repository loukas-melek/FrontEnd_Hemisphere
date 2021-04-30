import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "../apps/entities/Post";
import { Profile } from "../apps/entities/Profile";
import { Project } from "../apps/entities/project";
import { ProjectDto } from "../apps/entities/ProjectDto";
import { User } from "../apps/entities/user";
import { UserService } from "./userService";

@Injectable({
    providedIn: 'root'
  })
export class ProjectService {
    user=new User();
    urlPub = 'http://localhost:3000/project';
    constructor(private Http: HttpClient) { }

 
       createProject(project:Project){
        return this.Http.post<Project>(this.urlPub+"/add",project);
       }
       ConfirmeProject(id,students:Profile[]){
         console.log("nahna tawa fl service taa el projet");
         
         console.log(id);
         console.log(students);
         
         return this.Http.post(this.urlPub+"/confirme/"+id,students);
       }
       getByGeneralPost(id){
         return this.Http.get<Project>(this.urlPub+"/find/"+id);
       }
       findProjectByStudent(id){
        return this.Http.get<Project[]>(this.urlPub+"/student/"+id);
       }
       getall(){
         return this.Http.get<ProjectDto[]>(this.urlPub+"/getall")
       }
}