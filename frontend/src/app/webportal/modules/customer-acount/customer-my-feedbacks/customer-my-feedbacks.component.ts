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
  addedFeedbacks: Observable<CustomerFeedback[]>;
  added: Observable<CustomerFeedback[]>;

  customerEmail: string;
  customerType: string;
  customerName: string;
  currentCustomer: Customer;
  feed;

  constructor(
    private customerAuth: CustomerAuthService,
    private route: ActivatedRoute,
    private customerFeedbackService: CustomerFeedbackService,
    private customerService: CustomerAuthService
  ) {
   
   }

  ngOnInit() {
    this.reloadData();
    this.getUserFeedback();
  }

  reloadData() {
    this.customerFeedbackService.getPublishedFeedback().subscribe((data) => {
      console.log(data);
      this.addedFeedbacks = data;
    });
  }

//   getUserFeedback(){
//   if (this.customerService.isCustomerLoggedIn()) {
//     this.customerEmail = this.customerService.getAuthenticatedCustomer();
//     this.customerService.getCustomer(this.customerEmail).subscribe(
//       (data) => {
//         this.currentCustomer = data;
//         this.customerType = this.currentCustomer.type;
//         this.customerName = this.currentCustomer.firstName;
//         this.customerEmail = this.currentCustomer.email;
        
//       },
//       (error) => {
//         console.log("error in getcustomer function");
//       }
//     );
//   }
// }

getUserFeedback(){

  var dueDate;
  var nowStatus;
  var mail;
this.customerEmail = this.customerService.getAuthenticatedCustomer();
  
this.customerFeedbackService.getFeedbackOfUser().subscribe(
  
  (data)=>{
    this.feed = data;
    console.log(data);
    this.feed.forEach(element => {
   console.log(this.customerEmail);
   mail = this.customerEmail;
      //console.log(fb.cusFeedEmail)
      let val = data.find(fb => {
        console.log(mail);
        console.log(fb.cusFeedEmail);
                      if (fb.cusFeedEmail == mail){
                         dueDate = fb.date;
                         nowStatus = fb.status;
                       console.log("dueDate");
                         return dueDate;
                         this.added=fb;
                        // console.log("type = "+fb.cusFeedEmail);
                        // console.log("id = "+fb.status);
                        // return fb.total;
                        
                      }

                    return 1;
                      
                      
                      
                    });
                    this.viewfeeback(dueDate);
                  
                
    });
  }
);


}

viewfeeback(dueDate:Date){
  console.log(dueDate)
}

}
