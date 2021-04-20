import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkflowComponent } from '../dashboard/workflow/workflow.component';
import { StudentOffersComponent } from './student-offers/student-offers.component';
import { StudentTasksComponent } from './student-tasks/student-tasks.component';
import { StudentviewComponent } from './studentview.component';

const routes: Routes = [{
  path: '',
  component: StudentviewComponent,
  children: [
    {
      path: 'workflow',
      component: WorkflowComponent,
    },
    {
      path: 'offers',
      component: StudentOffersComponent,
    },
    {
      path: 'tasks',
      component: StudentTasksComponent,
    },
    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentviewRoutingModule { }
