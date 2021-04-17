import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'http://localhost:3000/users/';
const USER_KEY = 'auth-user';


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
    
    return this.httpClient.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }

    isUserLoggedIn() {
    let user = !!this.tokenService.getToken();
    console.log(user);
    
    console.log(!(user === null))
    return !(user === null)
    }
    logOut() {
    sessionStorage.removeItem('auth-user')
    }
}
