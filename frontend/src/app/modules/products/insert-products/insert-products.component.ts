import { Component, OnInit, Input } from '@angular/core';
import { ProductcatService } from 'src/app/service/productcat.service';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/pojo/item';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//new repository
@Component({
  selector: 'app-insert-products',
  templateUrl: './insert-products.component.html',
  styleUrls: ['./insert-products.component.scss'],
})
export class InsertProductsComponent implements OnInit {
  product = new Item();
  submitted = false;

  @Input()
  private selectedFile;
  imgURL: any;

  constructor(
    private productService: ProductService,
    private router: Router,
    private httpClient: HttpClient,
    private service: ProductcatService
  ) {}

  public listItems: Array<string> = [];
  successMsg: any;
  errorMsg: any;
  ngOnInit() {
    this.dropdownRefresh();
  }

  dropdownRefresh() {
    this.service.getProductCatDropdownValues().subscribe((data) => {
      console.log(data);
      data.forEach((element) => {
        this.listItems.push(element['name']);
      });
    });
  }

  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };
  }
  //new
  // newProduct(): void{
  //   this.submitted = false;
  //   this.product = new Item();
  // }

  save() {
    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.selectedFile.imageName = this.selectedFile.name;
    console.log(uploadData);
    this.httpClient
      .post('http://localhost:8080/upload', uploadData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.productService.createProduct(this.product).subscribe((data) => {
            console.log(data);
            //this.gotoList();
          });
          console.log('Image uploaded successfully');
        } else {
          console.log('Image not uploaded successfully');
        }
      });

    // this.productService.createProduct(this.product)
    //   .subscribe((data) => {
    //     console.log(data)
    //     this.product = new Item();
    //     this.successMsg = `product add successfully !`;
    //     this.gotoList();
    //     console.log("correct");
    //   },
    //      (error) => {
    //     this.errorMsg = 'Something went Wrong !!!';
    //     this.router.navigate(['system']);
    // }
    //   );
  }
  onSubmit() {
    // this.submitted = true;
    this.save();
    alert('INSERT SUCCESSFUL!!');
    //this.pageRefresh();
  }

  //   pageRefresh() {
  //     location.reload();
  //  }

  gotoList() {
    this.router.navigate(['system/ViewProducts']);
  }
  // productlist(){
  //   this.router.navigate(['system/ViewProducts']);
  // }
}
