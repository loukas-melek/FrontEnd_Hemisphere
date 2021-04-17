import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestLogin } from '../../../apps/entities/RequestLogin';
import { AuthenticationService } from '../services/authentication.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  credentiels=new RequestLogin();
  constructor(private authService:AuthenticationService, private tokenStorage: TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  onSubmit() {
    console.log("test aal form chfih bedhabt");
    console.log(this.form.password);
    console.log(this.form.username);
    this.credentiels.password=this.form.password;
    this.credentiels.username=this.form.username;
    this.authService.login(this.credentiels).subscribe(
      
      
      data => {
        console.log("amalna subscribe jawna behy");
        console.log(data);
        //this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveToken(data);
        this.tokenStorage.saveUser(data);
        console.log("nchoufou el token trah");
        
        //console.log(data.accessToken);
        
         this.isLoginFailed = false;
         this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
         
      },
       err => {
        this.errorMessage = err.error.message;
       this.isLoginFailed = true;
       }
    );
    this.router.navigate(['dashboard/workflow']);
  }

  reloadPage(): void {
    window.location.reload();
  }
}
