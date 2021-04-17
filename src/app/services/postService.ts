import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "../apps/entities/Post";

@Injectable({
    providedIn: 'root'
  })
export class PostService {
    urlPub = 'http://localhost:3000/post';
    constructor(private Http: HttpClient) { }

    listPosts() {
      return this.Http.get<Post[]>(this.urlPub + '/list');
      } 
      createPost(post,id){
        console.log("we are now in the service we will parse to the controller")
        return this.Http.post<Post>("http://localhost:3000/post/add/"+id, post);
        }
}