import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { CollectedWaste } from 'src/app/pojo/collectedWaste';
import { CollectedWasteServiceService } from 'src/app/service/collected-waste-service.service';
import { Router } from '@angular/router';
import { SummaryStockService } from 'src/app/service/summary-stock.service';
import { SummaryStock } from 'src/app/pojo/summary-stock';

@Component({
  selector: 'app-insert-collected-waste',
  templateUrl: './insert-collected-waste.component.html',
  styleUrls: ['./insert-collected-waste.component.scss']
})
export class InsertCollectedWasteComponent implements OnInit {

  Types: any = ['Plastic', 'Paper', 'E-Waste'];
  public arr: Array<string> = [];
  collectedWaste= new CollectedWaste();
  submitted = false;
  summaryStock = new SummaryStock();


  constructor( private collectedWasteService: CollectedWasteServiceService , private router :Router,private summaryStockService:SummaryStockService) { }
  successMsg: any;
  errorMsg: any;
  chk: boolean;

  ngOnInit() {
    this.chk = false;
  }

  save(){
     
    this.summaryStock.wasteType=this.collectedWaste.wasteType;
    this.summaryStock.total = this.collectedWaste.quantity;

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
          this.checkName(this.collectedWaste.wasteType);
          
    }

    onSaveSummary(){
      this.summaryStockService.createSummaryStock(this.summaryStock).subscribe(
        (data)=>{console.log(data);
         this.summaryStockService.createSummaryStock(data);
       },
       (error)=>{
         console.log("new "+error);
       }
      );
      console.log(this.summaryStock);
    }

    checkName(cName: string){
      this.summaryStockService.getSummaryWasteListByType().subscribe(
        data => {
          console.log(data);
          this.chk=false;
          this.arr=data;
  
          for (let i of this.arr) {
            if(i==cName) {
              console.log("found");
              console.log(i);
              this.chk=true;
              // this.cancelInsertDialog(i);
            }
            
        }
  
        if(this.chk==false){
          this.onSaveSummary();
          console.log("added");
          
        }else{

        }
        }
      )
      
     }

  onSubmit(){
    this.submitted = true;
    this.save();
  }
  gotoList(){
     this.router.navigate(['system/collectedWaste']);
  }

}
