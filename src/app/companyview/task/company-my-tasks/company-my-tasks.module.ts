import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyMyTasksComponent } from './company-my-tasks.component';
import { AppMaterialModule } from '../../../app-material/app-material/app-material.module';



@NgModule({
  declarations: [CompanyMyTasksComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class CompanyMyTasksModule { }
