import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyTasksComponent } from './company-tasks.component';
import { AppMaterialModule } from '../../app-material/app-material/app-material.module';



@NgModule({
  declarations: [CompanyTasksComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class CompanyTasksModule { }
