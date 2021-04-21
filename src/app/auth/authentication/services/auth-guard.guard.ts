import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  path;
  constructor(private router: Router,private route: ActivatedRoute,
    private authService: AuthenticationService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.path =this.router.getCurrentNavigation().finalUrl.toString()
      console.log(this.path);
      
      if (this.authService.isUserLoggedIn())
      return true;
      this.router.navigate(['auth/login']);
      return false;
    
  }
} 
  

