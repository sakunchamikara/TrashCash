import { Component, OnInit } from '@angular/core';
import { ProductcatService } from 'src/app/service/productcat.service';
import { Observable } from "rxjs";

import { Router } from '@angular/router';
//import { ItemCat } from 'src/app/pojo/item-cat';


@Component({
  selector: 'app-view-product-cat',
  templateUrl: './view-product-cat.component.html',
  styleUrls: ['./view-product-cat.component.scss']
})
export class ViewProductCatComponent implements OnInit {

 // productCats: Observable<ItemCat[]>;

  constructor(private productcatService: ProductcatService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
   // this.productCats = this.productcatService.getEmployeesList();
  }



}
