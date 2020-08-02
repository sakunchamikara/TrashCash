import { Component, OnInit } from '@angular/core';
import { OutWasteRequest } from 'src/app/webportal/pojo/out-waste-request';
import { CollectedWasteServiceService } from 'src/app/service/collected-waste-service.service';
import { OutsourceWasteRequsetService } from '../../services/outsource-waste-requset.service';
import { CustomerAuthService } from '../../services/customer-auth.service';
import { Customer } from '../../pojo/customer';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-out-waste-requset',
  templateUrl: './out-waste-requset.component.html',
  styleUrls: ['./out-waste-requset.component.scss']
})
export class OutWasteRequsetComponent implements OnInit {
  wasteRequest = new OutWasteRequest();
  retrieveRequests : Observable<OutWasteRequest[]>

  customer: Customer;
  name:string;

  constructor(private service:CollectedWasteServiceService,private outsourceWasteRequsetService:OutsourceWasteRequsetService,private authService: CustomerAuthService,private route: Router) { }
  public listItems: Array<string> = [];
  successMsg: any;
  errorMsg: any;
  email:any;
  cus : any;

  ngOnInit() {
    this.dropdownRefresh();
    this.email = this.authService.getAuthenticatedCustomer();
    this.customer = new Customer();
    this.authService.getCustomer(this.email).subscribe((data) => {
    this.customer = data;
     //  this.cus=JSON.stringify(this.customer.firstName);
    
    
     
     });

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
      }

      save(){
        this.wasteRequest.date = new Date();

        console.log(this.customer.firstName);
        console.log(this.customer.email);
        //this.retrieveRequests=this.outsourceWasteRequsetService.getCustomerWasteRequestList(this.customer.firstName);
        this.wasteRequest.customer = this.customer.firstName;
        this.wasteRequest.email = this.customer.email;

        this.outsourceWasteRequsetService.createOutsourceWasteRequest(this.wasteRequest)
        .subscribe(
          (data)=>{console.log(data);
            this.wasteRequest = new OutWasteRequest();
            console.log("dal");
            this.reloadData();
           // this.successMsg = `waste added successfully !`;
            //console.log(this.successMsg)
            //this.gotoList();
          },
        
            (error)=>{ 
              console.log(error); 
              // this.errorMsg = `Something went Wrong !!!`;
              }
              );     
        }

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
