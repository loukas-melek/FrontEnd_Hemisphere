import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Comment } from "../apps/entities/Comment";
import { Post } from "../apps/entities/Post";

@Injectable({
    providedIn: 'root'
  })
export class CommentService {
    urlPub = 'http://54.37.155.0:3000/comment';
    constructor(private Http: HttpClient) { }

    listComments() {
      return this.Http.get<Comment[]>(this.urlPub + '/list');
      }
      createComment(comment:Comment){
          console.log(comment.created_at);
          
        console.log("we are now in the service we will parse to the controller")
        console.log(comment.general_Post);
        
        return this.Http.post<Comment>("http://54.37.155.0:3000/comment/add/", comment);
        }
    listCommentsByPub(id){
        return this.Http.get<Comment[]>(this.urlPub + '/list/'+id);
    } 
    numberComments(id){
      return this.Http.get<number>(this.urlPub+'/count/'+id);
    }
    listReplies(id){
      return this.Http.get<Comment[]>(this.urlPub+"/replies/"+id);
    }
}