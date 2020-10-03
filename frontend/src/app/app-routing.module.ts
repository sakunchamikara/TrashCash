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
import { SendMailComponent } from './modules/send-mail/send-mail.component';
import { WptermsComponent } from './webportal/modules/wpterms/wpterms.component';
import { CustomerLoginComponent } from './webportal/modules/customer-login/customer-login.component';
import { CustomerRegisterComponent } from './webportal/modules/customer-register/customer-register.component';
import { WasteRequestComponent } from './webportal/modules/waste-request/waste-request.component';
import { CartComponent } from './webportal/modules/cart/cart.component';
import { CustomerFeedbackComponent } from './webportal/modules/customer-feedback/customer-feedback.component';


import { ProductDetailsComponent } from './webportal/modules/product-details/product-details.component';
import { ViewPlacedRequestsComponent } from 'src/app/modules/agent/view-placed-requests/view-placed-requests.component';
import { TermDetailsComponent } from './webportal/modules/term-details/term-details.component';
import { CustomerLogoutComponent } from './webportal/modules/customer-logout/customer-logout.component';
import { OutWasteRequsetComponent } from './webportal/modules/out-waste-requset/out-waste-requset.component';
import { OutWasteRequestComponent } from './modules/out-waste-request/out-waste-request.component';
import { ViewDbComponent } from './modules/view-db/view-db.component';
import { ShowEventComponent } from './webportal/modules/show-event/show-event.component';
import { EventDetailsComponent } from './webportal/modules/show-event/event-details/event-details.component';
import { ConfirmWasteRequestComponent } from './modules/out-waste-request/confirm-waste-request/confirm-waste-request.component';
import { DisplayCustomerFeedbackComponent } from './modules/display-customer-feedback/display-customer-feedback.component';
import { LocationComponent } from './webportal/modules/waste-request/location/location.component';
import { ViewAgentConfirmedRequestComponent } from 'src/app/modules/agent/view-agent-confirmed-request/view-agent-confirmed-request.component';
import { CheckOutComponent } from './webportal/modules/check-out/check-out.component';
import { CustomerAccountComponent } from './webportal/modules/customer-account/customer-account.component';
import { RecycledProductAddComponent } from './webportal/modules/Outsource-company/recycled-product-add/recycled-product-add.component';
import { OutsourceComponent } from './webportal/layout/outsource/outsource.component';
import { OutprofileComponent } from './webportal/outsource/outprofile/outprofile.component';
import { OutdashboardComponent } from './webportal/outsource/outdashboard/outdashboard.component';
import { OutRequestWasteComponent } from './webportal/outsource/out-request-waste/out-request-waste.component';


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
        path: 'showevent',
        component: ShowEventComponent,
      },
      {
        path: 'event-details/:id',
        component: EventDetailsComponent,
      },
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
        component:OutWasteRequsetComponent,
        // path: 'outsource-waste-request',
        // component: OutWasteRequsetComponent,
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
        path: 'feedback',
        component: CustomerFeedbackComponent,
      },
      {
        path: 'product/:id',
        component: ProductDetailsComponent,
      },
      {
        path: 'terms-details/:id',
        component: TermDetailsComponent,
      },
      {
        path: 'location',
        component: LocationComponent,
      },
      {
        path: 'checkOut',
        component: CheckOutComponent,
      },
      {
        path: 'myAccount',
        component: CustomerAccountComponent,

      },
      {
        path:'Productadd',
        component:RecycledProductAddComponent
      },
      // {
      //   path:'outsource',
      //   component:OutsourceComponent
      // }
    ],
  },
  {
    path:'outsource',
    component:OutsourceComponent,
    children:[
      {
        path:'profile',
        component:OutprofileComponent,
      },
      {
        path:'dashboard',
        component:OutdashboardComponent,
      },
      {
        path:'WasteRequsetAdd',
        component:OutRequestWasteComponent,
      }
    ]
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
        path: 'sendMail',
        component: SendMailComponent,
        // canActivate: [RouteGuardService],
      },
      {
        path: 'viewPlacedRequests',
        component: ViewPlacedRequestsComponent,
      },
      {
        path: 'displayCustomerFeedbacks',
        component: DisplayCustomerFeedbackComponent,
      },
      {
        path:'viewoutSourceWasteRequest',
        component: ConfirmWasteRequestComponent,
      },
      {
        path:'ViewDB',
        component:ViewDbComponent,
      },
      {
        path: 'ViewOutRequest',
        component: OutWasteRequestComponent,
      },
      // {
      //   path: 'ViewDB',
      //   component: ViewDbComponent,
      // },
      {
        path: 'viewConfirmedRequests',
        component: ViewAgentConfirmedRequestComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
