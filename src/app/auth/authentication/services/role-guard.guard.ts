import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class RoleGuard implements CanActivate {
 

  constructor(private _authService: AuthenticationService, private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const user = this._authService.decode();
    console.log(user);
 
    console.log("hetha elm role guard");
    
    if (user.auth[0].authority === next.data.role) {
      return true;
    }
    // navigate to not found page
    window.alert("Access denied !")
    this._router.navigate(['/front/home']);
    return false;
  
  }

}