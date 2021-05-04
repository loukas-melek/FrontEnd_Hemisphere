/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './test/test.component';
import { AuthenticationModule } from './auth/authentication/authentication.module';
import { FrontModule } from './front/front.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CompanyviewModule } from './companyview/companyview.module';
import { StudentviewModule } from './studentview/studentview.module';
import { AppMaterialModule } from './app-material/app-material/app-material.module';
import { RoleGuard } from './auth/authentication/services/role-guard.guard';
import { SupervisorviewModule } from './supervisorview/supervisorview.module';



@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    AppMaterialModule,
    SupervisorviewModule,
    CompanyviewModule,
    StudentviewModule,
    AuthenticationModule,
    FrontModule,
    DashboardModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NgbModule,
  ],
  exports: [
    AppMaterialModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent],
  providers:[RoleGuard],
})
export class AppModule {
}
