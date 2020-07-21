import { Component, OnInit } from '@angular/core';
import { WasteRequest } from 'src/app/webportal/pojo/waste-request';
import { CustomerWasteRequestService } from '../../services/customer-waste-request.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waste-request',
  templateUrl: './waste-request.component.html',
  styleUrls: ['./waste-request.component.scss']
})
export class WasteRequestComponent implements OnInit {

  Types: any = ['Plastic', 'Paper', 'E-Waste'];
  wasteRequest = new WasteRequest();
  retrieveRequests : Observable<WasteRequest[]>
  submitted = false;


  constructor(private customerWasteRequestService:CustomerWasteRequestService,private router :Router) { }

  successMsg: any;
  errorMsg: any;

  ngOnInit() {
    this.reloadData();
  }

  
  onSubmit(){
    this.submitted = true;
    this.save();

    console.log("aaaaaa "+this.wasteRequest.quantity);
    console.log("aaaaaa "+this.wasteRequest.wasteType);
    console.log("aaaaaa"+this.wasteRequest.date);
  }
  save(){
    this.wasteRequest.date = new Date();
    this.customerWasteRequestService.createCustomerWasteRequest(this.wasteRequest)
    .subscribe(
      (data)=>{console.log("test"+data);
        this.wasteRequest = new WasteRequest();
        this.successMsg = `waste added successfully !`;
        console.log(this.successMsg);
        this.reloadData();
        
      }
    );

    
  }

  reloadData(){
   this.retrieveRequests=this.customerWasteRequestService.getCustomerWasteRequestList();
  }

  deleteCustomerWasteRequest(id: number) {
    this.customerWasteRequestService.deleteCustomerWasteRequest(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }


  public openConfirmationDialog(id: number) {
    this.customerWasteRequestService
      .confirm('Please confirm..', 'Do you really want to cancel?')
      .then((confirmed) => {
        // console.log('User confirmed:', confirmed);
        if (confirmed == true) {
          this.deleteCustomerWasteRequest(id);
        }
      })
      .catch(() =>
        console.log(
          'User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'
        )
      );
  }

}
