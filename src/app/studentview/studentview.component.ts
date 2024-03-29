import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS_STUDENT } from './pages-menu';

@Component({
  selector: 'ngx-studentview',
  styleUrls: ['./studentview.component.scss'],
  template: `
  <ngx-one-column-layout>
   <nb-menu [items]="menu"></nb-menu>
    <router-outlet></router-outlet>
  </ngx-one-column-layout>
`,
})
export class StudentviewComponent  {

  menu = MENU_ITEMS_STUDENT;

}
