import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  name: String;

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.name = this.route.snapshot.params['name'];
    console.log(this.name);
  }

}
