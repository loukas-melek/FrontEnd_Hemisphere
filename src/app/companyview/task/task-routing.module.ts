import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyMyTasksComponent } from './company-my-tasks/company-my-tasks.component';
import { CompanyTasksComponent } from './company-tasks/company-tasks.component';
import { TaskComponent } from './task.component';

const routes: Routes = [{
  path: '',
  component: TaskComponent,
  children: [
    {
      path: 'my-tasks',
      component: CompanyMyTasksComponent,
    },
    {
      path: 'public-tasks',
      component: CompanyTasksComponent,
    },
    
    
    
    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
