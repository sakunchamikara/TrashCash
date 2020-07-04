import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { HomeModule } from './webportal/layouts/home/home.module';
import { LogoutComponent } from './modules/logout/logout.component';
// import { ProductDetailsComponent } from './modules/products/view-product/product-details/product-details.component';
// import { UpdateComponent } from './modules/products/view-product/update/update.component';
// import { UpdateProductComponent } from './modules/products/view-product/update-product/update-product.component';
// import { ViewProductComponent } from './modules/products/view-product/view-product.component';
// import { InsertProductsComponent } from './modules/products/insert-products/insert-products.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    //ProductDetailsComponent,
    //UpdateComponent,
    // UpdateProductComponent,
    // ViewProductComponent,
    // InsertProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule, // default component and dashboard component has declared here
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
