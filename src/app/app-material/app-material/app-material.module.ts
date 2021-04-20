import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResizableModule } from 'angular-resizable-element';
import { ChartsModule } from 'ng2-charts';

import { MatTreeModule } from '@angular/material/tree';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ScrollingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    CarouselModule,
    MatToolbarModule,
    MatSliderModule,
    MatProgressBarModule,
    MatTreeModule,
    ChartsModule,
    ResizableModule,
    NgbModule,
    MatTabsModule,
    MatTableModule,
    MatStepperModule,
    MatPaginatorModule,
    MatMenuModule,

  ],
  exports: [
    CommonModule,
    ScrollingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    CarouselModule,
    MatToolbarModule,
    MatSliderModule,
    MatProgressBarModule,
    MatTreeModule,
    ChartsModule,
    ResizableModule,
    NgbModule,
    MatTabsModule,
    MatTableModule,
    MatStepperModule,
    MatPaginatorModule,
    MatMenuModule,
  ],
})
export class AppMaterialModule { }
