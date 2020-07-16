import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Terms } from 'src/app/pojo/terms';
import { NewtermsService } from 'src/app/service/newterms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addterms',
  templateUrl: './addterms.component.html',
  styleUrls: ['./addterms.component.scss'],
})
export class AddtermsComponent implements OnInit {
  terms = new Terms();
  submitted = false;

  constructor(
    private newtermService: NewtermsService,
    private router: Router
  ) {}
  successMsg: any;
  errorMsg: any;

  ngOnInit() {}

  save() {
    this.newtermService.createNewterm(this.terms).subscribe(
      (data) => {
        this.terms = new Terms();
        this.successMsg = `term add successfully !`;
        this.gotoList();
      },
      (error) => {
        console.log(error);
        this.errorMsg = 'Something went Wrong !!!';
      }
    );
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
  gotoList() {
    this.router.navigate(['system/viewterms']);
  }
}
