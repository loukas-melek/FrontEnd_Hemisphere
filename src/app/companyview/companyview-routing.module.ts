import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyviewOComponent } from '../dashboard/companyView/companyview-o/companyview-o.component';
import { WorkflowComponent } from '../dashboard/workflow/workflow.component';
import { CompanyOffersComponent } from './company-offers/company-offers.component';
import { CompanyTasksComponent } from './company-tasks/company-tasks.component';
import { CompanyviewComponent } from './companyview.component';

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
export class CompanyviewRoutingModule { }
