import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardGuard } from './auth/authentication/services/auth-guard.guard';
import { AuthGuardAdmin } from './auth/authentication/services/auth-guard-admin.guard';
import { AuthGuardCompany } from './auth/authentication/services/auth-guard-company.guard';
import { AuthGuardStudent } from './auth/authentication/services/auth-guard-student.guard';

//import { NbAuthComponent, NbLoginComponent, NbLogoutComponent, NbRegisterComponent, NbRequestPasswordComponent, NbResetPasswordComponent } from '@nebular/auth';





export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule)
      ,canActivate: [AuthGuardGuard],
  },
  {
    path: 'front',
    loadChildren: () => import('./front/front.module')
      .then(m => m.FrontModule)
      ,canActivate: [AuthGuardGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module')
      .then(m => m.DashboardModule) 
      ,canActivate: [AuthGuardAdmin],
  },
  {
    path: 'company',
    loadChildren: () => import('./companyview/companyview.module')
      .then(m => m.CompanyviewModule)
      ,canActivate: [AuthGuardCompany],
  },
  {
    path: 'student',
    loadChildren: () => import('./studentview/studentview.module')
      .then(m => m.StudentviewModule)
      ,canActivate: [AuthGuardStudent],
  },
  {
    path: 'apps',
    loadChildren: () => import('./apps/apps.module')
      .then(m => m.AppsModule)
      ,canActivate: [AuthGuardGuard],
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/authentication/authentication.module')
      .then(m => m.AuthenticationModule)
  },
 { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
   { path: '**', redirectTo: 'auth/login' },

//   {
//   path: 'auth',
//   component: NbAuthComponent,
//   children: [
//     {
//       path: '',
//       component: NbLoginComponent,
//     },
//     {
//       path: 'login',
//       component: NbLoginComponent,
//     },
//     {
//       path: 'register',
//       component: NbRegisterComponent,
//     },
//     {
//       path: 'logout',
//       component: NbLogoutComponent,
//     },
//     {
//       path: 'request-password',
//       component: NbRequestPasswordComponent,
//     },
//     {
//       path: 'reset-password',
//       component: NbResetPasswordComponent,
//     },
//   ],
// },
 
  // { path: '', redirectTo: 'front', pathMatch: 'full' ,canActivate: [AuthGuardGuard]},
  // { path: '**', redirectTo: 'front',canActivate: [AuthGuardGuard] },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
