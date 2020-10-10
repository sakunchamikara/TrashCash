import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/pojo/item';
import { NewtermsService } from 'src/app/service/newterms.service';
import { OrdersService } from 'src/app/service/orders.service';
import { ProductService } from 'src/app/service/product.service';
import { Orders } from 'src/app/webportal/pojo/orders';
import { CustomerCartService } from 'src/app/webportal/services/customer-cart.service';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.scss'],
})
export class PendingOrdersComponent implements OnInit {
  type: string;
  ordersList: Array<Orders>;
  pendingOrder = new Orders();
  pid: number;
  qty: number;
  product = new Item();
  constructor(
    private ordersService: OrdersService,
    private confirmationDialog: NewtermsService,
    private cartService: CustomerCartService,
    private productService: ProductService
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
    this.confirmationDialog
      .confirm('Please confirm..', 'Do you really want to Update Order Status?')
      .then((confirmed) => {
        if (confirmed) {
          this.pendingOrder.id = oid;
          this.pendingOrder.status = 'Accepted';
          this.ordersService
            .updatePendingOrderStatus(this.pendingOrder)
            .subscribe(
              (data) => {
                console.log(data);
                this.updateProductQuantity(oid);
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

  // viewOrder(oid: number) {

  // }

  updateProductQuantity(oid: number) {
    this.cartService.getByOrder(oid).subscribe(
      (data) => {
        console.log(data);
        data.forEach((element) => {
          this.pid = element.product.id;
          this.qty = element.product.quantity - element.quentity;
          this.product.quantity = this.qty;
          this.productService
            .updateProductQuantity(this.pid, this.product)
            .subscribe(
              (data) => {
                console.log(data);
              },
              (error) => {
                console.log(error);
              }
            );
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
