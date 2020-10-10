import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CustomerAuthService } from "src/app/webportal/services/customer-auth.service";
import { CustomerFeedbackService } from 'src/app/webportal/services/customer-feedback.service';
import { CustomerFeedback } from 'src/app/webportal/pojo/customer-feedback';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/webportal/pojo/customer';

//import { CustomerAuthService } from '../../services/customer-auth.service';

@Component({
  selector: 'app-customer-my-feedbacks',
  templateUrl: './customer-my-feedbacks.component.html',
  styleUrls: ['./customer-my-feedbacks.component.scss']
})
export class CustomerMyFeedbacksComponent implements OnInit {

  customerId: number;
  userFeedbacks: Observable<CustomerFeedback[]>;
  // added: Observable<CustomerFeedback[]>;

  customerEmail: any;
  feedback = new CustomerFeedback();
  // customerType: string;
  // customerName: string;
  // currentCustomer: Customer;
  // feed;

  constructor(
    private customerAuth: CustomerAuthService,
    private route: ActivatedRoute,
    private customerFeedbackService: CustomerFeedbackService,
    private customerService: CustomerAuthService
  ) {
   
   }

  ngOnInit() {
    this.reloadData();
    
  }

  reloadData() {
    //console.log("what");
    this.customerEmail = this.customerAuth.getAuthenticatedCustomer();
    console.log(this.customerEmail);
    this.feedback.email = this.customerEmail;
    console.log(this.feedback.email);
    this.customerFeedbackService.getFeedbacksByEmail(this.customerEmail).subscribe(
      data => {
        console.log(data);
        this.userFeedbacks = data;
      },
      error => console.log(error));
    // console.log(this.userFeedbacks);
    // console.log("aa"+this.userFeedbacks);
  }




}
