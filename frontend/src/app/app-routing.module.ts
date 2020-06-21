import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { HomeComponent } from './webportal/layouts/home/home.component';
import { WelcomeComponent } from './webportal/modules/welcome/welcome.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { RouteGuardService } from './service/route-guard.service';
import { LogoutComponent } from './modules/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent,
      },
    ],
  },
  {
    path: 'system',
    component: DefaultComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [RouteGuardService],
      },
      {
        path: 'posts',
        component: PostsComponent,
        canActivate: [RouteGuardService],
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
