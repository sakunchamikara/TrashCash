import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { CollectedWaste } from 'src/app/pojo/collectedWaste';
import { CollectedWasteServiceService } from 'src/app/service/collected-waste-service.service';
import { Router } from '@angular/router';
import { SummaryStockService } from 'src/app/service/summary-stock.service';
import { SummaryStock } from 'src/app/pojo/summary-stock';
import { Observable } from 'rxjs';

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
  retrieveStock : Observable<SummaryStock[]>


  constructor( private collectedWasteService: CollectedWasteServiceService , private router :Router,private summaryStockService:SummaryStockService) { }
  successMsg: any;
  errorMsg: any;
  chk: boolean;
  id: number;

  ngOnInit() {
    this.chk = false;
  }

  save(){
     
    this.summaryStock.type=this.collectedWaste.wasteType;
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


    onUpdateSummary(){
      this.summaryStockService.getSummaryWasteListByCount().subscribe(
        data=>{
          console.log("count "+data);
          this.summaryStockService.getSummaryWasteListById().subscribe(
            data1=>{
              console.log("id "+data1);
              this.summaryStock.total = this.summaryStock.total + data[0];
              this.id = data1;
             

              // this.summaryStockService.updateSummaryStock(data1,this.summaryStock)
              // .subscribe(data => console.log(data),
              //  error => {console.log(error);this.errorMsg = 'Something went Wrong !!!';});
            this.summaryStock = new SummaryStock();
            console.log("testing floaaaat"+this.summaryStock);
              
            }
            );

        }
      );

     

     this.summaryStockService.getWasteByType(this.summaryStock.type).subscribe(
        (data)=>{
          console.log(data);
          this.retrieveStock=data;

        },error=>{
          console.log(error);
        }
     );
     
    }

    checkName(cName: string){
      this.summaryStockService.getSummaryWasteListByType().subscribe(
        data => {
          console.log("test"+data);
          this.chk=false;
          this.arr=data;
  
          for (let i of this.arr) {
            if(i==cName) {
              console.log("found");
              console.log(i);
              this.chk=true;
              this.onUpdateSummary();
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
