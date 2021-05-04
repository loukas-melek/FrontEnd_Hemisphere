import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupervisorMyTasksComponent } from './supervisor-my-tasks/supervisor-my-tasks.component';
import { SupervisorTaskComponent } from './supervisor-task/supervisor-task.component';
import { TaskComponent } from './task.component';

const routes: Routes = [{
  path: '',
  component: TaskComponent,
  children: [
    {
      path: 'my-tasks',
      component: SupervisorMyTasksComponent,
    },
    {
      path: 'public-tasks',
      component: SupervisorTaskComponent,
    },
    
    
    
    
  ],
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
