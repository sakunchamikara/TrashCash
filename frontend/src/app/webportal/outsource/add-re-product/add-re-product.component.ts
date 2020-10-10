import { Component, OnInit ,Input} from '@angular/core';
import { ProductcatService } from 'src/app/service/productcat.service';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/pojo/item';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../../pojo/customer';
import { CustomerAuthService } from '../../services/customer-auth.service';


@Component({
  selector: 'app-add-re-product',
  templateUrl: './add-re-product.component.html',
  styleUrls: ['./add-re-product.component.scss']
})
export class AddReProductComponent implements OnInit {

  product =  new Item();
  retrieveRequests : Array<Item>
  productsRecieved: Array<Item>;
  customer: Customer;
  email:any;
  submitted = false;
  value1:any;
  value2:any;
  public listItems: Array<string> = [];

  @Input()
  private selectedFile;
  imgURL: any;
  constructor(private router: Router , private httpClient: HttpClient , private service:ProductService,private pservice: ProductcatService,private authService: CustomerAuthService) { }

  ngOnInit() {
    this.dropdownRefresh();
   // this.reloadData();

   this.email = this.authService.getAuthenticatedCustomer();
   this.customer = new Customer();
   this.authService.getCustomer(this.email).subscribe((data) => {
   this.customer = data;
    //  this.cus=JSON.stringify(this.customer.firstName);
   
   
    
    });

    if(this.email){
      this.reloadData();
   }
    else{
     this.router.navigate(['/customer/login']);
     }
  }

  dropdownRefresh() {
    this.pservice.getProductCatDropdownValues().subscribe((data) => {
      console.log(data);
      data.forEach((element) => {
        this.listItems.push(element['name']);
      });
    });
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
  this.service.getProductListByEmail(this.email).subscribe(
    response => this.handleSuccessfulResponse(response)
  );
  //this.retrieveRequests = this.service.getaddproducts();
 

// this.pageRefresh();

}

handleSuccessfulResponse(response) {
  
  this.retrieveRequests = new Array<Item>();
  //get books returned by the api call
  this.productsRecieved = response;
  for (const productre of this.productsRecieved) {

    const bookwithRetrievedImageField = new Item();
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
    //bookwithRetrievedImageField.discount = productre.discount;
    //bookwithRetrievedImageField.newprice = productre.newprice;
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
    this.product.date = new Date();
    console.log(this.customer.firstName);
    console.log(this.customer.email);
    
    this.product.customer = this.customer.firstName;
    this.product.email = this.customer.email;
    this.product.usertype = this.customer.email;
        
  //   this.value1 =this.product.discount;
  //   this.value2 =this.product.price;
  //  // this.product.disprice = (1-this.value1/100)*this.value2
    
  //   this.product.newprice = (1-this.value1/100)*this.value2
    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.selectedFile.imageName = this.selectedFile.name;

    this.httpClient
      .post('http://localhost:8080/uploadReProduct', uploadData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.service.createProduct(this.product).subscribe((data) => {
            console.log(data);
            this.reloadData();
            //console.log(this.product.newprice)
            //this.gotoList();
          });
          console.log('Image uploaded successfully');
        } else {
          console.log('Image not uploaded successfully');
        }
      });
    
    
  }

  

  
  updateProduct(id: number){
    this.router.navigate(['outsource','Update',id]);
  }

  deleteProduct(id: number) {
    this.service.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  public openConfirmationDialog(id: number) {
    this.service
      .confirm('Please confirm..', 'Do you really want to delete?')
      .then((confirmed) => {
        // console.log('User confirmed:', confirmed);
        if (confirmed == true) {
          this.deleteProduct(id);
        }
      })
      .catch(() =>
        console.log(
          'User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'
        )
      );
  }


}
