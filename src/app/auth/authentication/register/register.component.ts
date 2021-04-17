import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { RequestRegister } from '../../../apps/entities/RequestRegister';
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
  password;username;email;first;last;
  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.registerReq.email=this.email;
    this.registerReq.password=this.password;
    this.registerReq.username=this.first+" "+this.last;
    this.registerReq.roles="student"
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
  }
}
