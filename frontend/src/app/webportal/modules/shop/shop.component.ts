import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/pojo/item';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/pojo/category';
import { ProductcatService } from 'src/app/service/productcat.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  categoryType: Category;
  categoryList: Array<Category>;

  productList: Array<Item>;
  item: Item;
  productEmptyListFlag = false;
  activeFlag = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private productCategoryService: ProductcatService
  ) {}

  ngOnInit() {
    this.getProductCateories();
    this.getProducts();
  }

  getProductCateories() {
    this.productCategoryService.getProductCatList().subscribe(
      (data) => {
        this.categoryList = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getProducts() {
    this.productService.getProductList().subscribe(
      (data) => {
        this.productList = data;
        if (data.length > 0) {
          this.productEmptyListFlag = false;
        } else {
          this.productEmptyListFlag = true;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCatProduct(category) {
    this.productService.getProductListByCategory(category).subscribe(
      (data) => {
        this.activeFlag = category;
        this.productList = data;
        if (data.length > 0) {
          this.productEmptyListFlag = false;
        } else {
          this.productEmptyListFlag = true;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
