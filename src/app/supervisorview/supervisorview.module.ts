import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupervisorviewRoutingModule } from './supervisorview-routing.module';
import { SupervisorviewComponent } from './supervisorview.component';
import { SupervisorDetailsModule } from './supervisor-details/supervisor-details.module';
import { SupervisorOfferModule } from './offer/supervisor-offer/supervisor-offer.module';
import { SupervisorTaskModule } from './task/supervisor-task/supervisor-task.module';
import { AppMaterialModule } from '../app-material/app-material/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { ResizableModule } from 'angular-resizable-element';
import { OfferModule } from './offer/offer.module';
import { TaskModule } from './task/task.module';
import { TaskRoutingModule } from './task/task-routing.module';
import { OfferRoutingModule } from './offer/offer-routing.module';
import { ProfileModule } from './profile/profile.module';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProfileSettingsModule } from './profile-settings/profile-settings.module';
import { ProjectsModule } from './projects/projects.module';
import { WorkflowModule } from './workflow/workflow.module';


@NgModule({
  declarations: [SupervisorviewComponent],
  imports: [
    ProjectsModule,
    WorkflowModule,
    OfferModule,
    ProfileModule,
    TaskModule,
    ProfileSettingsModule,
    CommonModule,
    TaskRoutingModule,
    OfferRoutingModule,
    SupervisorviewRoutingModule,
    SupervisorDetailsModule,
    AppMaterialModule,
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
export class SupervisorviewModule { }
