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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewPlacedRequestsComponent } from 'src/app/modules/agent/view-placed-requests/view-placed-requests.component';
import { ViewAgentConfirmedRequestComponent } from 'src/app/modules/agent/view-agent-confirmed-request/view-agent-confirmed-request.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AllviewComponent } from 'src/app/modules/products/allview/allview.component';

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
import { UpdateEventComponent } from 'src/app/modules/events/update-event/update-event.component';
import { ViewEventComponent } from 'src/app/modules/events/view-event/view-event.component';
import { AddEventComponent } from 'src/app/modules/events/add-event/add-event.component';
import { InsertCollectedWasteComponent } from 'src/app/modules/collected-waste/insert-collected-waste/insert-collected-waste.component';
import { ViewCollectedWasteComponent } from 'src/app/modules/collected-waste/view-collected-waste/view-collected-waste.component';
import { InsertProductCatComponent } from 'src/app/modules/product-cat/insert-product-cat/insert-product-cat.component';
import { ViewProductCatComponent } from 'src/app/modules/product-cat/view-product-cat/view-product-cat.component';
import { UpdateProductCatComponent } from 'src/app/modules/product-cat/update-product-cat/update-product-cat.component';
import { TermsComponent } from 'src/app/modules/terms/terms.component';
import { AddtermsComponent } from 'src/app/modules/terms/addterms/addterms.component';
import { ViewtermsComponent } from 'src/app/modules/terms/viewterms/viewterms.component';
import { UpdateTermsComponent } from 'src/app/modules/terms/update-terms/update-terms.component';
import { AccepttermsComponent} from 'src/app/modules/terms/acceptterms/acceptterms.component';
import { ConfirmationDialogComponent } from 'src/app/modules/confirmation-dialog/confirmation-dialog.component';
import { AlertDialogComponent } from 'src/app/modules/alert-dialog/alert-dialog.component';
import { CollectedWasteServiceService } from 'src/app/service/collected-waste-service.service';
import { NewtermsService } from 'src/app/service/newterms.service';
import { OutWasteRequestComponent } from 'src/app/modules/out-waste-request/out-waste-request.component';
import { ViewDbComponent } from 'src/app/modules/view-db/view-db.component';
import { SendMailComponent } from 'src/app/modules/send-mail/send-mail.component';
import { ConfirmWasteRequestComponent } from 'src/app/modules/out-waste-request/confirm-waste-request/confirm-waste-request.component';
import { DisplayCustomerFeedbackComponent } from 'src/app/modules/display-customer-feedback/display-customer-feedback.component';
import { GenerateReportsComponent } from 'src/app/modules/generate-reports/generate-reports.component';
import { PendingOrdersComponent } from 'src/app/modules/orders/pending-orders/pending-orders.component';
import { AcceptedOrdersComponent } from 'src/app/modules/orders/accepted-orders/accepted-orders.component';
import { CompletedOrdersComponent } from 'src/app/modules/orders/completed-orders/completed-orders.component';
import { ContactdetailsComponent } from 'src/app/modules/contactdetails/contactdetails.component';
import { ViewConfirmedOrdersComponent } from 'src/app/modules/agent/view-confirmed-orders/view-confirmed-orders.component';
import { ViewPendingOrdersComponent } from 'src/app/modules/agent/view-pending-orders/view-pending-orders.component';

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
    AddEventComponent,
    ViewEventComponent,
    UpdateEventComponent,
    InsertCollectedWasteComponent,
    ViewCollectedWasteComponent,
    UpdateCollectedWasteComponent,
    OutWasteRequestComponent,
    InsertProductCatComponent,
    ViewProductCatComponent,
    UpdateProductCatComponent,
    UpdateCollectedWasteComponent,
    TermsComponent,
    AddtermsComponent,
    ViewtermsComponent,
    UpdateTermsComponent,
    ConfirmationDialogComponent,
    ViewPlacedRequestsComponent,
    ViewDbComponent,
    ConfirmWasteRequestComponent,
    AlertDialogComponent,
    SendMailComponent,
    ViewPlacedRequestsComponent,
    DisplayCustomerFeedbackComponent,
    GenerateReportsComponent,
    AccepttermsComponent,
    ViewAgentConfirmedRequestComponent,
    PendingOrdersComponent,
    AcceptedOrdersComponent,
    CompletedOrdersComponent,
    ContactdetailsComponent,
   // AllviewComponent,
    ViewConfirmedOrdersComponent,
    ViewPendingOrdersComponent,
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
    NgbModule,
  ],
  providers: [DashboardService, CollectedWasteServiceService, NewtermsService],
  entryComponents: [ConfirmationDialogComponent, AlertDialogComponent],
})
export class DefaultModule {}
