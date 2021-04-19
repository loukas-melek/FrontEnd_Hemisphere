import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyviewRoutingModule } from './companyview-routing.module';
import { CompanyviewComponent } from './companyview.component';
import { CompanyOffersModule } from './company-offers/company-offers.module';
import { CompanyTasksModule } from './company-tasks/company-tasks.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { NbMenuModule } from '@nebular/theme';
import { ResizableModule } from 'angular-resizable-element';
import { ThemeModule } from '../@theme/theme.module';


@NgModule({
  declarations: [CompanyviewComponent],
  imports: [
    CommonModule,
    CompanyOffersModule,
    CompanyTasksModule,
    CompanyviewRoutingModule,
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
export class CompanyviewModule { }
