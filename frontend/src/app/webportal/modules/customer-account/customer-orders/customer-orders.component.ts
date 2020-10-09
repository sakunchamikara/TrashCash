import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CustomerOrderService } from "src/app/webportal/services/customer-order.service";
import { Orders } from "src/app/webportal/pojo/orders";
import { CustomerCartService } from "src/app/webportal/services/customer-cart.service";
import { CustomerAuthService } from "src/app/webportal/services/customer-auth.service";
import { Cart } from "src/app/webportal/pojo/cart";

@Component({
  selector: "app-customer-orders",
  templateUrl: "./customer-orders.component.html",
  styleUrls: ["./customer-orders.component.scss"],
})
export class CustomerOrdersComponent implements OnInit {
  orderCount: number;
  carts: Array<Cart>;
  date = new Date();
  order = new Orders();
  cart = new Cart();
  customerId: number;
  viewOrders: Array<Orders>;

  orderId: string;

  constructor(
    private route: ActivatedRoute,
    private orderService: CustomerOrderService,
    private cartService: CustomerCartService,
    private customerAuth: CustomerAuthService
  ) {}

  ngOnInit() {
    this.orderId = this.route.snapshot.queryParamMap.get("order_id");
    this.customerId = +this.customerAuth.getAuthenticatedCustomerId();

    if (this.orderId) {
      this.order.id = +this.orderId;
      this.order.date = this.date;
      this.order.status = "Pending";

      this.orderService.setOrder(this.order, this.customerId).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );

      this.cartService.getCartDetails(this.customerId).subscribe(
        (data) => {
          this.carts = data;
          this.carts.forEach((element) => {
            element.customerId = this.customerId;
            element.status = "Paid";
          });
          this.updatecartorder();
        },
        (error) => {
          console.log(error);
        }
      );
    }

    this.getOrderDetails(this.customerId);
    this.getAllOrders();

  }

  updatecartorder() {
    this.cartService.updateCartOrder(this.carts, +this.orderId).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getOrderDetails(customerId) {
    this.orderService.getOrdersById(customerId).subscribe(
      (data) => {
        this.viewOrders = data;
        this.orderCount = data.length;
        console.log(this.viewOrders);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getAllOrders() {
    this.orderService.getAllOrders().subscribe(
      (data) => {
        console.log("data");
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
