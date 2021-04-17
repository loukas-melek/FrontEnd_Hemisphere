import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const AUTH_API = 'http://localhost:3000/users/';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) { }


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

  
signin(username:string,password:string){
  let pa=new HttpParams()
  .set('username',username)
  .set('password',password)
  console.log(username);
  console.log(password);

  console.log(pa);
  
  
  return this.httpClient.post("http://localhost:3000/users/signin",{pa})
  // .pipe(
  //   userData => {
  //     sessionStorage.setItem('username', username);
  //     sessionStorage.setItem('password', password);
  //     console.log(username + " " + password);
  //     let authString = 'Basic ' + btoa(username + ':' + password);
  //     sessionStorage.setItem('basicauth', authString);
     
  //     return userData;
  //     }
  //     )
  
}

  authenticate(username:any, password:any) {  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
 return this.httpClient.post('http://localhost:3000/users/signin', { headers }).pipe
(
 map(
 userData => {
 sessionStorage.setItem('username', username);
 sessionStorage.setItem('password', password);
 console.log(username + " " + password);
 let authString = 'Basic ' + btoa(username + ':' + password);
 sessionStorage.setItem('basicauth', authString);

 return userData;
 }
 )
 );
    }
    isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
    }
    logOut() {
    sessionStorage.removeItem('username')
    }
}
