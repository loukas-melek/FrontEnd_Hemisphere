import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupervisorTaskComponent } from './supervisor-task.component';
import { AppMaterialModule } from '../../../app-material/app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { ResizableModule } from 'angular-resizable-element';



@NgModule({
  declarations: [SupervisorTaskComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ResizableModule,
    MatTableModule,
    MatMenuModule
  ]
})
export class SupervisorTaskModule { }
