import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { AppMaterialModule } from '../../app-material/app-material/app-material.module';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  providers: [DatePipe]
})
export class ProfileModule { }
