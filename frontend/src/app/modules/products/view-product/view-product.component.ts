import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { NgForm } from '@angular/forms';
import { Item} from 'src/app/pojo/item';
import { User} from 'src/app/pojo/user';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { AuthserviceService} from 'src/app/service/authservice.service';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
  products: Array<Item>;
  productsRecieved: Array<Item>;
  user:User;
  email:any;
  // products : Observable<Item[]>;
  constructor(private productService: ProductService,private router: Router,private authService: AuthserviceService) { }

  ngOnInit() {
    
    this.email = this.authService.getAuthenticatedUser();
    this.user = new User();

    this.authService.getUser(this.email).subscribe((data) => {
      this.user = data;
       //  this.cus=JSON.stringify(this.customer.firstName);
      
      
       
       });

       if(this.email){
        this.reloadData();
     }
   
  }
  // reloadData(){
  //   this.products = this.productService.getProductList();
  // }

  reloadData(){
   this.productService.getProductListByEmail(this.email).subscribe(
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
      bookwithRetrievedImageField.quantity = product.quantity;
      bookwithRetrievedImageField.price = product.price;
      bookwithRetrievedImageField.details = product.details;
      this.products.push(bookwithRetrievedImageField);
      console.log(product);
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

  public openConfirmationDialog(id: number) {
    this.productService
      .confirm('Please confirm..', 'Do you really want to delete?')
      .then((confirmed) => {
        // console.log('User confirmed:', confirmed);
        if (confirmed == true) {
          this.deleteProduct(id);
        }
      })
      .catch(() =>
        console.log(
          'User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'
        )
      );
  }

}
//
