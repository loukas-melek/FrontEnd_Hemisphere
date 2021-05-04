import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupervisorMyTasksComponent } from './supervisor-my-tasks.component';
import { AppMaterialModule } from '../../../app-material/app-material/app-material.module';



@NgModule({
  declarations: [SupervisorMyTasksComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class SupervisorMyTasksModule { }
