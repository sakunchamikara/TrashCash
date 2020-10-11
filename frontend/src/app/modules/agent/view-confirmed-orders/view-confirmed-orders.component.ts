import { Component, OnInit } from '@angular/core';
import { NewtermsService } from 'src/app/service/newterms.service';
import { OrdersService } from 'src/app/service/orders.service';
import { Orders } from 'src/app/webportal/pojo/orders';

@Component({
  selector: 'app-view-confirmed-orders',
  templateUrl: './view-confirmed-orders.component.html',
  styleUrls: ['./view-confirmed-orders.component.scss']
})
export class ViewConfirmedOrdersComponent implements OnInit {

  type: string;
  ordersList: Array<Orders>;
  pendingOrder = new Orders();
  
  constructor(private ordersService: OrdersService,private confirmationDialog: NewtermsService) { }

  ngOnInit() {
    this.getPendingOrders();
  }

  getPendingOrders() {
    this.type = 'Completed';
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
          this.pendingOrder.status = 'Shipped';
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
