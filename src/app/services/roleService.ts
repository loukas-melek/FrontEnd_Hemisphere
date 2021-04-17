import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Role } from "../apps/entities/role";

@Injectable({
    providedIn: 'root'
  })
  export class RoleService {
    url = 'http://localhost:3000/roles/';
    user: any;
    role_id:any;
   constructor(private Http: HttpClient) { }
   listroles() {
    return this.Http.get<any[]>(this.url + 'list');
    }
    getRoleById(id): Observable<any>{
        return this.Http.get(this.url + id);
    }
    getRoleByUserId(user_id){
        return this.Http.get(this.url +"userrole/" +user_id);
    }
}