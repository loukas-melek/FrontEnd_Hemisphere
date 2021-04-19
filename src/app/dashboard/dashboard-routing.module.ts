import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyOffersComponent } from '../companyview/company-offers/company-offers.component';
import { CompanyTasksComponent } from '../companyview/company-tasks/company-tasks.component';
import { StudentOffersComponent } from '../studentview/student-offers/student-offers.component';
import { StudentTasksComponent } from '../studentview/student-tasks/student-tasks.component';

import { DashboardComponent } from './dashboard.component';

import { WorkflowComponent } from './workflow/workflow.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {
      path: 'workflow',
      component: WorkflowComponent,
    },
    {
      path: 'company/offers',
      component: CompanyOffersComponent,
    },
    {
      path: 'company/tasks',
      component: CompanyTasksComponent,
    },
    {
      path: 'student/offers',
      component: StudentOffersComponent,
    },
    {
      path: 'student/tasks',
      component: StudentTasksComponent,
    },
    {
      path: 'mytasks',
      component: MytasksComponent,
    },
    {
      path: 'myoffers',
      component: MyoffersComponent,
    },
    {
      path: '',
      redirectTo: 'workflow',
      pathMatch: 'full',
    },
  ],
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
