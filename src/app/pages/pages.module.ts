import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';

import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { LandingModule } from '../front/landing/landing.module';
import { Landing2Component } from './landing2/landing2.component';
import { Landing2Module } from './landing2/landing2.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    LandingModule,
    ECommerceModule,
    MiscellaneousModule,
    Landing2Module
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
