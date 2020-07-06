import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { CollectedWaste } from 'src/app/pojo/collectedWaste';
import { CollectedWasteServiceService } from 'src/app/service/collected-waste-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-collected-waste',
  templateUrl: './insert-collected-waste.component.html',
  styleUrls: ['./insert-collected-waste.component.scss']
})
export class InsertCollectedWasteComponent implements OnInit {

  Types: any = ['Plastic', 'Paper', 'E-Waste'];
  collectedWaste= new CollectedWaste();
  submitted = false;


  constructor( private collectedWasteService: CollectedWasteServiceService , private router :Router) { }
  successMsg: any;
  errorMsg: any;
  

  ngOnInit() {}

  save(){
    this.collectedWasteService.createCollectedWaste(this.collectedWaste)
    .subscribe(
      (data)=>{console.log(data);
        this.collectedWaste = new CollectedWaste();
        this.successMsg = `waste added successfully !`;
        console.log(this.successMsg)
        this.gotoList();
      },
    
        (error)=>{ 
          console.log(error); 
           this.errorMsg = `Something went Wrong !!!`;
          }
          );     
    }

  onSubmit(){
    this.submitted = true;
    this.save();
  }
  gotoList(){
     this.router.navigate(['system/collectedWaste']);
  }

}
