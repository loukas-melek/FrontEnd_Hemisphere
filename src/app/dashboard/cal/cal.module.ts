import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ContextMenuModule } from 'ngx-contextmenu';
import { DemoUtilsModule } from '../../apps/utils/module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule, 
    jqxSchedulerModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    ContextMenuModule.forRoot({
      useBootstrap4: true,
    }),
    DemoUtilsModule,
  ],
})
export class CalModule { }