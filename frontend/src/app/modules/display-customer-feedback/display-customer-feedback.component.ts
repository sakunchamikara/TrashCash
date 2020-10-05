import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerFeedback } from 'src/app/webportal/pojo/customer-feedback';
import { CustomerFeedbackService } from 'src/app/webportal/services/customer-feedback.service';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ProductcatService } from 'src/app/service/productcat.service';

@Component({
  selector: 'app-display-customer-feedback',
  templateUrl: './display-customer-feedback.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./display-customer-feedback.component.scss']
})
export class DisplayCustomerFeedbackComponent implements OnInit {

  closeResult: string;
  
feedback: CustomerFeedback;
  addedFeedbacks : Observable<CustomerFeedback[]>
  // closeResult: string;

  constructor(private customerFeedbackService:CustomerFeedbackService,
              private modalService: NgbModal,
              private productcatService: ProductcatService) {
               
               }

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

  viewMsg(msg: any,cid: number) {

    
    this.customerFeedbackService.getCustomerFeedback(cid)
    .subscribe(data => {
  
   
      this.feedback = data;
   this.feedback.status="Viewed";


   console.log(data);

   this.customerFeedbackService.updateCustomerFeedback(cid,this.feedback)
 .subscribe(data => console.log(data),
   error => {console.log(error);});
   this.feedback = new CustomerFeedback();

  this.productcatService.alert('Feedback ID -'+cid,msg);
//this.reloadData();
//  var newStatus = (<HTMLInputElement>document.getElementById('labelText')).value;
//   newStatus = this.feedback.status;
   // (document.getElementById('labelText') as HTMLBodyElement).textContent = "Viewed";
   
 }, error => console.log(error));
     

 
    // (document.getElementById('labelText') as HTMLImageElement). = badge badge-pill badge-success;
  }


}
