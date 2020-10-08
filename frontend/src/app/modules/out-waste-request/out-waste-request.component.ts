import { Component, OnInit,Input } from '@angular/core';
import { Observable, from } from 'rxjs';
import { OutWasteRequest } from 'src/app/webportal/pojo/out-waste-request';
import { CollectedWaste } from 'src/app/pojo/collectedWaste';
import { OutsourceWasteRequsetService } from 'src/app/webportal/services/outsource-waste-requset.service';
import {CollectedWasteServiceService } from 'src/app/service/collected-waste-service.service';
import {SummaryStockService} from 'src/app/service/summary-stock.service'
import { ActivatedRoute, Router } from '@angular/router';
import { SummaryStock } from 'src/app/pojo/summary-stock';

@Component({
  selector: 'app-out-waste-request',
  templateUrl: './out-waste-request.component.html',
  styleUrls: ['./out-waste-request.component.scss']
})
export class OutWasteRequestComponent implements OnInit {

  
 
  
  

  requestEmptyListFlag = false;
  stock : SummaryStock;
  retrieveRequests : Observable<OutWasteRequest[]>
  requests : OutWasteRequest;
  summary;
  waste : CollectedWaste;
  id:any;
  val:any;
  value:any;
  value1:any;
  value2:any;
  devices:any
  resultArray:any
  
  //action: string;
  //selectedBook: OutWasteRequest;
 // retrieveRequest: Array<OutWasteRequest>;
  wasteType:String;
  public arr: Array<string> ;

  constructor(private route: ActivatedRoute,private outsourceWasteRequsetService:OutsourceWasteRequsetService,private activedRoute: ActivatedRoute,
    private router: Router ,private collectedWasteServiceService :CollectedWasteServiceService,private summaryStockService:SummaryStockService) { }
    
    chk: boolean;
    
  ngOnInit() {
   
    this.reloadData();
    
  }

  reloadData(){
    


    this.outsourceWasteRequsetService.getCustomerWasteRequestListByStatus().subscribe(
      (data) => {
        this.retrieveRequests = data;
        if (data.length > 0) {
          this.requestEmptyListFlag = false;
          console.log("test"+this.retrieveRequests);
          
          //console.log(JSON.stringify(this.retrieveRequests))
          
          
        } else {
          this.requestEmptyListFlag = true;
        }
      },
      (error) => {
        console.log(error);
      }
    );

    
  }
  

  // checkAvailable(id:number){
    
  //   //this.id = this.route.snapshot.params['id'];

  //   this.outsourceWasteRequsetService.getWasteListById(id)
  //   .subscribe(
  //     data => {
  //      this.wasteRequest = data;
  //      console.log(this.wasteRequest.quantity)
  //       console.log(data);
  //       this.arr = data;
  //       console.log(this.arr[0].quantity)
  //       this.arr[0] =this.value
  //       console.log(this.value);
  //       //console.log(data.quantity);
        
  //      // this.value = data.quantity;
  //       this.chk=false;
  //     //  this.arr=data;
  //       // if(data.quantity>1000){
  //       //   console.log("love");
  //       //   this.chk=true;
  //       //  //cd this.cancelInsertDialog();
  //       // }

     

  //     if(this.chk==false){
  //       //this.onSubmit();
  //       console.log("added");
        

  //     }

        
        
  //     }
  //   )
    
  //  }

