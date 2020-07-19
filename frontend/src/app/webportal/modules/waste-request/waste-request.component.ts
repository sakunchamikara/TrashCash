import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waste-request',
  templateUrl: './waste-request.component.html',
  styleUrls: ['./waste-request.component.scss']
})
export class WasteRequestComponent implements OnInit {

  Types: any = ['Plastic', 'Paper', 'E-Waste'];

  constructor() { }

  ngOnInit() {

    this.wasteRequest();
  }

  wasteRequest(){
    console.log("Test");
   
  }
  onSubmit(){

  }

}
