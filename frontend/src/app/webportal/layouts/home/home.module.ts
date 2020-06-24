import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { IncludeModule } from '../../includes/include.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { WelcomeComponent } from '../../modules/welcome/welcome.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShopComponent } from '../../modules/shop/shop.component';



@NgModule({
  declarations: [HomeComponent, WelcomeComponent, ShopComponent],
  imports: [
    CommonModule,
    RouterModule,
    IncludeModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
  ],
})
export class HomeModule {}
