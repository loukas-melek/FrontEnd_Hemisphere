import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { AboutComponent } from './about/about.component';
import { AppMaterialModule } from '../../app-material/app-material/app-material.module';
import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [LandingComponent, AboutComponent, HomeComponent, ContactComponent, TeamComponent, ServicesComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
