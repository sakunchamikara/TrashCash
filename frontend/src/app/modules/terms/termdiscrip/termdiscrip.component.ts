import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Terms } from 'src/app/pojo/terms';
import { NewtermsService } from 'src/app/service/newterms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-termdiscrip',
  templateUrl: './termdiscrip.component.html',
  styleUrls: ['./termdiscrip.component.scss']
})
export class TermdiscripComponent implements OnInit {

  terms :Observable<Terms[]>;
  successMsg: any;
  errorMsg: any;

  constructor(private newtermService:NewtermsService,private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.terms = this.newtermService.getNewtermList();
  }

}
