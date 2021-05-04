import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyviewRoutingModule } from './companyview-routing.module';
import { CompanyviewComponent } from './companyview.component';
import { CompanyOffersModule } from './offer/company-offers/company-offers.module';
import { CompanyTasksModule } from './task/company-tasks/company-tasks.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { NbMenuModule } from '@nebular/theme';
import { ResizableModule } from 'angular-resizable-element';
import { ThemeModule } from '../@theme/theme.module';
import { CompanyDetailsModule } from './company-details/company-details.module';
import { ProfileModule } from './profile/profile.module';
import { ProfileSettingsModule } from './profile-settings/profile-settings.module';
import { OfferRoutingModule } from './offer/offer-routing.module';
import { TaskRoutingModule } from './task/task-routing.module';
import { OfferModule } from './offer/offer.module';
import { TaskModule } from './task/task.module';
import { ProjectsModule } from './projects/projects.module';
import { WorkflowModule } from './workflow/workflow.module';


@NgModule({
  declarations: [CompanyviewComponent],
  imports: [
    ProjectsModule,
    WorkflowModule,
    ProfileModule,
    ProfileSettingsModule,
    CompanyDetailsModule,
    CommonModule,
    CompanyviewRoutingModule,
    OfferRoutingModule,
    TaskRoutingModule,
    OfferModule,
    TaskModule,
    ThemeModule,
    NbMenuModule,
    FlexLayoutModule,
    FormsModule,
    
   
   
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CompanyviewModule { }
