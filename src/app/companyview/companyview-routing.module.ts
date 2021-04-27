import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkflowComponent } from '../dashboard/workflow/workflow.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyOffersComponent } from './company-offers/company-offers.component';
import { CompanyTasksComponent } from './company-tasks/company-tasks.component';
import { CompanyviewComponent } from './companyview.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{
  path: '',
  component: CompanyviewComponent,
  children: [
    {
      path: 'workflow',
      component: WorkflowComponent,
    },
    {
      path: 'tasks',
      component: CompanyTasksComponent,
    },
    {
      path: 'offers',
      component: CompanyOffersComponent,
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
