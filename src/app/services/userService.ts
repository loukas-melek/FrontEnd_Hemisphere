import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
    url = 'http://localhost:3000/users';
    user: any;
    role_id:any;
   constructor(private Http: HttpClient) { }
   listUsers() {
    return this.Http.get<any[]>(this.url + '/list');
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