import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'ngx-front',
  styleUrls: ['front.component.scss'],
  template: `
    <ngx-two-columns-layout>
      <router-outlet></router-outlet>
    </ngx-two-columns-layout>
  `,
})
export class FrontComponent  {


  ngOnInit(): void {

  }

}
  