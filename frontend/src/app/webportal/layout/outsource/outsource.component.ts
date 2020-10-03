import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outsource',
  templateUrl: './outsource.component.html',
  styleUrls: ['./outsource.component.scss']
})
export class OutsourceComponent implements OnInit {
  sideBarOpen = false;

  constructor() { }

  ngOnInit() {
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
 }

}
