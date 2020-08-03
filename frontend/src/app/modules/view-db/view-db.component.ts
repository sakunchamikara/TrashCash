import { Component, OnInit ,Input} from '@angular/core';
import { OutWasteRequest } from 'src/app/webportal/pojo/out-waste-request';

@Component({
  selector: 'app-view-db',
  templateUrl: './view-db.component.html',
  styleUrls: ['./view-db.component.scss']
})
export class ViewDbComponent implements OnInit {

  @Input()
  retrieveRequest: OutWasteRequest;

  constructor() { }

  ngOnInit() {
  }

}