  //  new(id:number){
  //    console.log(this.value)
  //    //console.log("dsds")
  //   this.id = this.route.snapshot.params['id'];
  //    this.outsourceWasteRequsetService.getWasteListById(id).subscribe(
  //      data =>{
  //        //console.log(data);
  //        this.arr = data;
  //        console.log(this.arr[0])
  //        //console.log(this.arr[0].quantity);
  //        this.val = this.arr[0].quantity;
  //        return this.val;
  //        //console.log(data.id);
  //        //this.now (data);
  //      }
  //    )
  //  }
  confirm(id:number,wasteType:string,quantity:number){
 
    var type;
    var sum
    this.outsourceWasteRequsetService.getWasteListById(id)
   .subscribe(data => {
 
  this.arr = data;
  console.log(data)
  this.value = data
  sum =this.value.quantity
  type = this.value.wasteType
  //console.log(this.value1)
  console.log(this.value.status)

  this.getType(type,sum,this.value);
  // this.summaryStockService.getWasteByType(wasteType)
  // .subscribe(data =>{
  //   console.log(data)
  //   this.val =data.quantity
  //   console.log(this.val)
  //   if(this.value1<this.val){
  //     console.log("availabale");
  //     this.value.status='Confirmed';
  //     console.log(this.value);
  //     //this.update(this.value.id,this.value);
  //     this.updatesucessBox(wasteType,id,this.value);
  //     //this.updateBox(wasteType)
  //     this.reloadData();
  //     // alert('INSERT SUCCESSFUL!!');
    
  // }else{
  //     console.log("not availabale")
  //     this.value.status='Not Availabale At The Moment';
  //     this.cancelInsertDialog(wasteType);
  //     this.update(this.value.id,this.value);
      
    
  //   }
  //   return this.val

  // },
    //  error => {console.log(error);});
  // console.log(mapped);
}, 
error => console.log(error));
    


}

getType(type: string,sum:number,value:any){
       var i;
       var name;
       var count;
      console.log(type);
      console.log(sum);
  
  this.summaryStockService.getSummaryWaste().subscribe(
    (data)=>{
      this.summary = data;
      this.summary.forEach(element => {
     
        console.log(type);
        let val = data.find(xi => {
          console.log(type);
                        if (xi.type == type){
                          i = xi.id;
                          console.log(xi.type)
                          console.log(xi.id)
                          name = xi.type;
                          count = xi.total;
                          console.log("type = "+xi.type);
                          console.log("id = "+xi.id);
                          console.log("total = "+xi.total);
                          return xi.total;
                          // if(xi.total>sum){
                          //   console.log("availabale");
                          //   this.value.status='Confirmed';
                          //   console.log(this.value);
                          //   console.log(xi.id);
                          //   this.update(xi.id,this.value);
                          //   //this.updatesucessBox(wasteType,xi.id,this.value);
                          //   //this.updateBox(wasteType)
                          //   this.reloadData();
                          //   // alert('INSERT SUCCESSFUL!!');
                          // }else{
                          //   console.log("Not availabale");
                          //         console.log("not availabale")
                          //         this.value.status='Not Availabale At The Moment';
                          //       //  this.cancelInsertDialog(wasteType);
                          //         this.update(this.value.id,this.value);
                          // }
                        }

                        //this.stockType(i,sum,count);
                        
                        
                         // return 1;
                      });
                      this.stockType(i,sum,count,name,this.value);
                  return 1;
                  
      });
    }
  );

}

stockType(id:number,sum:number,count:number,wasteType:string,value:any){
  var id1;
  console.log("iddd"+id);
  this.summaryStockService.getSummaryWastebyId(id).subscribe(
    (data)=>{
      console.log(data);
      this.stock = data;
      if(count>sum){
          console.log("availabale");
          this.value.status='Confirmed';
          console.log(this.value);
          id1 = this.value.id;
          console.log(id1);
          console.log(id);
          this.stock.total = count-sum;
          console.log(this.stock.total);
           //this.update(id,this.value);
          this.updatesucessBox(wasteType,id1,this.value);
          //this.updateBox(wasteType)
          this.reloadData();
          //this.pageRefresh();

          // alert('INSERT SUCCESSFUL!!');
        }else{
            console.log("Not availabale");
                                  //console.log("not availabale")
            this.value.status='Not Availabale At The Moment';
            this.cancelInsertDialog(wasteType);
             this.update(this.value.id,this.value);
        }
      

      this.summaryStockService.updateSummaryStock(id,this.stock).subscribe(
                (data)=>console.log("summary"+data),(error)=>{
                  console.log(error);
                }
              );
    }
  );
}

public cancelInsertDialog(wasteType: string){
  this.outsourceWasteRequsetService
  .alert('Waste Category Not Availabale','Waste Category '+wasteType+' not in stock.');

 }

//  public updateBox(wasteType: string){
//   this.outsourceWasteRequsetService
//   .alert('Waste Category  Availabale','Waste Category '+wasteType+'  in stock.');

//  }
 public updatesucessBox(wasteType: string,id1:number , value:any){
   console.log(id1);
   console.log(this.value);
  this.outsourceWasteRequsetService
  .confirm('Please confirm..', 'Do you really want to Accept?')
  .then((confirmed) => {
    // console.log('User confirmed:', confirmed);
    if (confirmed == true) {
      this.update(id1,this.value);
    }
  })
  .catch(() =>
    console.log(
      'User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'
    )
  );



 }
 pageRefresh() {
  location.reload();
}


 update(id1:number,value:any){
   console.log(id1)
   this.outsourceWasteRequsetService.update(this.value.id, this.value)
      .subscribe(data => console.log(data)
      ,
       error => console.log(this.value)
      );
    this.value = new OutWasteRequest();
    this.pageRefresh();
  

 }
//  reloadNow(){
//   this.outsourceWasteRequsetService.getCustomerWasteRequestListByStatus().subscribe(
//     (data) => {
//       //this.retrieveRequests = data;
//       console.log(data)
    
//       if (data.length > 0) {
//         this.requestEmptyListFlag = false;
//         console.log("test"+this.retrieveRequests);
//         //console.log(JSON.stringify(this.retrieveRequests))
        
        
//       } else {
//         this.requestEmptyListFlag = true;
//       }
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
//  }
}
