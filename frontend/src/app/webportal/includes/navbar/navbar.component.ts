import { Component, OnInit } from '@angular/core';
import { ProductcatService } from 'src/app/service/productcat.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private service:ProductcatService) { }

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

}

export class MenuOverviewExample {}
