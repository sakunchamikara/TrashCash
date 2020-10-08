import { Component, OnInit } from '@angular/core';
import { NewtermsService } from 'src/app/service/newterms.service';
import { OrdersService } from 'src/app/service/orders.service';
import { Orders } from 'src/app/webportal/pojo/orders';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.scss'],
})
export class PendingOrdersComponent implements OnInit {
  type: string;
  ordersList: Array<Orders>;
  pendingOrder = new Orders();
  constructor(
    private ordersService: OrdersService,
    private confirmationDialog: NewtermsService
  ) {}

  ngOnInit() {
    this.getPendingOrders();
  }

  getPendingOrders() {
    this.type = 'Pending';
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

  takeOrderAction(oid: number) {
    // this.confirmationDialog
    //   .confirm('Please confirm..', 'Do you really want to Update Order Status?')
    //   .then((confirmed) => {
    //     if (confirmed) {
          this.pendingOrder.id = oid;
          this.pendingOrder.status = 'Accepted';
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
  //       }
  //     })
  //     .catch(() => console.log('cancelled'));
  }
}
