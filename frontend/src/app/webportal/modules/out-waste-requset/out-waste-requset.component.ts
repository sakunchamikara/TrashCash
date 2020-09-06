import { Component, OnInit } from '@angular/core';
import { OutWasteRequest } from 'src/app/webportal/pojo/out-waste-request';
import { CollectedWasteServiceService } from 'src/app/service/collected-waste-service.service';
import { OutsourceWasteRequsetService } from '../../services/outsource-waste-requset.service';
import { CustomerAuthService } from '../../services/customer-auth.service';
import {CollectedWaste} from 'src/app/pojo/collectedWaste'
import { Customer } from '../../pojo/customer';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-out-waste-requset',
  templateUrl: './out-waste-requset.component.html',
  styleUrls: ['./out-waste-requset.component.scss']
})
export class OutWasteRequsetComponent implements OnInit {
  wasteRequest = new OutWasteRequest();
  retrieveRequests : Observable<OutWasteRequest[]>

  customer: Customer;
  collectwaste :CollectedWaste;
  name:string;

  constructor(private service:CollectedWasteServiceService,private outsourceWasteRequsetService:OutsourceWasteRequsetService,private authService: CustomerAuthService,
    private route: Router,private location: Location) { }
  public listItems: Array<string> = [];
  successMsg: any;
  errorMsg: any;
  email:any;
  qua :any;
  cus : any;
  model: any = {};

  ngOnInit() {
    this.dropdownRefresh();
    this.email = this.authService.getAuthenticatedCustomer();
    this.customer = new Customer();
    this.authService.getCustomer(this.email).subscribe((data) => {
    this.customer = data;
     //  this.cus=JSON.stringify(this.customer.firstName);
    
    
     
     });
    this.collectwaste = new CollectedWaste();
    //this.qua = this.collectwaste.quantity;

    console.log(this.email);

    if(this.email){
      this.reloadData();
   }
    else{
     this.route.navigate(['/customer/login']);
     }
  }

  reloadData(){
    //this.retrieveRequests=this.outsourceWasteRequsetService.getCustomerWasteRequestList();
    this.retrieveRequests=this.outsourceWasteRequsetService.getWasteListByEmail(this.email);
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
  
// this.pageRefresh();
 
 }

  dropdownRefresh(){
    this.service.getWasteCatDropdownValues().subscribe(data=>{
     console.log(data);
      data.forEach(element => {
        this.listItems.push(element["wasteType"])
      });
    })
      }

   onSubmit(){
        //this.submitted = true;
        this.save();
        //this.updatesucessBox();
        this.pageRefresh();
        alert('SUCCESS!!');
         
        
      }
      pageRefresh() {
        location.reload();
     }

      save(){
        this.wasteRequest.date = new Date();
        this.wasteRequest.status ='Pending';

        console.log(this.customer.firstName);
        console.log(this.customer.email);
        console.log(this.wasteRequest.wasteType);
        
        //this.retrieveRequests=this.outsourceWasteRequsetService.getCustomerWasteRequestList(this.customer.firstName);
        this.wasteRequest.customer = this.customer.firstName;
        this.wasteRequest.email = this.customer.email;
        

        this.outsourceWasteRequsetService.createOutsourceWasteRequest(this.wasteRequest)
        .subscribe(
          (data)=>{console.log(data);
            //this.updateBox(this.wasteRequest.wasteType);
            this.wasteRequest = new OutWasteRequest();
            this.updateBox(this.wasteRequest.wasteType);
            // this.updatesucessBox();
            //this.reloadData();
           
          },
        
            (error)=>{ 
              console.log(error); 
              // this.errorMsg = `Something went Wrong !!!`;
              }
              );     
        }
        // public updateBox(wasteType: string){
        //   this.outsourceWasteRequsetService
        //   .alert('Waste Category  Added','Waste Category '+wasteType+'  Request.');
        
        //  }

         public updateBox(wasteType: string){
            this.outsourceWasteRequsetService
                .alert('Waste Category  Availabale','Waste Category '+wasteType+'  in stock.');

 }
        // public updatesucessBox(){
        //   this.outsourceWasteRequsetService
        //   .confirm('Please confirm..', 'Do you really want to Add?')
        //   .then((confirmed) => {
        //     // console.log('User confirmed:', confirmed);
        //     if (confirmed == true) {
        //       this.reloadData();
        //     }
        //   })
        //   .catch(() =>
        //     console.log(
        //       'User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'
        //     )
        //   );
        
        // // this.pageRefresh();
        
        //  }

        deleteCustomerWasteRequest(id: number) {
          this.outsourceWasteRequsetService.deleteCustomerWasteRequest(id).subscribe(
            (data) => {
              console.log(data);
               this.reloadData();
            },
            (error) => console.log(error)
          );
        }
      
      
        public openConfirmationDialog(id: number) {
          this.outsourceWasteRequsetService
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
