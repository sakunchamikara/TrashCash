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

  ngOnInit() {
  }

newProduct(): void{
  this.submitted = false;
  this.product = new Item();
}
save() {
  this.productService.createProduct(this.product)
    .subscribe(data => console.log(data), error => console.log(error));
  this.product = new Item();
  // this.gotoList();
  console.log("correct");
}
onSubmit() {
  this.submitted = true;
  this.save();    
}
gotoList() {
  this.router.navigate(['ViewProducts']);
}
}
