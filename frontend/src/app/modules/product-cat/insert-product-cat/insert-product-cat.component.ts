import { Component, OnInit, Input } from '@angular/core';
import { ProductcatService } from 'src/app/service/productcat.service';

import { Category } from 'src/app/pojo/category';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { debuglog } from 'util';

@Component({
  selector: 'app-insert-product-cat',
  templateUrl: './insert-product-cat.component.html',
  styleUrls: ['./insert-product-cat.component.scss'],
})
export class InsertProductCatComponent implements OnInit {
  productCat = new Category();
  submitted = false;

  
  @Input()
  private selectedImg;
  imgURL: any;

  constructor(
    private productcatService: ProductcatService,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  successMsg: any;
  
  msg = '';
  errorMsg: string;

  ngOnInit() {}

  // newProductCat(): void {
  //   this.submitted = false;
  //   this.productCat = new Category();
  // }

  save() {
    const uploadData = new FormData();

    uploadData.append('imageFile', this.selectedImg, this.selectedImg.name);
    this.selectedImg.imageName = this.selectedImg.name;

    this.httpClient.post('http://localhost:8080/uploadImg', uploadData, { observe: 'response' })
    .subscribe((response) => {
      if (response.status === 200) {
      this.productcatService.createProductCat(this.productCat).subscribe(
      (data) => {
        this.productCat = new Category();
        this.successMsg = `Product Category added successfully !`;
        console.log('Image uploaded successfully');
      },
      (error) => {
        console.log(error);
        this.msg = error.error.message;
        this.errorMsg = this.msg;
      }
    );
      }
    
    }
         
    );  
      }
       
      



  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['system/viewProductCat']);
  }

  public onFileChanged(event) {
    console.log(event);
    this.selectedImg = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }
}
