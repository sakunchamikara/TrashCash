import { Component, OnInit } from '@angular/core';
import { ProductcatService } from 'src/app/service/productcat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private service:ProductcatService,
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

  goto(name: string){
    this.router.navigate(['customer','shop',name]);

  }

}

export class MenuOverviewExample {}
