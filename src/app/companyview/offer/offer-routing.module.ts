import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyMyOffersComponent } from './company-my-offers/company-my-offers.component';
import { CompanyOffersComponent } from './company-offers/company-offers.component';
import { OfferComponent } from './offer.component';


const routes: Routes = [{
  path: '',
  component: OfferComponent,
  children: [
    {
      path: 'public-offers',
      component: CompanyOffersComponent,
    },
    
    {
      path: 'my-offers',
      component: CompanyMyOffersComponent,
    },
    
    
    
    
  ],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
