import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowComponent } from './workflow.component';
import { AppMaterialModule } from '../../app-material/app-material/app-material.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { NbCardModule, NbUserModule, NbButtonModule, NbTabsetModule, NbActionsModule, NbRadioModule, NbSelectModule, NbListModule, NbIconModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';



@NgModule({
  declarations: [WorkflowComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    DragDropModule,
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
  ]
})
export class WorkflowModule { }
