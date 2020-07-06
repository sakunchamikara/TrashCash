import { Component, OnInit } from '@angular/core';
import { CollectedWaste } from 'src/app/pojo/collectedWaste';
import { Observable } from 'rxjs';
import { CollectedWasteServiceService } from 'src/app/service/collected-waste-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collected-waste',
  templateUrl: './collected-waste.component.html',
  styleUrls: ['./collected-waste.component.scss']
})
export class CollectedWasteComponent implements OnInit {

  collectedWastes : Observable<CollectedWaste[]>;
  constructor( private collectedWasteService: CollectedWasteServiceService , private router :Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.collectedWastes = this.collectedWasteService.getCollectedWasteList();
  }

  deleteCollectedWaste(id: number) {
    this.collectedWasteService.deleteCollectedWaste(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateCollectedWaste(id: number){
     this.router.navigate(['system','UpdateCollectedWastes',id]);
   
  }


}
