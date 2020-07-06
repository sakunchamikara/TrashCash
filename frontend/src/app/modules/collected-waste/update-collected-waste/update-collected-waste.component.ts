import { Component, OnInit } from '@angular/core';
import { CollectedWaste } from 'src/app/pojo/collectedWaste';
import { Router, ActivatedRoute } from '@angular/router';
import { CollectedWasteServiceService } from 'src/app/service/collected-waste-service.service';

@Component({
  selector: 'app-update-collected-waste',
  templateUrl: './update-collected-waste.component.html',
  styleUrls: ['./update-collected-waste.component.scss']
})
export class UpdateCollectedWasteComponent implements OnInit {

  id : number;
  collectedWaste : CollectedWaste;

  constructor(private route: ActivatedRoute,private router: Router, private collectedWasteService: CollectedWasteServiceService ) { }

  ngOnInit() {
    this.collectedWaste = new CollectedWaste();

    this.id = this.route.snapshot.params['id'];

    this.collectedWasteService.getCollectedWaste(this.id)
    .subscribe(data => {
      console.log(data)
      
      this.collectedWaste = data;
    }, error => console.log(error));
  }

  updateCollectedWaste() {
    this.collectedWasteService.updateCollectedWaste(this.id, this.collectedWaste)
      .subscribe(data => console.log(data), error => console.log(error));
    this.collectedWaste = new CollectedWaste();
    this.gotoList();
  }

  onSubmit() {
    this.updateCollectedWaste();    
  }
  gotoList(){
    this.router.navigate(['system/collectedWaste']);
  }

}