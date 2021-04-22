import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FrontComponent } from './front.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';



const routes: Routes = [{
  path: '',
  component: FrontComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'profile',
      component: ProfileComponent,
    },
    {
      path: 'profile/settings',
      component: ProfileSettingsComponent,
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
 