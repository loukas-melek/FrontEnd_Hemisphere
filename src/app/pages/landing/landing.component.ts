import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigate(){
    this.router.navigate(['auth/register']);
  }
}
