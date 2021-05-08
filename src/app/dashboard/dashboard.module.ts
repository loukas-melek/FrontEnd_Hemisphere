import { NgModule } from '@angular/core';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { NbMenuModule } from '@nebular/theme';
import { DashboardComponent } from './dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResizableModule } from 'angular-resizable-element';

import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import { WorkflowModule } from './workflow/workflow.module';
import { ProjectsModule } from './projects/projects.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { AppMaterialModule } from '../app-material/app-material/app-material.module';
import { CalModule } from './cal/cal.module';





@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CalModule,
    WorkflowModule,
    ProjectsModule,
    DashboardRoutingModule,
    ThemeModule,
    NbMenuModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ResizableModule,
    MatTableModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatStepperModule,
    MatTabsModule,
    MatDatepickerModule,
    MatCheckboxModule,
    ChartsModule,
    NgbModule,
    AppMaterialModule
  ]
})
export class DashboardModule { }
