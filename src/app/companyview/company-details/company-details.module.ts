import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CompanyDetailsComponent } from './company-details.component';
import { AppMaterialModule } from '../../app-material/app-material/app-material.module';
import { NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule } from '../../pages/tables/tables-routing.module';



@NgModule({
  declarations: [CompanyDetailsComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  providers: [DatePipe]
})
export class CompanyDetailsModule { }
