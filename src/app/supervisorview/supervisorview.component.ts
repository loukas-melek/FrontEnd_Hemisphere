import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS_SUPERVISOR } from './pages-menu';

@Component({
  selector: 'ngx-supervisorview',
  styleUrls: ['./supervisorview.component.scss'],
  template: `
  <ngx-one-column-layout>
   <nb-menu [items]="menu"></nb-menu>
    <router-outlet></router-outlet>
  </ngx-one-column-layout>
`,
})
export class SupervisorviewComponent {

  menu = MENU_ITEMS_SUPERVISOR;

}
