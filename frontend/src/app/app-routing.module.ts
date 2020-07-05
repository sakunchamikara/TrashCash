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
import { ShopComponent } from './webportal/modules/shop/shop.component';
import { InsertProductsComponent } from './modules/products/insert-products/insert-products.component';
import { ViewProductComponent } from './modules/products/view-product/view-product.component';
import { UpdateProductComponent } from './modules/products/view-product/update-product/update-product.component';



import { CollectedWasteComponent } from './modules/collected-waste/collected-waste.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { InsertCollectedWasteComponent } from './modules/collected-waste/insert-collected-waste/insert-collected-waste.component';
import { ViewCollectedWasteComponent } from './modules/collected-waste/view-collected-waste/view-collected-waste.component';
import { AddEventComponent } from './modules/events/add-event/add-event.component';
import { ViewEventComponent } from './modules/events/view-event/view-event.component';
import { TermsComponent} from './modules/terms/terms.component';
import { AddtermsComponent} from './modules/terms/addterms/addterms.component';
import {ViewtermsComponent} from './modules/terms/viewterms/viewterms.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customer/welcome',
    pathMatch: 'full',
  },
  {
    path: 'customer',
    component: HomeComponent,
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent,
      },
      {
        path: 'shop',
        component: ShopComponent,
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
        component: LogoutComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path:'products',
        component:InsertProductsComponent,
      },
      {
        path:'ViewProducts',
        component:ViewProductComponent,
       },
      {
        path:'UpdateProducts/:id',
        component:UpdateProductComponent,
      },
      {
        path: 'collectedWaste',
        component: CollectedWasteComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: "insertCollectedWaste",
        component: InsertCollectedWasteComponent,
      },
      {
        path: "viewCollectedWaste",
        component:  ViewCollectedWasteComponent,
      },
      {
        path: "addEvent",
        component: AddEventComponent,
      },
      {
        path: "viewEvent",
        component:  ViewEventComponent,
      },
      {
        path: 'terms',
        component:TermsComponent,
      }, 
      {
        path: 'addterms',
        component: AddtermsComponent,
      },
      {
        path: 'viewterms',
        component: ViewtermsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
