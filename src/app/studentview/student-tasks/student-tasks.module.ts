import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentTasksComponent } from './student-tasks.component';
import { AppMaterialModule } from '../../app-material/app-material/app-material.module';



@NgModule({
  declarations: [StudentTasksComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class StudentTasksModule { }
