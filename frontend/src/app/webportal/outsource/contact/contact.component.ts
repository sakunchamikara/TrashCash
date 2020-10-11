import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { NewcontactService } from '../../services/newcontact.service';
import {Contactus} from 'src/app/webportal/pojo/contactus'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactus = new Contactus();
  submitted = false;



  constructor(
    private newcontactService: NewcontactService,
    private router: Router
  ) { }
  successMsg: any;
  errorMsg: any;

  ngOnInit() {}

  save(){
    this.newcontactService.createNewcontact(this.contactus).subscribe(
      (data) => {
        this.contactus = new Contactus();
        this.successMsg = 'contact add successfully';
        this.gotoList();
      },
      (error) =>{
       // console.log(error);
        this.errorMsg = 'Something went wrong !!!';
      }
    );
  }

  onSubmit(){
    this.submitted = true;
   // this.save();

   this.newcontactService
   .createNewcontact(this.contactus)
    .subscribe(
      (data) => {
        console.log(data);
        this.contactus = new Contactus();
        this.successMsg = `added successfully !`;
        console.log(this.successMsg);
        this.newcontactService.confirm(
          'Thank You',
          'Your response has been successfully recorded'
        );
        // this.reloadData();

        //     }
      },
      (error) => {
        console.log(error);
      }
    );
   
  }
  

  gotoList(){
   this.router.navigate(['customer/contactdetails']);
  }
}
