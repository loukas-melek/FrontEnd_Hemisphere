import { CommonModule } from '@angular/common';



import { CUSTOM_ELEMENTS_SCHEMA, Injectable, NgModule } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResizableModule } from 'angular-resizable-element';

import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';



import { PickerModule } from '@ctrl/ngx-emoji-mart';


import { ThemeModule } from '../@theme/theme.module';
import { FrontRoutingModule } from './front-routing.module';
import { FrontComponent } from './front.component';
import { HomeModule } from './home/home.module';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';
import { ProfileSettingsModule } from './profile-settings/profile-settings.module';




@NgModule({
  declarations: [FrontComponent
    ],
  imports: [
    ProfileSettingsModule,
    ProfileModule,
    FrontRoutingModule,
    ThemeModule,
    HomeModule,
    CommonModule,
    HttpClientModule,
    MatPaginatorModule,
    CarouselModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatStepperModule,
    MatTabsModule,
    MatDatepickerModule,
    MatCheckboxModule,
    ChartsModule,
    NgbModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    ResizableModule,
    FormsModule,
    ScrollingModule,
    MatTableModule,
    MatMenuModule,
    PickerModule
  ]
})
export class FrontModule { }
 