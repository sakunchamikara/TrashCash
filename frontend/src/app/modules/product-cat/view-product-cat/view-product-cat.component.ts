import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/pojo/category';
import { Observable } from "rxjs";
import { ProductcatService } from 'src/app/service/productcat.service';

import { Router } from '@angular/router';



@Component({
  selector: 'app-view-product-cat',
  templateUrl: './view-product-cat.component.html',
  styleUrls: ['./view-product-cat.component.scss']
})
export class ViewProductCatComponent implements OnInit {

productCats: Observable<Category[]>;

  constructor(private productcatService: ProductcatService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.productCats = this.productcatService.getProductCatList();
  }

  deleteProductCat(pCatId: number) {
    this.productcatService.deleteProductCat(pCatId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }



}
