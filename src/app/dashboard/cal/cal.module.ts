import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalComponent } from './cal.component';
import { FormsModule } from '@angular/forms';
import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';



@NgModule({
  declarations: [
    CalComponent
  ],
  imports: [
    CommonModule, 
    jqxSchedulerModule,
    FormsModule
  ]
})
export class CalModule { }