import { Component, OnInit } from '@angular/core';
import { CustomerFeedback } from 'src/app/webportal/pojo/customer-feedback';
import { CustomerFeedbackService } from 'src/app/webportal/services/customer-feedback.service';
import { Observable } from 'rxjs';
import { CustomerAuthService } from '../../services/customer-auth.service';
import { Customer } from '../../pojo/customer';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  submitted = false;
  customerFeed = new CustomerFeedback();

  customerEmail: string;
  customerType: string;
  customerName: string;
  currentCustomer: Customer;
  feed;

  constructor(private customerFeedbackService: CustomerFeedbackService,
    private customerService: CustomerAuthService) {}

  successMsg: any;

  feedback: CustomerFeedback;
  addedFeedbacks: Observable<CustomerFeedback[]>;

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.customerFeedbackService.getPublishedFeedback().subscribe((data) => {
      console.log(data);
      this.addedFeedbacks = data;
    });
  }

  

  onSubmit() {
    this.submitted = true;
    this.save();
    console.log('aaaaaa ');
  }

  save() {
    this.customerFeed.date = new Date();
    this.customerFeed.status = 'New';
    // console.log(this.customer.firstName);
    // console.log(this.customer.firstName);
    // this.retrieveRequests=this.customerWasteRequestService.getCustomerWasteRequests(this.customer.firstName);
    // this.wasteRequest.customer = this.customer.firstName;
    this.customerFeedbackService
      .createCustomerFeedback(this.customerFeed)
      .subscribe(
        (data) => {
          console.log(data);
          this.customerFeed = new CustomerFeedback();
          this.successMsg = `feedback added successfully !`;
          console.log(this.successMsg);
          this.customerFeedbackService.alert(
            'Thank You',
            'Your Feedback has been successfully recorded'
          );
          // this.reloadData();

          //     }
        },
        (error) => {
          console.log(error);
        }
      );
  }


}
