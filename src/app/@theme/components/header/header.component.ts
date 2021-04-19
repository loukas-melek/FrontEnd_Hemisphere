import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { exists } from 'fs';
import { UserService } from '../../../services/userService';
import { User } from '../../../apps/entities/user';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  userr:User;
  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];
myRole;
  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserData,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              public router: Router,
              private userrService:UserService,) {
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => this.user = users.nick);

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
      this.sidebarService.toggle(true, 'menu-sidebar');
      this.layoutService.changeLayoutSize(); 
    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
  isFrontRoute() {
    return this.router.url.includes("/front");
}
RedirectMe(){
  this.userrService.whoami().subscribe(res=>{
    this.userr=res;
    console.log(this.userr.roles);
    this.myRole=this.userr.roles.toString()
    console.log(this.myRole);
    if(this.myRole.includes("STUDENT")){
      this.router.navigate(['student/workflow']);
    }else
    if(this.myRole.includes("COMPANY")){
      this.router.navigate(['company/workflow']);
    }else
    if(this.myRole=="ROLE_ADMIN"){
      this.router.navigate(['dashboard/workflow']);
    }
  })
}
isDashboardRoute() {
  return this.router.url.includes("/dashboard");
}
}
