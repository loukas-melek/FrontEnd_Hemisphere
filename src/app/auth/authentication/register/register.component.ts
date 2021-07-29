import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ExtraOptions, Router } from '@angular/router';
import { RequestRegister } from '../../../apps/entities/RequestRegister';
import { Role } from '../../../apps/entities/Role';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  registerReq=new RequestRegister();
  password;username;email;first:string;last:string;location;city;phone;gender;passc
  firstc:string;lastc:string;emailc;cpass;cityc;locationc;phonec;companyname;genderc;pwdc;
  passwords;usernames;emails;firsts:string;lasts:string;locations;citys;phones;genders;passcs

  constructor(private authService: AuthenticationService,private router:Router) { }

  ngOnInit(): void {
    if(this.authService.isUserLoggedIn()){
      window.alert("Already Logged In !")
      this.router.navigate(['front/home']);
    }
  }

  onSubmitUser(): void {
    this.registerReq.email=this.email;
    this.registerReq.password=this.password;
    this.registerReq.username=this.last[0].toLowerCase()+this.first.toLowerCase();
  
   this.registerReq.roles=1;
    console.log(this.registerReq.roles);
    this.registerReq.name=this.first;
    this.registerReq.lastname=this.last;
    this.registerReq.phone=this.phone;
    this.registerReq.city=this.city;
    this.registerReq.location=this.location;
    if(this.gender=="Male"){
      this.registerReq.gender=false;
    }
    if(this.gender=="Female"){
      this.registerReq.gender=true;
    }
    console.log(this.registerReq);
    this.authService.register(this.registerReq).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
    window.alert("Registration Success ! ")
    window.alert("Log Yourself In !");
    this.router.navigate(['auth/login']);
  }
  onSubmitSupervisor(): void {
    this.registerReq.email=this.emails;
    this.registerReq.password=this.passwords;
    this.registerReq.username=this.lasts[0].toLowerCase()+this.firsts.toLowerCase();
  
   this.registerReq.roles=5;
    console.log(this.registerReq.roles);
    this.registerReq.name=this.firsts;
    this.registerReq.lastname=this.lasts;
    this.registerReq.phone=this.phones;
    this.registerReq.city=this.citys;
    this.registerReq.location=this.locations;
    if(this.genders=="Male"){
      this.registerReq.gender=false;
    }
    if(this.genders=="Female"){
      this.registerReq.gender=true;
    }
    console.log(this.registerReq);
    this.authService.register(this.registerReq).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
    window.alert("Registration Success ! ")
    window.alert("Log Yourself In !");
    this.router.navigate(['auth/login']);
  }
  routme(){
    this.router.navigate(['auth/login']);
  }
  onSubmitCompany(): void {
    // let Role=Role[];
    // Role.push(3);
    console.log("compayy role trah");
    
    console.log(Role);
    this.registerReq.email=this.emailc;
    this.registerReq.password=this.pwdc;
    this.registerReq.username=this.lastc[0].toLowerCase()+this.firstc.toLowerCase();
    this.registerReq.roles=3;
    this.registerReq.name=this.firstc;
    this.registerReq.lastname=this.lastc;
    this.registerReq.city=this.cityc;
    this.registerReq.location=this.locationc;
    this.registerReq.city=this.cityc;
    if(this.genderc=="Male"){
      this.registerReq.gender=false;
    }
    if(this.genderc=="Female"){
      this.registerReq.gender=true;
    }
    console.log(this.registerReq);


    this.authService.register(this.registerReq).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
      window.alert("Registration Success ! ")
      window.alert("Log Yourself In !");
      this.router.navigate(['auth/login']);
  }



}