import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SharedPost } from "../apps/entities/SharedPost";

@Injectable({
    providedIn: 'root'
  })
export class SharedPostService {
    urlPub = 'http://54.37.155.0:3000/sharedpost';
    constructor(private Http: HttpClient) { }

    listSharedPosts() {
      return this.Http.get<SharedPost[]>(this.urlPub + '/list');
      } 
      createSharedPost(post,id){
        console.log("we are now in the service we will parse to the controller")
        return this.Http.post<SharedPost>("http://54.37.155.0:3000/sharedpost/add/"+id, post);
        }
        numberShares(id){
            return this.Http.get<number>(this.urlPub+'/count/'+id);
          }
}