import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailsTaskComponent } from './student-details-task.component';
import { AppMaterialModule } from '../../app-material/app-material/app-material.module';



@NgModule({
  declarations: [StudentDetailsTaskComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class StudentDetailsTaskModule { }
