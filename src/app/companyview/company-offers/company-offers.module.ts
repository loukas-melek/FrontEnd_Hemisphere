import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyOffersComponent } from './company-offers.component';
import { AppMaterialModule } from '../../app-material/app-material/app-material.module';



@NgModule({
  declarations: [CompanyOffersComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports:[
    AppMaterialModule
  ]
})
export class CompanyOffersModule { }
