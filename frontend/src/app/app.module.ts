import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { HomeModule } from './webportal/layouts/home/home.module';
import {OutModule} from './webportal/layout/outsource/outsource.module';
import { LogoutComponent } from './modules/logout/logout.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxSocialShareModule } from 'ngx-social-share';
import {
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//import { ContactdetailsComponent } from './modules/contactdetails/contactdetails.component';
//import { ContactusComponent } from './webportal/modules/contactus/contactus.component';
// import { AccepttermsComponent } from './modules/terms/acceptterms/acceptterms.component';


@NgModule({
  declarations: [AppComponent, LogoutComponent,  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule, // default component and dashboard component has declared here
    OutModule,
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
    NgxSocialShareModule,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
