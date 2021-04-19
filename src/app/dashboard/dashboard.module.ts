import { NgModule } from '@angular/core';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { NbMenuModule } from '@nebular/theme';
import { DashboardComponent } from './dashboard.component';
import { SeekforoffersComponent } from './seekforoffers/seekforoffers.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResizableModule } from 'angular-resizable-element';

import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import { SeekforoffersModule } from './seekforoffers/seekforoffers.module';
import { SeekfortasksModule } from './seekfortasks/seekfortasks.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SeekforoffersModule,
    SeekfortasksModule,
    DashboardRoutingModule,
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
export class DashboardModule { }
