import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../../apps/entities/user';
import { UserService } from '../../../services/userService';
import { TokenStorageService } from './token-storage.service';
import decode from 'jwt-decode';

const AUTH_API = 'http://localhost:3000/users/';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

interface auth {
  id:number;
  authority:string;
}
interface Userr{
  Id: number;
  FullName: string;
  Email: string;
  auth:[auth];

}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user=new User();
  myRole= new String();
  state:boolean;
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
   

    decode():Userr{
      console.log(this.tokenService.getToken());
      
      console.log(decode(this.tokenService.getToken()));
      
      return decode(this.tokenService.getToken());
    }

    
          
    
    logOut() {
    sessionStorage.removeItem('auth-user')
    }
}
function role(role: any) {
    
}

