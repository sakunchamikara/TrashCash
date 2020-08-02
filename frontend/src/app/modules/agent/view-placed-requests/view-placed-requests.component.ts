import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WasteRequest } from 'src/app/webportal/pojo/waste-request';
import { CustomerWasteRequestService } from 'src/app/webportal/services/customer-waste-request.service';


@Component({
  selector: 'app-view-placed-requests',
  templateUrl: './view-placed-requests.component.html',
  styleUrls: ['./view-placed-requests.component.scss']
})
export class ViewPlacedRequestsComponent implements OnInit {


  requestEmptyListFlag = false;
  retrieveRequests : Observable<WasteRequest[]>

  requests : WasteRequest;

  constructor(private customerWasteRequestService:CustomerWasteRequestService ,) { }


  ngOnInit() {

    this.reloadData();
  }

  reloadData(){
    
    this.customerWasteRequestService.getCustomerWasteRequestList().subscribe(
      (data) => {
        this.retrieveRequests = data;
        if (data.length > 0) {
          this.requestEmptyListFlag = false;
          console.log("test"+this.retrieveRequests);
        } else {
          this.requestEmptyListFlag = true;
        }
      },
      (error) => {
        console.log(error);
      }
    );
   }

   confirm(id:number){
 
        this.customerWasteRequestService.getCustomerWasteRequest(id)
       .subscribe(data => {
     
      
      this.requests = data;
      this.requests.status='Confirmed';
      this.requests.quantity=34567;

      console.log(data);
      
    }, error => console.log(error));
        
 
    this.customerWasteRequestService.updateCustomerWasteRequest(id,this.requests)
    .subscribe(data => console.log(data),
      error => {console.log(error);});
      this.requests = new WasteRequest();
 
   }


}
