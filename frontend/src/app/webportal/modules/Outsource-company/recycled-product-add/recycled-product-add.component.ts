import { Component, OnInit ,Input} from '@angular/core';
import { OutsourceProductAddService } from 'src/app/webportal/services/outsource-product-add.service';
import { NgForm } from '@angular/forms';
import { RecycleProduct } from 'src/app/webportal/pojo/recycled-product';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { OutsourceWasteRequsetService } from 'src/app/webportal/services/outsource-waste-requset.service';

@Component({
  selector: 'app-recycled-product-add',
  templateUrl: './recycled-product-add.component.html',
  styleUrls: ['./recycled-product-add.component.scss']
})
export class RecycledProductAddComponent implements OnInit {

  product =  new RecycleProduct();
  retrieveRequests : Array<RecycleProduct>
  productsRecieved: Array<RecycleProduct>;
 
  submitted = false;
  value1:any;
  value2:any;

  @Input()
  private selectedFile;
  imgURL: any;
  constructor(private router: Router , private httpClient: HttpClient , private service:OutsourceProductAddService,private outsourceWasteRequsetService:OutsourceWasteRequsetService) { }

  ngOnInit() {
    this.reloadData();
  }

  onSubmit() {
    // this.submitted = true;
     this.save();
     alert('INSERT SUCCESSFUL!!');
     //this.pageRefresh();
   }
   pageRefresh() {
    location.reload();
 }

 reloadData(){
  //this.retrieveRequests=this.outsourceWasteRequsetService.getCustomerWasteRequestList();
  this.service.getaddproducts().subscribe(
    response => this.handleSuccessfulResponse(response)
  );
  //this.retrieveRequests = this.service.getaddproducts();
 

// this.pageRefresh();

}

handleSuccessfulResponse(response) {
  
  this.retrieveRequests = new Array<RecycleProduct>();
  //get books returned by the api call
  this.productsRecieved = response;
  for (const productre of this.productsRecieved) {

    const bookwithRetrievedImageField = new RecycleProduct();
    bookwithRetrievedImageField.id = productre.id;
    bookwithRetrievedImageField.title = productre.title;
    bookwithRetrievedImageField.category = productre.category;
    //populate retrieved image field so that productre image can be displayed
    bookwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + productre.image1;
    bookwithRetrievedImageField.image1=productre.image1;
    // bookwithRetrievedImageField.image2=productre.image2;
    bookwithRetrievedImageField.price = productre.price;
    bookwithRetrievedImageField.quantity = productre.quantity;
    bookwithRetrievedImageField.date = productre.date;
    bookwithRetrievedImageField.discount = productre.discount;
    bookwithRetrievedImageField.newprice = productre.newprice;
    this.retrieveRequests.push(bookwithRetrievedImageField);
    console.log(productre);
  }
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
  
   save() {
    this.product.date = new Date()
    this.value1 =this.product.discount;
    this.value2 =this.product.price;
   // this.product.disprice = (1-this.value1/100)*this.value2
    
    this.product.newprice = (1-this.value1/100)*this.value2
    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.selectedFile.imageName = this.selectedFile.name;

    this.httpClient
      .post('http://localhost:8080/uploadReProduct', uploadData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.service.createOutsourceProductadd(this.product).subscribe((data) => {
            console.log(data);
            console.log(this.product.newprice)
            //this.gotoList();
          });
          console.log('Image uploaded successfully');
        } else {
          console.log('Image not uploaded successfully');
        }
      });
    
    
  }

  public openConfirmationDialog(id: number) {
    this.outsourceWasteRequsetService
      .confirm('Please confirm..', 'Do you really want to cancel?')
      .then((confirmed) => {
        // console.log('User confirmed:', confirmed);
        if (confirmed == true) {
          this.deleteCustomerWasteRequest(id);
        }
      })
      .catch(() =>
        console.log(
          'User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'
        )
      );
  }

  deleteCustomerWasteRequest(id: number) {
    this.service.deletereProduct(id).subscribe(
      (data) => {
        console.log(data);
         this.reloadData();
      },
      (error) => console.log(error)
    );
  }

}
