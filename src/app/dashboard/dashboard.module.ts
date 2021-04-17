import { NgModule } from '@angular/core';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { NbMenuModule } from '@nebular/theme';
import { DashboardComponent } from './dashboard.component';
import { SeekforoffersComponent } from './seekforoffers/seekforoffers.component';
import { MyoffersComponent } from './myoffers/myoffers.component';


@NgModule({
  declarations: [DashboardComponent, SeekforoffersComponent, MyoffersComponent],
  imports: [

    DashboardRoutingModule,
    ThemeModule,
    NbMenuModule,
  ]
})
export class DashboardModule { }
