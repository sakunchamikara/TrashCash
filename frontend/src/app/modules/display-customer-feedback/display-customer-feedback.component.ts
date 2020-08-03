import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerFeedback } from 'src/app/webportal/pojo/customer-feedback';
import { CustomerFeedbackService } from 'src/app/webportal/services/customer-feedback.service';

@Component({
  selector: 'app-display-customer-feedback',
  templateUrl: './display-customer-feedback.component.html',
  styleUrls: ['./display-customer-feedback.component.scss']
})
export class DisplayCustomerFeedbackComponent implements OnInit {

  addedFeedbacks : Observable<CustomerFeedback[]>

  constructor(private customerFeedbackService:CustomerFeedbackService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    
    this.customerFeedbackService.getCustomerFeedbackList().subscribe(
      (data)=>{
        console.log(data);
        this.addedFeedbacks = data;
      }
    );
    

  }


}
