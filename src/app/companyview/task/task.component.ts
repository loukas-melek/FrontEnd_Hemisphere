import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-task',
  template: `
  <router-outlet></router-outlet>
`,
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
