import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailsOfferComponent } from './student-details-offer.component';
import { AppMaterialModule } from '../../app-material/app-material/app-material.module';



@NgModule({
  declarations: [StudentDetailsOfferComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class StudentDetailsOfferModule { }
