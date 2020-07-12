import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { NgForm } from '@angular/forms';
import { Item} from 'src/app/pojo/item';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
  products: Array<Item>;
  productsRecieved: Array<Item>;
  // products : Observable<Item[]>;
  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  // reloadData(){
  //   this.products = this.productService.getProductList();
  // }

  reloadData(){
   this.productService.getProductList().subscribe(
      response => this.handleSuccessfulResponse(response));
  }

  handleSuccessfulResponse(response) {
    this.products = new Array<Item>();
    //get books returned by the api call
    this.productsRecieved = response;
    for (const product of this.productsRecieved) {
    
      const bookwithRetrievedImageField = new Item();
      bookwithRetrievedImageField.id = product.id;
      bookwithRetrievedImageField.title = product.title;
      bookwithRetrievedImageField.category = product.category;
      //populate retrieved image field so that product image can be displayed
      bookwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + product.image1;
      bookwithRetrievedImageField.image1=product.image1;
      // bookwithRetrievedImageField.image2=product.image2;
      bookwithRetrievedImageField.price = product.price;
      bookwithRetrievedImageField.details = product.details;
      this.products.push(bookwithRetrievedImageField);
    }
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateProduct(id: number){
    this.router.navigate(['system','UpdateProducts',id]);
  }
  
}
//
