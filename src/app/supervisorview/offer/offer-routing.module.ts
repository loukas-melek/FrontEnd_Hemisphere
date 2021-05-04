import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferComponent } from './offer.component';
import { SupervisorMyOffersComponent } from './supervisor-my-offers/supervisor-my-offers.component';
import { SupervisorOfferComponent } from './supervisor-offer/supervisor-offer.component';

const routes: Routes = [{
  path: '',
  component: OfferComponent,
  children: [
    {
      path: 'public-offers',
      component: SupervisorOfferComponent,
    },
    
    {
      path: 'my-offers',
      component: SupervisorMyOffersComponent,
    },
    
    
    
    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
