import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { HomeModule } from './webportal/layouts/home/home.module';
import { LogoutComponent } from './modules/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
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
