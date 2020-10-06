import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm, FormControl } from '@angular/forms';
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
  categoryProductFlag = false;
  productList: Array<Item>;
  item: Item;
  productEmptyListFlag = false;
  productFlag = false;
  activeFlag = '';
  searchedProduct: Array<Item>;
  searchFlag = false;
  searchedProductEmptyFlag = false;

  search: string;

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
        this.productFlag = true;
        this.searchFlag = false;
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
        this.categoryProductFlag = true;
        this.productFlag = true;

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

  searchProduct(searchForm) {
    this.search = searchForm.value.search;
    this.categoryProductFlag = false;
    this.productService.searchProduct(this.search).subscribe(
      (data) => {
        this.searchedProduct = data;
        this.searchFlag = true;
        this.productFlag = false;
        if (data.length > 0) {
          this.searchedProductEmptyFlag = false;
        } else {
          this.searchedProductEmptyFlag = true;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
