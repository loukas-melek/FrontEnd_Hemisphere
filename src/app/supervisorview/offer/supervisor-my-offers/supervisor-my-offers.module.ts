import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupervisorMyOffersComponent } from './supervisor-my-offers.component';
import { AppMaterialModule } from '../../../app-material/app-material/app-material.module';



@NgModule({
  declarations: [SupervisorMyOffersComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class SupervisorMyOffersModule { }
