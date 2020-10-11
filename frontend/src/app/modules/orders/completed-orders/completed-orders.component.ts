import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/service/orders.service';
import { Orders } from 'src/app/webportal/pojo/orders';

@Component({
  selector: 'app-completed-orders',
  templateUrl: './completed-orders.component.html',
  styleUrls: ['./completed-orders.component.scss'],
})
export class CompletedOrdersComponent implements OnInit {
  type: string;
  ordersList: Array<Orders>;
  pendingOrder = new Orders();

  constructor(private ordersService: OrdersService) {}

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
}
