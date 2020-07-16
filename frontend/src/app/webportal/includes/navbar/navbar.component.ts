import { Component, OnInit } from '@angular/core';
import { ProductcatService } from 'src/app/service/productcat.service';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { Item } from 'src/app/pojo/item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  products: Array<Item>;

  constructor(
    private service:ProductcatService ,
    private router: Router) { }

  public listItems: Array<string> = [];

  ngOnInit() {
    this.dropdownRefresh();
  }

  dropdownRefresh(){
this.service.getProductCatDropdownValues().subscribe(data=>{
 console.log(data);
  data.forEach(element => {
    this.listItems.push(element["name"])
  });
})
  }

  ViewCategory(category: String){
    this.router.navigate(['customer','shop',category]);
  }
}

export class MenuOverviewExample {}
