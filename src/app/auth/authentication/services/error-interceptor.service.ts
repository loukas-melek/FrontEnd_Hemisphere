import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService  implements HttpInterceptor{
  constructor(private authenticationService:AuthenticationService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
  console.log("ErrorInterceptorService");
  return next.handle(request).pipe(catchError(err => {
  console.log("ErrorInterceptorService");
  if (err.status === 401) {
  console.log("ErrorInterceptorService 401");
 // this.authenticationService.logout();
  }
  const error = err.error.message || err.statusText;
  console.log(error);
  
  return throwError(error);
  }))
  }
}
