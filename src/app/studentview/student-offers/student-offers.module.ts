import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentOffersComponent } from './student-offers.component';
import { AppMaterialModule } from '../../app-material/app-material/app-material.module';



@NgModule({
  declarations: [StudentOffersComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class StudentOffersModule { }
