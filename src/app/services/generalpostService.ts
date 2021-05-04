import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GeneralPost } from "../apps/entities/General_Post";

@Injectable({
    providedIn: 'root'
  })
export class GeneralPostService {
    urlPub = 'http://localhost:3000/pub';
    constructor(private Http: HttpClient) { }

    listPubs() {
      return this.Http.get<GeneralPost[]>(this.urlPub + '/list');
      }
      createPub(pub){
        console.log("we are now in the service we will parse to the controller")
        return this.Http.post<GeneralPost>("http://localhost:3000/pub/add", pub);
        }
    
    getPubById(id){
      return this.Http.get<GeneralPost>(this.urlPub+'/'+id);
    }
    updatePub(id:any,pub:GeneralPost){
      console.log("service manup");
      
      console.log(pub.offertasksolution);
      
      return this.Http.put<GeneralPost>(this.urlPub+"/update/"+id,pub);
    }
    listPubsByUser(id){
      return this.Http.get<GeneralPost[]>(this.urlPub+"/user/"+id);
    }
    delete(id){
      return this.Http.delete(this.urlPub+"/delete/"+id);
    }
}