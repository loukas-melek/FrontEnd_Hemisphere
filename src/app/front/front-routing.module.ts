import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FrontComponent } from './front.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [{
  path: '',
  component: FrontComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontRoutingModule { }
 