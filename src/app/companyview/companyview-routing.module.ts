import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyviewComponent } from './companyview.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkflowComponent } from './workflow/workflow.component';

const routes: Routes = [{
  path: '',
  component: CompanyviewComponent,
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
      loadChildren: () => import('./offer/offer.module')
        .then(m => m.OfferModule),
    },
    {
      path: 'tasks',
      loadChildren: () => import('./task/task.module')
        .then(m => m.TaskModule),
    },
    {
      path: 'detail/:id',
      component: CompanyDetailsComponent,
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
export class CompanyviewRoutingModule { }
