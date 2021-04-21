import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    
  ],
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyviewRoutingModule { }
