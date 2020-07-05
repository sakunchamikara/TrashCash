import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { NgForm } from '@angular/forms';
import { Item} from 'src/app/pojo/item';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  id : number;
  product : Item;

  constructor(private route: ActivatedRoute,private router: Router,
    private productService: ProductService) { }


  ngOnInit() {

    this.product = new Item();

    this.id = this.route.snapshot.params['id'];

    this.productService.getProduct(this.id)
    .subscribe(data => {
      console.log(data)
      
      this.product = data;
    }, error => console.log(error));
  }
  updateProduct() {
    this.productService.updateProduct(this.id, this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product = new Item();
    this.gotoList();
  }

  onSubmit() {
    this.updateProduct();    
  }
  gotoList(){
    this.router.navigate(['system/ViewProducts']);
  }

}
