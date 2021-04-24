import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardGuard } from './auth/authentication/services/auth-guard.guard';
import { RoleGuard } from './auth/authentication/services/role-guard.guard';






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
      ,canActivate: [RoleGuard,AuthGuardGuard],
      data: {role: 'ROLE_ADMIN'}
  },
  {
    path: 'company',
    loadChildren: () => import('./companyview/companyview.module')
      .then(m => m.CompanyviewModule)
      ,canActivate: [RoleGuard,AuthGuardGuard],
      data: {role: 'ROLE_COMPANY'}
  },
  {
    path: 'student',
    loadChildren: () => import('./studentview/studentview.module')
      .then(m => m.StudentviewModule)
      ,canActivate: [RoleGuard,AuthGuardGuard],
      data: {role: 'ROLE_STUDENT'}
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
