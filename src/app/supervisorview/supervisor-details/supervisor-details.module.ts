import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupervisorDetailsComponent } from './supervisor-details.component';
import { AppMaterialModule } from '../../app-material/app-material/app-material.module';



@NgModule({
  declarations: [SupervisorDetailsComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class SupervisorDetailsModule { }
