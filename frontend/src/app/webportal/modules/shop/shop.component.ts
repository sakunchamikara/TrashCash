import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/pojo/item';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: Array<Item>;
  productsRecieved: Array<Item>;

  category: string;
  product: Item;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.product = new Item();

    this.category = this.route.snapshot.params['category'];
    this.reloadData();
  }

  reloadData() {
    this.productService
      .getProductListByCategory(this.category)
      .subscribe((response) => this.handleSuccessfulResponse(response));
    console.log('hello');
  }

  handleSuccessfulResponse(response) {
    this.products = new Array<Item>();
    // get books returned by the api call
    this.productsRecieved = response;
    for (const product of this.productsRecieved) {
      const bookwithRetrievedImageField = new Item();
      bookwithRetrievedImageField.id = product.id;
      bookwithRetrievedImageField.title = product.title;
      bookwithRetrievedImageField.category = product.category;
      // populate retrieved image field so that product image can be displayed
      bookwithRetrievedImageField.retrievedImage =
        'data:image/jpeg;base64,' + product.image1;
      bookwithRetrievedImageField.image1 = product.image1;
      // bookwithRetrievedImageField.image2=product.image2;
      bookwithRetrievedImageField.price = product.price;
      bookwithRetrievedImageField.details = product.details;
      this.products.push(bookwithRetrievedImageField);
    }
  }
}
