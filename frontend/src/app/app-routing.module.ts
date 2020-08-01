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
import { InsertCollectedWasteComponent } from './modules/collected-waste/insert-collected-waste/insert-collected-waste.component';
import { ViewCollectedWasteComponent } from './modules/collected-waste/view-collected-waste/view-collected-waste.component';
import { InsertProductCatComponent } from './modules/product-cat/insert-product-cat/insert-product-cat.component';
import { ViewProductCatComponent } from './modules/product-cat/view-product-cat/view-product-cat.component';
import { UpdateProductCatComponent } from './modules/product-cat/update-product-cat/update-product-cat.component';

import { AddEventComponent } from './modules/events/add-event/add-event.component';
import { ViewEventComponent } from './modules/events/view-event/view-event.component';
import { UpdateEventComponent } from './modules/events/update-event/update-event.component';
import { TermsComponent } from './modules/terms/terms.component';
import { AddtermsComponent } from './modules/terms/addterms/addterms.component';
import { ViewtermsComponent } from './modules/terms/viewterms/viewterms.component';
import { UpdateTermsComponent } from './modules/terms/update-terms/update-terms.component';
import { WptermsComponent } from './webportal/modules/wpterms/wpterms.component';
import { CustomerLoginComponent } from './webportal/modules/customer-login/customer-login.component';
import { CustomerRegisterComponent } from './webportal/modules/customer-register/customer-register.component';
import { WasteRequestComponent } from './webportal/modules/waste-request/waste-request.component';
import { CartComponent } from './webportal/modules/cart/cart.component';
import { ProductDetailsComponent } from './webportal/modules/product-details/product-details.component';
import { ViewPlacedRequestsComponent } from 'src/app/modules/agent/view-placed-requests/view-placed-requests.component';
import { TermDetailsComponent } from './webportal/modules/term-details/term-details.component';
import { CustomerLogoutComponent } from './webportal/modules/customer-logout/customer-logout.component';
import { OutWasteRequsetComponent } from './webportal/modules/out-waste-requset/out-waste-requset.component';

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
      {
        path: 'wpterms',
        component: WptermsComponent,
      },
      {
        path: 'login',
        component: CustomerLoginComponent,
      },
      {
        path: 'register',
        component: CustomerRegisterComponent,
      },
      {
        path: 'logout',
        component: CustomerLogoutComponent,
      },
      {
        path: 'waste-request',
        component: WasteRequestComponent,
      },
      {
        path:'outsource-waste-request',
        component: OutWasteRequsetComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'wpterms',
        component: WptermsComponent,
      },
      {
        path: 'product/:id',
        component: ProductDetailsComponent,
      },
      {
        path: 'terms-details/:id',
        component: TermDetailsComponent,
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
        path: 'updateEvents/:id',
        component: UpdateEventComponent,
        canActivate: [RouteGuardService],
      },
      {
        path: 'UpdateCollectedWastes/:id',
        component: UpdateCollectedWasteComponent,
        canActivate: [RouteGuardService],
      },
      {
        path: 'UpdateCollectedWastes/:id',
        component: UpdateCollectedWasteComponent,
        canActivate: [RouteGuardService],
      },
      {
        path: 'terms',
        component: TermsComponent,
      },
      {
        path: 'addterms',
        component: AddtermsComponent,
      },

      {
        path: 'viewterms',
        component: ViewtermsComponent,
      },
      {
        path: 'UpdateTerms/:id',
        component: UpdateTermsComponent,
      },
      {
        path: 'UpdateProductCats/:id',
        component: UpdateProductCatComponent,
      },
      {
        path: 'viewPlacedRequests',
        component: ViewPlacedRequestsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
