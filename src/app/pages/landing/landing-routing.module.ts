import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [{
  path: '',
  component: LandingComponent,
   
  children: [
    {
      path: 'about',
      component: AboutComponent,
    },
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'contact',
      component: ContactComponent,
    },
    
    {
      path: 'services',
      component: ServicesComponent,
    },
    {
      path: 'team',
      component: TeamComponent,
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
      ],
    },
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
