import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Experience } from "../apps/entities/experience";
import { GeneralPost } from "../apps/entities/General_Post";

@Injectable({
    providedIn: 'root'
  })
export class ExperienceService {
    urlPub = 'http://54.37.155.0:3000/experience';
    constructor(private Http: HttpClient) { }

    listExperience() {
      return this.Http.get<Experience[]>(this.urlPub + '/list');
      }
      createExperience(experience:Experience){
       
        return this.Http.post<Experience>(this.urlPub+"/add", experience);
        }
    
    updateExperience(experience:Experience){
      console.log("exp service !!!");
      console.log(experience);
      
      return this.Http.put<Experience>(this.urlPub+"/update/"+experience.id,experience);
    }
    listExperienceByUser(id){
      return this.Http.get<Experience[]>(this.urlPub+"/profile/"+id);
    }
    delete(id){
      return this.Http.delete(this.urlPub+"/delete/"+id);
    }
}