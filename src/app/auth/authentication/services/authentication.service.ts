import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
  constructor(private httpClient: HttpClient,private tokenService:TokenStorageService) { }


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
    let user = !!this.tokenService.getUser();
    console.log(user);
    
    console.log((user === null))
    return user;
    }
    logOut() {
    sessionStorage.removeItem('auth-user')
    }
}
