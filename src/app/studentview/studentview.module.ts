import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentviewRoutingModule } from './studentview-routing.module';
import { StudentviewComponent } from './studentview.component';
import { StudentOffersModule } from './student-offers/student-offers.module';
import { StudentTasksModule } from './student-tasks/student-tasks.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { NbMenuModule } from '@nebular/theme';
import { ResizableModule } from 'angular-resizable-element';
import { ThemeModule } from '../@theme/theme.module';
import { StudentDetailsTaskModule } from './student-details-task/student-details-task.module';
import { StudentDetailsOfferModule } from './student-details-offer/student-details-offer.module';
import { ProfileModule } from './profile/profile.module';
import { ProfileSettingsModule } from './profile-settings/profile-settings.module';
import { ProjectsModule } from './projects/projects.module';
import { WorkflowModule } from './workflow/workflow.module';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';


@NgModule({
  declarations: [StudentviewComponent, TestComponent, Test2Component],
  imports: [
    WorkflowModule,
    ProjectsModule,
    ProfileModule,
    ProfileSettingsModule,
    StudentDetailsOfferModule,
    StudentDetailsTaskModule,
    StudentOffersModule,
    StudentTasksModule,
    CommonModule,
    StudentviewRoutingModule,
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
export class StudentviewModule { }
