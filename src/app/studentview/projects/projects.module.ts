import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { AppMaterialModule } from '../../app-material/app-material/app-material.module';



@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class ProjectsModule { }
