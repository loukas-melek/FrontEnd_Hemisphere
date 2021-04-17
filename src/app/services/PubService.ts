import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pub } from "../apps/entities/Pub";

@Injectable({
    providedIn: 'root'
  })
export class PubService {
    urlPub = 'http://localhost:3000/pub';
    constructor(private Http: HttpClient) { }

    listPubs() {
      return this.Http.get<Pub[]>(this.urlPub + '/list');
      }
      createPub(pub){
        console.log("we are now in the service we will parse to the controller")
        return this.Http.post<Pub>("http://localhost:3000/pub/add", pub);
        }
    getPubById(id){
      return this.Http.get<Pub>(this.urlPub+'/'+id);
    }
    updatePub(id:any,pub:Pub){
      return this.Http.put<Pub>(this.urlPub+"/update/"+id,pub);
    }
    listPubsByUser(id){
      return this.Http.get<Pub[]>(this.urlPub+"/user/"+id);
    }
}