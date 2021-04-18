import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { LoginModule } from './login/login.module';
import { AuthenticationComponent } from './authentication.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { authInterceptorProviders } from './services/basic-auth-interceptor.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptorService } from './services/error-interceptor.service';


@NgModule({
  declarations: [ AuthenticationComponent,RegisterComponent],
  imports: [
    LoginModule, 
    CommonModule,
    AuthenticationRoutingModule,
    ThemeModule,
    NgbModule,
    FormsModule
  ],
  providers:[
    authInterceptorProviders,{provide: HTTP_INTERCEPTORS, useClass:ErrorInterceptorService , multi: true}
  ]
})
export class AuthenticationModule { }
