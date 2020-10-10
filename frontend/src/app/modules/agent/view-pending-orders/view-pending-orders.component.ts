import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/webportal/pojo/customer';
import { Orders } from 'src/app/webportal/pojo/orders';
import { CustomerAuthService } from 'src/app/webportal/services/customer-auth.service';
import { CustomerOrderService } from 'src/app/webportal/services/customer-order.service';

@Component({
  selector: 'app-view-pending-orders',
  templateUrl: './view-pending-orders.component.html',
  styleUrls: ['./view-pending-orders.component.scss']
})
export class ViewPendingOrdersComponent implements OnInit {

  
  requestEmptyListFlag = false;
  retrieveOrders: Orders[];
  id: number;
  cus : Customer;

  constructor(private orderService: CustomerOrderService,private customerAuthService:CustomerAuthService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    
    this.orderService.getAllOrders().subscribe(
      (data) => {
        this.retrieveOrders = data;
        this.retrieveOrders.forEach(element=>{
          this.id = element.id
            // this.customer(this.id);
        });

        
        if (data.length > 0) {
          this.requestEmptyListFlag = false;
          console.log('test' + this.retrieveOrders);
        } else {
          this.requestEmptyListFlag = true;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  customer(id:number){
        this.customerAuthService.getCustomerById(id).subscribe(
          (data)=>{
            console.log(data);
            this.cus = data;
          }
        );
  }

}

