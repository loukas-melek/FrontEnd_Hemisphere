import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CalComponent } from './cal/cal.component.ts';
import { DashboardComponent } from './dashboard.component';
import { ProjectsComponent } from './projects/projects.component';


import { WorkflowComponent } from './workflow/workflow.component';

 const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {
      path: 'workflow/:id',
      component: WorkflowComponent,
    },
    {
      path: 'projects',
      component: ProjectsComponent,
    },

    // {
    //   path: 'cal',
    //   component: CalComponent,
    // },

    // {
    //   path: 'company/offers',
    //   component: CompanyOffersComponent,
    // },
    // {
    //   path: 'company/tasks',
    //   component: CompanyTasksComponent,
    // },
    // {
    //   path: 'student/offers',
    //   component: StudentOffersComponent,
    // },
    // {
    //   path: 'student/tasks',
    //   component: StudentTasksComponent,
    // },

  ],
 }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
