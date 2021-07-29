import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Like } from "../apps/entities/like";


@Injectable({
    providedIn: 'root'
  })
export class LikeService {
    urlPub = 'http://54.37.155.0:3000/like';
    constructor(private Http: HttpClient) { }

    listlikes() {
      return this.Http.get<Like[]>(this.urlPub + '/list');
      }
      createComment(like:Like){
      
          
        console.log("we are now in the service we will parse to the controller")
        return this.Http.post<Comment>("http://54.37.155.0:3000/like/add/", like);
        }
    listLikeById(id){
        return this.Http.get<Comment[]>(this.urlPub + '/list/'+id);
    } 
    listLikeByUserPub(idpub,iduser){
        return this.Http.get<number>(this.urlPub+"/find/"+idpub+"/"+iduser);
    }

    deleteLike(id){
        return this.Http.delete(this.urlPub+"/delete/"+id);
    }

    getLikeNumber(idpub):Observable<number>{
            return this.Http.get<number>(this.urlPub+"/nlike/"+idpub);
    }
}