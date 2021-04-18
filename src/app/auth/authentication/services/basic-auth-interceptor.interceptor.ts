import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class BasicAuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private token: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    console.log("fl interceptor");
    console.log(req);
    
    const token = this.token.getToken();
    if (token != null) {
      req = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    console.log(req);
    
    return next.handle(req);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptorInterceptor, multi: true }
];
/*
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{
constructor() { }
intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
let currentToken = localStorage.getItem('token');
if (currentToken) {
request = request.clone({
setHeaders: {
Authorization: `${currentToken}`
}
});
}
return next.handle(request);
}
}

*/