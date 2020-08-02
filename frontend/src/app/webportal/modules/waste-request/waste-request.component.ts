import { Component, OnInit } from '@angular/core';
import { WasteRequest } from 'src/app/webportal/pojo/waste-request';
import { CustomerWasteRequestService } from '../../services/customer-waste-request.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { Customer } from '../../pojo/customer';
import { CustomerAuthService } from '../../services/customer-auth.service';
import { stringify } from 'querystring';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

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
  customer: Customer;
  name:string;


  constructor(private customerWasteRequestService:CustomerWasteRequestService,private authService: CustomerAuthService,private route: Router) { }

  successMsg: any;
  errorMsg: any;
  email:any;
  cus : any;
  ngOnInit() {

    this.email = this.authService.getAuthenticatedCustomer();
    this.customer = new Customer();
    this.authService.getCustomer(this.email).subscribe((data) => {
      this.customer = data;
      //  this.cus=JSON.stringify(this.customer.firstName);
    this.successMsg=null;
    
     
    });

    console.log(this.email);

    if(this.email){
      this.reloadData();
    }
    else{
      this.route.navigate(['/customer/login']);
    }

    
  }

  
  onSubmit(){

   

    this.submitted = true;
    this.save();

    console.log("aaaaaa "+this.wasteRequest.wasteType);
    
  }
  save(){
    this.wasteRequest.date = new Date();
    this.wasteRequest.status ='Pending';

    console.log(this.customer.firstName);
    // this.retrieveRequests=this.customerWasteRequestService.getCustomerWasteRequests(this.customer.firstName);
    this.wasteRequest.customer = this.customer.firstName;
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
     this.retrieveRequests.forEach(obj=>{
          this.successMsg=null;
       obj.forEach(childOb=>{
           if(childOb.status=='Pending'){
            this.successMsg=null;
             this.successMsg="Pending";
             
             console.log(this.successMsg);
           }else if(childOb.status=='Confirmed'){
            this.successMsg=null;
             this.successMsg="Confirmed";
            
             console.log(this.successMsg);
           }else{
            this.successMsg=null;
             this.successMsg="Collected";
             
             console.log(this.successMsg);
           }
       });
     });
  

     
     console.log("aa"+this.retrieveRequests);
    // this.retrieveRequests=this.customerWasteRequestService.getCustomerWasteRequests(this.customer.firstName);
   
  
  
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

