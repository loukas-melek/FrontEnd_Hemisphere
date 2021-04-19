import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-companyview',
  styleUrls: ['./companyview.component.scss'],
  template: `
  <ngx-one-column-layout>
   <nb-menu [items]="menu"></nb-menu>
    <router-outlet></router-outlet>
  </ngx-one-column-layout>
`,
})
export class CompanyviewComponent  {
  menu = MENU_ITEMS;

}
