import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProfileComponent } from './profile/profile.component';
import { SupervisorDetailsComponent } from './supervisor-details/supervisor-details.component';
import { SupervisorviewComponent } from './supervisorview.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkflowComponent } from './workflow/workflow.component';

const routes: Routes = [{
  path: '',
  component: SupervisorviewComponent,
  children: [
    {
      path: 'projects',
      component: ProjectsComponent,
    },
    {
      path: 'offers',
      loadChildren: () => import('./offer/offer.module')
        .then(m => m.OfferModule),
    },
    {
      path: 'tasks',
      loadChildren: () => import('./task/task.module')
        .then(m => m.TaskModule),
    },
    {
      path: 'details/:id',
      component: SupervisorDetailsComponent,
    },
    {
      path: 'workflow/:id',
      component: WorkflowComponent,
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
export class SupervisorviewRoutingModule { }
