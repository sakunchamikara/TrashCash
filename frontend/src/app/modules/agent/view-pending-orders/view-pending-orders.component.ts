import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { NewtermsService } from 'src/app/service/newterms.service';
import { OrdersService } from 'src/app/service/orders.service';
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

  type: string;
  ordersList: Array<Orders>;
  pendingOrder = new Orders();

  constructor(private ordersService: OrdersService,private confirmationDialog: NewtermsService) { }


  ngOnInit() {
    this.getPendingOrders();
  }

  getPendingOrders() {
    this.type = 'Accepted';
    this.ordersService.getOrdersByType(this.type).subscribe(
      (data) => {
        this.ordersList = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  confirm(id:number){
    console.log("Completed");

    this.confirmationDialog
      .confirm('Please confirm..', 'Do you really want to Update Order Status?')
      .then((complete) => {
        if (complete) {
          this.pendingOrder.id = id;
          this.pendingOrder.status = 'Completed';
          this.ordersService
            .updatePendingOrderStatus(this.pendingOrder)
            .subscribe(
              (data) => {
                console.log(data);
                this.getPendingOrders();
              },
              (error) => {
                console.log('error in update ending orders');
              }
            );
        }
      })
      .catch(() => console.log('cancelled'));
  }

}

