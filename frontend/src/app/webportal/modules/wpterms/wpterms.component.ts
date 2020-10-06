import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Terms } from 'src/app/pojo/terms';
import { NewtermsService } from 'src/app/service/newterms.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wpterms',
  templateUrl: './wpterms.component.html',
  styleUrls: ['./wpterms.component.scss'],
})
export class WptermsComponent implements OnInit {
  successMsg: any;
  errorMsg: any;
  termslist: Array<Terms>;
  termEmptyListFlag = false;
  activateFlag = '';

  constructor(private newtermService: NewtermsService) {}

  ngOnInit() {
    this.reloadData();
    // this.getTerms();
  }
  reloadData() {
    this.newtermService.getNewtermList().subscribe(
      (data) => {
        this.termslist = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
