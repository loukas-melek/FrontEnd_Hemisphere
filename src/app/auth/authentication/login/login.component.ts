import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestLogin } from '../../../apps/entities/RequestLogin';
import { Role } from '../../../apps/entities/role';
import { User } from '../../../apps/entities/user';
import { UserService } from '../../../services/userService';
import { AuthenticationService } from '../services/authentication.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  user:User;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role:Role
  test:string;
  roles: string[] = [];
  credentiels=new RequestLogin();
  constructor(private userService:UserService,private authService:AuthenticationService, private tokenStorage: TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.tokenStorage.getUser().roles;
    // }
    
    if(this.authService.isUserLoggedIn()){
      console.log("f west el if");
      
      console.log(this.test);
      
      // console.log(this.user.roles.toString());
      // console.log(this.test);
      
      //this.router.navigate(['front/home']);
    }
  }
  RedirectMe(){
    this.userService.whoami().subscribe(res=>{
      this.user=res;
      console.log(this.user.roles);
      this.test=this.user.roles.toString()
      console.log(this.test);
      if(this.test.includes("STUDENT")){
        this.router.navigate(['front/home']);
      }else
      if(this.test.includes("COMPANY")){
        this.router.navigate(['front/home']);
      }else
      if(this.test=="ROLE_ADMIN"){
        this.router.navigate(['front/home']);
      }
    })
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
         this.RedirectMe();
      },
       err => {
        this.errorMessage = err.error.message;
       this.isLoginFailed = true;
       }
    );
    //this.router.navigate(['dashboard/workflow']);
  }

  reloadPage(): void {
    window.location.reload();
  }
}
