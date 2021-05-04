import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferRoutingModule,  } from './offer-routing.module';
import { OfferComponent } from './offer.component';
import { SupervisorMyOffersModule } from './supervisor-my-offers/supervisor-my-offers.module';
import { SupervisorOfferModule } from './supervisor-offer/supervisor-offer.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { NbMenuModule } from '@nebular/theme';
import { ResizableModule } from 'angular-resizable-element';
import { ThemeModule } from '../../@theme/theme.module';
import { AppMaterialModule } from '../../app-material/app-material/app-material.module';


@NgModule({
  declarations: [OfferComponent],
  imports: [
    CommonModule,
    OfferRoutingModule,
    SupervisorMyOffersModule,
    SupervisorOfferModule,
    AppMaterialModule,
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
