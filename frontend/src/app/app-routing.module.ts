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
import { UpdateCollectedWasteComponent } from 'src/app/modules/collected-waste/update-collected-waste/update-collected-waste.component';


import { CollectedWasteComponent } from './modules/collected-waste/collected-waste.component';
import { ProfileComponent } from './modules/profile/profile.component';
//import { ProductCatComponent } from './modules/product-cat/product-cat.component';
import { InsertCollectedWasteComponent } from './modules/collected-waste/insert-collected-waste/insert-collected-waste.component';
import { ViewCollectedWasteComponent } from './modules/collected-waste/view-collected-waste/view-collected-waste.component';
//import { AddEventComponent } from './modules/events/add-event/add-event.component';
//import { ViewEventComponent } from './modules/events/view-event/view-event.component';

import { InsertProductCatComponent } from './modules/product-cat/insert-product-cat/insert-product-cat.component';
import { ViewProductCatComponent } from './modules/product-cat/view-product-cat/view-product-cat.component';

import { AddEventComponent } from './modules/events/add-event/add-event.component';
import { ViewEventComponent } from './modules/events/view-event/view-event.component';


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
        path: 'products',
        component: InsertProductsComponent,
        canActivate: [RouteGuardService],
      },
      {
        path: 'ViewProducts',
        component: ViewProductComponent,
        canActivate: [RouteGuardService],
      },
      {
        path: 'UpdateProducts/:id',
        component: UpdateProductComponent,
        canActivate: [RouteGuardService],
      },
      {
        path: 'collectedWaste',
        component: CollectedWasteComponent,
        canActivate: [RouteGuardService],
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [RouteGuardService],
      },
      {
        path: 'insertCollectedWaste',
        component: InsertCollectedWasteComponent,
        canActivate: [RouteGuardService],
      },
      {
        path: 'viewCollectedWaste',
        component: ViewCollectedWasteComponent,
        canActivate: [RouteGuardService],
      },
      {
        path: 'productCats',
        component: InsertProductCatComponent,
        canActivate: [RouteGuardService],
      },
      {
        path: 'viewProductCat',
        component: ViewProductCatComponent,
        canActivate: [RouteGuardService],
      },
      {
        path: 'addEvent',
        component: AddEventComponent,
        canActivate: [RouteGuardService],
      },
      {
        path: 'viewEvent',
        component: ViewEventComponent,
        canActivate: [RouteGuardService],
      },
      {
        path: 'UpdateCollectedWastes/:id',
        component: UpdateCollectedWasteComponent,
        canActivate: [RouteGuardService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
