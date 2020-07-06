import { Component, OnInit } from '@angular/core';
import { ProductcatService } from 'src/app/service/productcat.service';

import { Category } from 'src/app/pojo/category';
import { Router } from '@angular/router';
// import { debuglog } from 'util';


@Component({
  selector: 'app-insert-product-cat',
  templateUrl: './insert-product-cat.component.html',
  styleUrls: ['./insert-product-cat.component.scss']
})
export class InsertProductCatComponent implements OnInit {

  productCat = new Category();
  submitted = false;

  

  constructor(private productcatService: ProductcatService,
    private router: Router) { }

  successMsg: any;
  errorMsg: any;

  ngOnInit() {
  }

  newProductCat(): void {
    this.submitted = false;
   this.productCat = new Category();
  }
  
  save() {
   
    this.productcatService.createProductCat(this.productCat)
    .subscribe((data)=> {
    console.log(data)
    this.productCat = new Category();
    this.successMsg = `Product Category added successfully !`;
   //this.gotoList();
   // console.log('#got');
  },
  (error)=>{
    this.router.navigate(['system']);
  });
}

  onSubmit() {
    
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['system/viewProductCat']);
  }

}
