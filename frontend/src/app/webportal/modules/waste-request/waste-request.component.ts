import { Component, OnInit } from '@angular/core';
import { WasteRequest } from 'src/app/webportal/pojo/waste-request';
import { CustomerWasteRequestService } from '../../services/customer-waste-request.service';

@Component({
  selector: 'app-waste-request',
  templateUrl: './waste-request.component.html',
  styleUrls: ['./waste-request.component.scss']
})
export class WasteRequestComponent implements OnInit {

  Types: any = ['Plastic', 'Paper', 'E-Waste'];
  wasteRequest = new WasteRequest();
  submitted = false;


  constructor(private customerWasteRequestService:CustomerWasteRequestService) { }

  successMsg: any;
  errorMsg: any;

  ngOnInit() {

  }

  
  onSubmit(){
    this.submitted = true;
    this.save();
  }
  save(){
    this.customerWasteRequestService.createCustomerWasteRequest(this.wasteRequest)
    .subscribe(
      (data)=>{console.log(data);
        this.wasteRequest = new WasteRequest();
        this.successMsg = `waste added successfully !`;
        console.log(this.successMsg)
        this.gotoList();
      }
    );
  }

  gotoList(){
    
  }

}
