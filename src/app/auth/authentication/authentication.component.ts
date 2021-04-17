import { Component, OnInit } from '@angular/core';

@Component({
  
  selector: 'ngx-authentication',
  styleUrls: ['./authentication.component.scss'],
  template: `
  <ngx-three-columns-layout>
  <router-outlet></router-outlet>
  </ngx-three-columns-layout>
  `,
})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
