import { NgModule } from '@angular/core';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { NbMenuModule } from '@nebular/theme';
import { DashboardComponent } from './dashboard.component';
import { SeekforoffersComponent } from './seekforoffers/seekforoffers.component';


@NgModule({
  declarations: [DashboardComponent, SeekforoffersComponent],
  imports: [

    DashboardRoutingModule,
    ThemeModule,
    NbMenuModule,
  ]
})
export class DashboardModule { }
