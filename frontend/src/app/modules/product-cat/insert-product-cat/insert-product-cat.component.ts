import { Component, OnInit } from '@angular/core';
import { ProductcatService } from 'src/app/service/productcat.service';

import { ItemCat } from 'src/app/pojo/item-cat';
import { Router } from '@angular/router';


@Component({
  selector: 'app-insert-product-cat',
  templateUrl: './insert-product-cat.component.html',
  styleUrls: ['./insert-product-cat.component.scss']
})
export class InsertProductCatComponent implements OnInit {

  productCat = new ItemCat();
  submitted = false;

  constructor(private productcatService: ProductcatService,
    private router: Router) { }

  ngOnInit() {
  }

  newProductCat(): void {
    this.submitted = false;
   this.productCat = new ItemCat();
  }

  save() {
    console.log('#got');
    this.productcatService.createProductCat(this.productCat);
    this.productCat = new ItemCat();
    this.gotoList();
  }

  onSubmit() {
    
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/system/insertProductCat']);
  }

}
