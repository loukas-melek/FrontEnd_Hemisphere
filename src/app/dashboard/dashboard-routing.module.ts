import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MyoffersComponent } from './myoffers/myoffers.component';
import { MytasksComponent } from './mytasks/mytasks.component';
import { SeekforoffersComponent } from './seekforoffers/seekforoffers.component';
import { SeekfortasksComponent } from './seekfortasks/seekfortasks.component';
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
      path: 'seekfortasks',
      component: SeekfortasksComponent,
    },
    {
      path: 'seekforoffers',
      component: SeekforoffersComponent,
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
