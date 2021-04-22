import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'ngx-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private tokenStorageService:TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['auth/login']);
  }
  reloadPage(): void {
    window.location.reload();
  }
}
