import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { HomeModule } from './webportal/layouts/home/home.module';
import { LogoutComponent } from './modules/logout/logout.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { InsertCollectedWasteComponent } from './modules/collected-waste/insert-collected-waste/insert-collected-waste.component';
import { ViewCollectedWasteComponent } from './modules/collected-waste/view-collected-waste/view-collected-waste.component';
import { WptermsComponent } from './webportal/modules/wpterms/wpterms.component';


//import { TermdiscripComponent } from './modules/terms/termdiscrip/termdiscrip.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LogoutComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule, // default component and dashboard component has declared here
    HomeModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
