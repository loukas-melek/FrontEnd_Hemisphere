import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupervisorOfferComponent } from './supervisor-offer.component';
import { AppMaterialModule } from '../../../app-material/app-material/app-material.module';



@NgModule({
  declarations: [SupervisorOfferComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class SupervisorOfferModule { }
