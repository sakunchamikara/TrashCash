import { Component, OnInit } from '@angular/core';
import { CustomerFeedback } from 'src/app/webportal/pojo/customer-feedback';
import { CustomerFeedbackService } from 'src/app/webportal/services/customer-feedback.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-feedback',
  templateUrl: './customer-feedback.component.html',
  styleUrls: ['./customer-feedback.component.scss'],
})
export class CustomerFeedbackComponent implements OnInit {
  submitted = false;
  customerFeed = new CustomerFeedback();

  constructor(private customerFeedbackService: CustomerFeedbackService) {}

  successMsg: any;

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    this.save();
    console.log('aaaaaa ');
  }

  save() {
    this.customerFeed.date = new Date();
    this.customerFeed.status ='New';
     //console.log(this.customer.firstName);
    //console.log(this.customer.firstName);
    // this.retrieveRequests=this.customerWasteRequestService.getCustomerWasteRequests(this.customer.firstName);
    //this.wasteRequest.customer = this.customer.firstName;
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
