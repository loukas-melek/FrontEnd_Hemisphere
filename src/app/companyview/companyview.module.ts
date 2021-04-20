import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyviewRoutingModule } from './companyview-routing.module';
import { CompanyviewComponent } from './companyview.component';
import { CompanyOffersModule } from './company-offers/company-offers.module';
import { CompanyTasksModule } from './company-tasks/company-tasks.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { NbMenuModule } from '@nebular/theme';
import { ResizableModule } from 'angular-resizable-element';
import { ThemeModule } from '../@theme/theme.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppMaterialModule } from '../app-material/app-material/app-material.module';


@NgModule({
  declarations: [CompanyviewComponent],
  imports: [
    CommonModule,
    CompanyOffersModule,
    CompanyTasksModule,
    CompanyviewRoutingModule,
    ThemeModule,
    NbMenuModule,
    FlexLayoutModule,
    FormsModule,
    
   
   
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CompanyviewModule { }
