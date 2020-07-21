import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/pojo/item';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/pojo/category';
import { ProductcatService } from 'src/app/service/productcat.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  // products: Array<Item>;
  // productsRecieved: Array<Item>;

  // category: string;
  // product: Item;

  categoryType: Category;
  categoryList: Array<Category>;

  productList: Array<Item>;
  item: Item;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private productCategoryService: ProductcatService,
  ) {}

  ngOnInit() {
    // this.product = new Item();

    // this.category = this.route.snapshot.params['category'];
    // this.reloadData();
    this.getProductCateories();
    this.getProducts();
  }

  // reloadData() {
  //   this.productService
  //     .getProductListByCategory(this.category)
  //     .subscribe((response) => this.handleSuccessfulResponse(response));
  //   console.log('hello');
  // }

  getProductCateories(){
    this.productCategoryService.getProductCatList().subscribe(
      data => {
        this.categoryList = data;
      },
      error => {
        console.log(error);

      }
    );
  }

  getProducts() {
    this.productService.getProductList().subscribe(
      data => {
        this.productList = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  // handleSuccessfulResponse(response) {
  //   this.products = new Array<Item>();
  //   // get books returned by the api call
  //   this.productsRecieved = response;
  //   for (const product of this.productsRecieved) {
  //     const bookwithRetrievedImageField = new Item();
  //     bookwithRetrievedImageField.id = product.id;
  //     bookwithRetrievedImageField.title = product.title;
  //     bookwithRetrievedImageField.category = product.category;
  //     // populate retrieved image field so that product image can be displayed
  //     bookwithRetrievedImageField.retrievedImage =
  //       'data:image/jpeg;base64,' + product.image1;
  //     bookwithRetrievedImageField.image1 = product.image1;
  //     // bookwithRetrievedImageField.image2=product.image2;
  //     bookwithRetrievedImageField.price = product.price;
  //     bookwithRetrievedImageField.details = product.details;
  //     this.products.push(bookwithRetrievedImageField);
  //   }
  // }
}
