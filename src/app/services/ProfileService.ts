import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "../apps/entities/Post";
import { Profile } from "../apps/entities/Profile";
import { User } from "../apps/entities/user";
import { UserService } from "./userService";

@Injectable({
    providedIn: 'root'
  })
export class ProfileService {
    user=new User();
    urlPub = 'http://localhost:3000/profile';
    constructor(private Http: HttpClient) { }

 
        getProfileByUserId(id){
            return this.Http.get<Profile>(this.urlPub+'/user/'+id)
        }
        updateprofile(id,profile:Profile){
            return this.Http.put<Profile>(this.urlPub+"/update/"+id,profile)
        }
}