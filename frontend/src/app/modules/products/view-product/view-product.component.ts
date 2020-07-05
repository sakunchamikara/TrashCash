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

  products : Observable<Item[]>;
  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.products = this.productService.getProductList();
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
