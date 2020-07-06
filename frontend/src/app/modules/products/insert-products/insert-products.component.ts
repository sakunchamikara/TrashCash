import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item} from 'src/app/pojo/item';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-products',
  templateUrl: './insert-products.component.html',
  styleUrls: ['./insert-products.component.scss']
})
export class InsertProductsComponent implements OnInit {

  product = new Item();
  submitted = false;

  constructor(private productService:ProductService,private router: Router) { }
  successMsg: any;
  errorMsg: any;
  ngOnInit() {
  }

// newProduct(): void{
//   this.submitted = false;
//   this.product = new Item();
// }


save() {
  this.productService.createProduct(this.product)
    .subscribe((data) => {
      console.log(data)
      this.product = new Item();
      this.successMsg = `product add successfully !`;
      this.gotoList();
      console.log("correct");
    },
       (error) => {
      this.errorMsg = 'Something went Wrong !!!';
      this.router.navigate(['system']);
  }
    );
}
onSubmit() {
  this.submitted = true;
  this.save();    
}
gotoList() {
  this.router.navigate(['system/ViewProducts']);
}
// productlist(){
//   this.router.navigate(['system/ViewProducts']);
// }
}
