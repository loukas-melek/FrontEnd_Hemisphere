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
import { TokenStorageService } from '../../../auth/authentication/services/token-storage.service';
import { ProfileService } from '../../../services/ProfileService';
import { Profile } from '../../../apps/entities/Profile';

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

  userMenu = [ { title: 'Profile',icon: 'person-outline', }, { title: 'Settings',icon: 'settings-outline', },{ title: 'Log out',icon: 'log-out-outline', } ];
myRole;
fullname;
profile:Profile;
  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserData,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              public router: Router,private profileSerivce:ProfileService,
              private userrService:UserService,
              private tokenStorageService:TokenStorageService) {
  }
  getMyprofile(){
    this.userrService.whoami().subscribe(res=>{
      this.user=res;
      this.profileSerivce.getProfileByUserId(this.user.id).subscribe(res=>{
        this.profile=res;
        console.log("hetha profilna");
        console.log(this.profile);
        console.log(this.profile.name);
        console.log(this.profile.lastname);
        this.fullname=this.profile.lastname+" "+this.profile.name
      })
    })
  }
  ngOnInit() {
    this.getMyprofile();
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

      this.menuService.onItemClick().subscribe(( event ) => {
        this.onItemSelection(event.item.title);
      })

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
    this.router.navigate(['front/home']);
  }
  isFrontRoute() {
    return this.router.url.includes("/front");
}
onItemSelection( title ) {
  this.userrService.whoami().subscribe(res=>{
    this.userr=res;
  if ( title === 'Log out' ) {
    // Do something on Log out
    
    console.log('Log out Clicked ')
    this.router.navigate(['auth/logout']);
  } 
  else if ( title === 'Profile' ) {
    if(this.userr.roles.toString()=="ROLE_STUDENT"){
      console.log('Profile Clicked ')
      this.router.navigate(['student/profile']);
    }
    if(this.userr.roles.toString()=="ROLE_COMPANY"){
      console.log('Profile Clicked ')
      this.router.navigate(['company/profile']);
    } 
    if(this.userr.roles.toString()=="ROLE_ADMIN"){
      console.log('Profile Clicked ')
      this.router.navigate(['front/profile']);
    }
    
  }
  else if ( title === 'Settings' ) {
    if(this.userr.roles.toString()=="ROLE_STUDENT"){
      console.log('settings Clicked ')
      this.router.navigate(['student/profile/settings']);
    }
    if(this.userr.roles.toString()=="ROLE_COMPANY"){
      console.log('settings Clicked ')
      this.router.navigate(['company/profile/settings']);    
    } 
    if(this.userr.roles.toString()=="ROLE_ADMIN"){
      console.log('settings Clicked ')
      this.router.navigate(['front/settings']);
    }
  }
})
}
reloadPage(): void {
  window.location.reload();
}
RedirectMe(){
  this.userrService.whoami().subscribe(res=>{
    this.userr=res;
    console.log(this.userr.roles);
    this.myRole=this.userr.roles.toString()
    console.log(this.myRole);
    if(this.myRole.includes("ROLE_STUDENT")){
      this.router.navigate(['student/workflow']);
    }else
    if(this.myRole.includes("ROLE_COMPANY")){
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
