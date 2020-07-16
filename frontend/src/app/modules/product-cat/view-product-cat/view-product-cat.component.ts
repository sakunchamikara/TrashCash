import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/pojo/category';
import { ProductcatService } from 'src/app/service/productcat.service';
import { Observable } from "rxjs";
import { Router } from '@angular/router';



@Component({
  selector: 'app-view-product-cat',
  templateUrl: './view-product-cat.component.html',
  styleUrls: ['./view-product-cat.component.scss']
})
export class ViewProductCatComponent implements OnInit {
  productCats: Array<Category>
  productCatsRecieved: Array<Category>;
//productCats: Observable<Category[]>;

  constructor(private productcatService: ProductcatService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    //this.productCats = this.productcatService.getProductCatList();
    this.productcatService.getProductCatList().subscribe(
      response => this.handleSuccessfulResponse(response));

  }

  handleSuccessfulResponse(response) {
    this.productCats = new Array<Category>();
   
    this.productCatsRecieved = response;
    for (const productCat of this.productCatsRecieved) {
    
      const bookwithRetrievedImageField = new Category();
      bookwithRetrievedImageField.id = productCat.id;
      bookwithRetrievedImageField.name = productCat.name;
      bookwithRetrievedImageField.description = productCat.description;
      //populate retrieved image field so that product image can be displayed
      bookwithRetrievedImageField.retrievedImg = 'data:image/jpeg;base64,' + productCat.img;
      bookwithRetrievedImageField.img=productCat.img;
      // bookwithRetrievedImageField.image2=product.image2;
      // bookwithRetrievedImageField.price = product.price;
      // bookwithRetrievedImageField.details = product.details;
      this.productCats.push(bookwithRetrievedImageField);
    }
  }

  deleteProductCat(id: number) {
    this.productcatService.deleteProductCat(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


  updateProductCat(id: number){
    this.router.navigate(['system','UpdateProductCats',id]);
  
 }


}
