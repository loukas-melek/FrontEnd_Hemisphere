import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSettingsComponent } from './profile-settings.component';
import { AppMaterialModule } from '../../app-material/app-material/app-material.module';



@NgModule({
  declarations: [ProfileSettingsComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class ProfileSettingsModule { }
