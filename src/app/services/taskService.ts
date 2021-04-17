import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pub } from "../apps/entities/Pub";
import { Task } from "../apps/entities/Task";

@Injectable({
    providedIn: 'root'
  })
export class TaskService {
    urlPub = 'http://localhost:3000/task';
    constructor(private Http: HttpClient) { }

    listTasks() {
      return this.Http.get<Task[]>(this.urlPub + '/list');
      }
      createTask(task,id){
        console.log("id user"+id);
        console.log("task="+task);
        
        console.log("we are now in the service we will parse to the controller")
        return this.Http.post<Task>("http://localhost:3000/task/add/"+id,task);
        }
        listTasksByCategorie(categorie){
            let pa=new HttpParams();
            pa=pa.append('categorie',categorie)
            return this.Http.get<Task[]>(this.urlPub+'/filter/categorie',{params:pa})
        }
        listTasksByLocation(location){
            let pa=new HttpParams();
            pa=pa.append('categorie',location)
            return this.Http.get<Task[]>(this.urlPub+'/filter/location',{params:pa})
        }
        listTasksByCategorieLocation(categorie,location){
            let pa=new HttpParams();
            if(location==undefined&&categorie!=undefined){pa=pa.append('categorie',categorie);}
            if(location!=undefined&&categorie==undefined){pa=pa.append('location',location);}
            if(location!=undefined&&categorie!=undefined){
                if(location=='All'&&categorie!='All'){pa=pa.append('categorie',categorie);}
                if(location!='All'&&categorie=='All'){pa=pa.append('location',location);}
                if(location!='All'&&categorie!='All'){pa=pa.append('categorie',categorie);pa=pa.append('location',location);}
              } 
            return this.Http.get<Task[]>(this.urlPub+'/filter',{params:pa})
        }
        listTasksByUserId(user_id){
            return this.Http.get<Task[]>(this.urlPub+'/user/'+user_id);
          }

          taskById(id){
            return this.Http.get<Task>(this.urlPub+"/"+id);
          }
}