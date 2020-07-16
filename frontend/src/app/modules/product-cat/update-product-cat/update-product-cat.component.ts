import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/pojo/category';
import { ProductcatService } from 'src/app/service/productcat.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-product-cat',
  templateUrl: './update-product-cat.component.html',
  styleUrls: ['./update-product-cat.component.scss']
})
export class UpdateProductCatComponent implements OnInit {

  id : number;
  productCat : Category;


  constructor(private route: ActivatedRoute,private router: Router, private productcatService: ProductcatService) { }

  ngOnInit() {

    this.productCat = new Category();

    this.id = this.route.snapshot.params['id'];

    this.productcatService.getProductCat(this.id)
    .subscribe(data => {
      console.log(data)
      
      this.productCat = data;
    }, error => console.log(error));
  }

  updateProductCat() {
    this.productcatService.updateProductCat(this.id, this.productCat)
      .subscribe(data => console.log(data), error => console.log(error));
    this.productCat = new Category();
    console.log("testing floaaaat"+this.productCat);
    this.gotoList();
  }

  onSubmit(form:NgForm) {
    
    this.updateProductCat();    
  }
  gotoList(){
    this.router.navigate(['system/viewProductCat']);
  }


}
