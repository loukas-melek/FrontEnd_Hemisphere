import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyMyOffersComponent } from './company-my-offers.component';
import { AppMaterialModule } from '../../../app-material/app-material/app-material.module';



@NgModule({
  declarations: [CompanyMyOffersComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class CompanyMyOffersModule { }
