import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { InsertProductsComponent } from 'src/app/modules/products/insert-products/insert-products.component';
import { ViewProductComponent } from 'src/app/modules/products/view-product/view-product.component';
import { UpdateProductComponent } from 'src/app/modules/products/view-product/update-product/update-product.component';
import { UpdateCollectedWasteComponent } from 'src/app/modules/collected-waste/update-collected-waste/update-collected-waste.component';


import { SharedModule } from 'src/app/shared/shared.module';
import {
  MatSidenavModule,
  MatDividerModule,
  MatCardModule,
  MatPaginatorModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatMenuModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from 'src/app/modules/register/register.component';
import { ProfileComponent } from 'src/app/modules/profile/profile.component';
import { CollectedWasteComponent } from 'src/app/modules/collected-waste/collected-waste.component';
//import { InsertCollectedWasteComponent } from 'src/app/modules/collected-waste/insert-collected-waste/insert-collected-waste.component';
//import { ViewCollectedWasteComponent } from 'src/app/modules/collected-waste/view-collected-waste/view-collected-waste.component';

//import { ProductCatComponent } from 'src/app/modules/product-cat/product-cat.component';

import { InsertCollectedWasteComponent } from 'src/app/modules/collected-waste/insert-collected-waste/insert-collected-waste.component';
import { ViewCollectedWasteComponent } from 'src/app/modules/collected-waste/view-collected-waste/view-collected-waste.component';
// >>>>>>> 0ad62ffe9c04afa2b7ef7d485ac59c24a4390201
// =======
// import { InsertCollectedWasteComponent } from 'src/app/modules/collected-waste/insert-collected-waste/insert-collected-waste.component';
// import { ViewCollectedWasteComponent } from 'src/app/modules/collected-waste/view-collected-waste/view-collected-waste.component';
// >>>>>>> 0ad62ffe9c04afa2b7ef7d485ac59c24a4390201

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    LoginComponent,
    RegisterComponent,
    InsertProductsComponent,
    ViewProductComponent,
    UpdateProductComponent,
    ProfileComponent,
    CollectedWasteComponent,
   // ProductCatComponent,
    InsertCollectedWasteComponent,
    ViewCollectedWasteComponent,
    UpdateCollectedWasteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule, // to use router-outlet
    HttpClientModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
  ],
  providers: [DashboardService],
})
export class DefaultModule {}
