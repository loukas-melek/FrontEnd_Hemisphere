import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { LoginModule } from './login/login.module';
import { AuthenticationComponent } from './authentication.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [ AuthenticationComponent,RegisterComponent],
  imports: [
    LoginModule, 
    CommonModule,
    AuthenticationRoutingModule,
    ThemeModule,
    NgbModule,
    FormsModule
  ]
})
export class AuthenticationModule { }
