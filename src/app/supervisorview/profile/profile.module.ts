import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { AppMaterialModule } from '../../app-material/app-material/app-material.module';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class ProfileModule { }
