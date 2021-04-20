import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardStudent implements CanActivate {
  constructor(private router: Router,
    private authService: AuthenticationService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if (this.authService.isStudentLoggedIn())
      return true;
      this.router.navigate(['auth/login']);
      return false;
  }
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   let url: string = state.url;
  //   return this.checkUserLogin(next, url);
  // }
  // canActivateChild(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return this.canActivate(next, state);
  // }
  // canDeactivate(
  //   component: unknown,
  //   currentRoute: ActivatedRouteSnapshot,
  //   currentState: RouterStateSnapshot,
  //   nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  // canLoad(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }

  // checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
  //   if (this.authService.isUserLoggedIn()) {
  //     const userRole = this.authService.getMyRole();
  //     if (route.data.role && route.data.role.indexOf(userRole) === -1) {
  //       this.router.navigate(['/front/home']);
  //       return false;
  //     }
  //     return true;
  //   }

  //   this.router.navigate(['/front/home']);
  //   return false;
  // }
} 
  

