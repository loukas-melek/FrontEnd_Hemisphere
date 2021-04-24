import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { id } from "@swimlane/ngx-charts";
import { Observable } from "rxjs";
import { RequestLogin } from "../apps/entities/RequestLogin";
import { User } from "../apps/entities/user";

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
    url = 'http://localhost:3000/users';
    user: any;
    role_id:any;
   constructor(private Http: HttpClient) { }
   whoami(){
     return this.Http.get<User>(this.url+'/me')
   }
   updateUser(id,user){
     console.log(id);
     console.log(user);
     
     return this.Http.put<User>(this.url+"/update/"+id,user);
   }
   listUsers() {
    return this.Http.get<any[]>(this.url + '/list');
    }
    checkPass(id,password:string){
      console.log(password);
      console.log(id);
      
      return this.Http.post<boolean>(this.url+"/check/"+id ,password);
    }
    public  getUserByEmail(username):Observable<any>{
      //     let username = sessionStorage.getItem('username');
          this.user=this.Http.get(this.url + '/byEmail/'+username);
              
         
      //     console.log(this.user);
      //     console.log("in user service");
      //     console.log(username);
      //     console.log("in user service");
          return this.user;
   }
  //  getRoleIdByUserId(user_id):Observable<any>{
  //   this.role_id=this.Http.get(this.url + '/role/'+user_id);

  //   return this.role_id;
  //  }
}