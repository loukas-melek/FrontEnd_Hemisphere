import { NgModule } from '@angular/core';
import { WorkflowComponent } from './workflow.component';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
 
import { ThemeModule } from '../../@theme/theme.module';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [WorkflowComponent],
  imports: [
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
