import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../../apps/entities/user';
import { UserService } from '../../../services/userService';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'http://localhost:3000/users/';
const USER_KEY = 'auth-user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user=new User();
  myRole= new String();
  constructor(private httpClient: HttpClient,private tokenService:TokenStorageService,private userService:UserService) { }


  login(credentials):Observable<any> {
    const creds = credentials.username + ":" + credentials.password;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Basic" + btoa(creds)
});

  //   let pa=new HttpParams()
  // .set('username',credentials.username)
  // .set('password',credentials.password)
  console.log(credentials);
  
  
    return this.httpClient.post(AUTH_API + 'signin',credentials, {
      headers: headers,
      responseType: 'text'
  });
  }

  register(user): Observable<any> {
    console.log("hana fl auth service");
    console.log(user);
    
    return this.httpClient.post(AUTH_API + 'signup',user)
  }
  isUserLoggedIn() {
    let user = !!this.tokenService.getToken();
    console.log(user);
    
    console.log((user === null))
    return user;
    }
    async isAdminLoggedIn() {
      if(this.isUserLoggedIn()){
      this.user=await this.getMyRole();
      console.log(this.user);
      this.myRole=this.user.roles.toString()
      console.log(this.myRole);
        if(this.myRole=="ROLE_ADMIN"){
          console.log(this.user);
          console.log(this.myRole);
          
          
          return true;
        }
      }
       return false;
     
    }
    async isStudentLoggedIn() {
      if(this.isUserLoggedIn()){
      this.user=await this.getMyRole();
      console.log(this.user);
      this.myRole=this.user.roles.toString()
      console.log(this.myRole);
        if( this.myRole=="ROLE_STUDENT"|| this.myRole=="ROLE_PREMIUM_STUDENT"){
          return  true;
        }
      }
       
        return false;
      }
      async isCompanyLoggedIn() {
        if(this.isUserLoggedIn()){
        this.user=await this.getMyRole();
        console.log(this.user);
        this.myRole=this.user.roles.toString()
        console.log(this.myRole);
          if( this.myRole=="ROLE_COMPANY"|| this.myRole=="ROLE_PREMIUM_COMPANY"){
            return  true;
          }
        }
        
          return false;
        }
          
    public  getMyRole():Promise<User>{
      return this.userService.whoami().toPromise();
   
    }
    logOut() {
    sessionStorage.removeItem('auth-user')
    }
}
function role(role: any) {
    
}

