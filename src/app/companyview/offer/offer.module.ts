import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferRoutingModule } from './offer-routing.module';
import { OfferComponent } from './offer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { NbMenuModule } from '@nebular/theme';
import { ResizableModule } from 'angular-resizable-element';
import { ThemeModule } from '../../@theme/theme.module';
import { CompanyOffersModule } from './company-offers/company-offers.module';
import { CompanyMyOffersModule } from './company-my-offers/company-my-offers.module';


@NgModule({
  declarations: [OfferComponent],
  imports: [
    CommonModule,
    OfferRoutingModule,
    CompanyOffersModule,
    CompanyMyOffersModule,
    ThemeModule,
    NbMenuModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ResizableModule,
    MatTableModule,
    MatMenuModule
  ]
})
export class OfferModule { }
