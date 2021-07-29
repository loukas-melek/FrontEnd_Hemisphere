import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { StudentDetailsOfferComponent } from './student-details-offer/student-details-offer.component';
import { StudentDetailsTaskComponent } from './student-details-task/student-details-task.component';
import { StudentOffersComponent } from './student-offers/student-offers.component';
import { StudentTasksComponent } from './student-tasks/student-tasks.component';
import { StudentviewComponent } from './studentview.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { WorkflowComponent } from './workflow/workflow.component';

const routes: Routes = [{
  path: '',
  component: StudentviewComponent,
  children: [
    {
      path: 'workflow/:id',
      component: WorkflowComponent,
    },
    {
      path: 'projects',
      component: ProjectsComponent,
    },
    {
      path: 'offers',
      component: StudentOffersComponent,
    },
    {
      path: 'test',
      component: TestComponent,
    },
    {
      path: 'test2',
      component: Test2Component,
    },
    {
      path: 'tasks',
      component: StudentTasksComponent,
    },
    {
      path: 'tasks/details/:id',
      component: StudentDetailsTaskComponent,
    },
    {
      path: 'offers/details/:id',
      component: StudentDetailsOfferComponent,
    },
    {
      path: 'profile',
      component: ProfileComponent,
    },
    {
      path: 'profile/settings',
      component: ProfileSettingsComponent,
    },
    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentviewRoutingModule { }
