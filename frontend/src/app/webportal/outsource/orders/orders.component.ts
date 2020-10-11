import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerOrderService } from 'src/app/webportal/services/customer-order.service';
import { Orders } from 'src/app/webportal/pojo/orders';
import { CustomerCartService } from 'src/app/webportal/services/customer-cart.service';
import { CustomerAuthService } from 'src/app/webportal/services/customer-auth.service';
import { Cart } from 'src/app/webportal/pojo/cart';
import { Customer } from '../../pojo/customer';
import { CollectedWaste } from 'src/app/pojo/collectedWaste';
import { Observable } from 'rxjs';
import { CollectedWasteServiceService } from 'src/app/service/collected-waste-service.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  
  orderCount: number;
  carts: Array<Cart>;
  cartDetails: Array<Cart>;
  date = new Date();
  order = new Orders();
  cart = new Cart();


  customerId: number;
  viewOrders: Array<Orders>;
  customer: Customer;
  email:any;
  public arr: Array<string> = [];
  orderId: string;
  value:any;
  itemCount: number;
  total: number;
  quentity: number;
  collectedWastes: Observable<CollectedWaste[]>;
  // cartDetails: Observable<Cart[]>;

  constructor(
    private route: ActivatedRoute,
    private orderService: CustomerOrderService,
    private cartService: CustomerCartService,
    private customerAuth: CustomerAuthService,
    private collectedWasteService: CollectedWasteServiceService,
   
  ) {}

  ngOnInit() {
    
    this.email = this.customerAuth.getAuthenticatedCustomer();
    
    this.getCartData();

   this.customer = new Customer();
   this.customerAuth.getCustomer(this.email).subscribe((data) => {
   this.customer = data;
   console.log(this.customer.email);
    //  this.cus=JSON.stringify(this.customer.firstName);
   
   
    
    });
  
  
  
    this.orderId = this.route.snapshot.queryParamMap.get('order_id');
    this.customerId = +this.customerAuth.getAuthenticatedCustomerId();
    console.log(this.customerId);

    
    // this.cartService.getCartDetailsAll(this.email).subscribe(
    //   (data) => {
    //    console.log("new");
    //    console.log(data);
    //    this.arr = data;
    //    console.log(this.arr[0]);
        
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    // this.cartDetails = this.cartService.getCartDetailsAll(this.email);

  }

  getCartData() {
    
      this.cartService.getCartDetailsAll(this.email).subscribe(
        (data) => {
          this.cartDetails = data;
          console.log(data);
          this.setTotal();
          this.itemCount = data.length;
          
        },
        (error) => {
          console.log(error);
        }
      );
    
  }

  setTotal() {
    let sum = 0;
    for (const cart of this.cartDetails) {
      sum = sum + +cart.quentity * cart.product.price;
    }
    this.total = sum;
  }

  number(x: number) {
    this.quentity = x;
    return this.quentity;
  }

}
