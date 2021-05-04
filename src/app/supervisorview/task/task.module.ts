import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { SupervisorTaskModule } from './supervisor-task/supervisor-task.module';
import { SupervisorMyTasksModule } from './supervisor-my-tasks/supervisor-my-tasks.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { NbMenuModule } from '@nebular/theme';
import { ResizableModule } from 'angular-resizable-element';
import { ThemeModule } from '../../@theme/theme.module';
import { AppMaterialModule } from '../../app-material/app-material/app-material.module';


@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SupervisorTaskModule,
    SupervisorMyTasksModule,
    AppMaterialModule,
    ThemeModule,
    NbMenuModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ResizableModule,
    MatTableModule,
    MatMenuModule
  ]
})
export class TaskModule { }
