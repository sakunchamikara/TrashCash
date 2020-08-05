import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Item } from 'src/app/pojo/item';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerAuthService } from '../../services/customer-auth.service';
import { Cart } from '../../pojo/cart';
import { CustomerCartService } from '../../services/customer-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productEmptyListFlag = false;
  productList: Array<Item>;
  productId: number;
  productImage: string;

  item = new Item();
  randomProduct: Array<Item>;

  isCustomerLoggedIn = false;
  cart = new Cart();
  errorMessage = '';
  successMessage = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private customerAuthService: CustomerAuthService,
    private cartService: CustomerCartService
  ) {}

  ngOnInit() {
    this.productId = +this.route.snapshot.params['id'];
    this.getProductById(this.productId);
    this.getRandomProducts();
  }

  getProducts() {
    this.productService.getProductList().subscribe(
      (data) => {
        this.productList = data;
        if (data.length > 0) {
          this.productEmptyListFlag = false;
        } else {
          this.productEmptyListFlag = true;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getProductById(productId) {
    this.productService.getProduct(productId).subscribe(
      (data) => {
        this.item = data;
        this.productImage = 'data:image/jpeg;base64,' + data.image1;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getRandomProducts() {
    this.productService.getRandomProducts().subscribe(
      (data) => {
        this.randomProduct = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  navigateToRandomProduct(pid) {
    this.router.navigate([`/customer/product/${pid}`]).then(() => {
      window.location.reload();
    });
  }

  addToCart() {
    if (this.customerAuthService.isCustomerLoggedIn()) {
      // this.cart.product.id = this.productId;
      this.cart.customerId = +this.customerAuthService.getAuthenticatedCustomerId();
      this.cartService.addToCart(this.cart, this.productId).subscribe(
        (data) => {
          // this.router.navigate([`customer/product/${this.cart.product}`]);
          this.successMessage = 'Product Successfully Added To The Cart !';
          this.errorMessage = null;
        },
        (error) => {
          this.errorMessage = error.error.message;
          this.successMessage = null;
        }
      );
    } else {
      alert('You must Login first !!!');
      this.router.navigate(['customer/login']);
    }
  }
}
