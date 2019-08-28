import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { dashboardRoutes } from './components/dashboard/dashboard-routing.module';
import { AuthGuardService } from './_service/auth-guard.service';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  { path: 'dashboard', children: dashboardRoutes, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },

  // redirect to Login page if the user is not logged in
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
