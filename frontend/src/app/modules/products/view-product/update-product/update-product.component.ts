import { Component, OnInit ,Input } from '@angular/core';
import { Observable } from "rxjs";
import { NgForm } from '@angular/forms';
import { Item} from 'src/app/pojo/item';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductcatService } from 'src/app/service/productcat.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  @Input()
  private selectedFile;
  imgURL: any;

  id : number;
  product : Item;

  constructor(private route: ActivatedRoute,private router: Router,
    private productService: ProductService, private httpClient: HttpClient , private service:ProductcatService) { }

    public listItems: Array<string> = [];


  ngOnInit() {

    this.product = new Item();

    this.id = this.route.snapshot.params['id'];

    this.productService.getProduct(this.id)
    .subscribe(data => {
      console.log(data)
      
      this.product = data;
    }, error => console.log(error));

    this.dropdownRefresh();
  }

  dropdownRefresh(){
    this.service.getProductCatDropdownValues().subscribe(data=>{
     console.log(data);
      data.forEach(element => {
        this.listItems.push(element["name"])
      });
    })
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

  updateProduct() {

    // const uploadData = new FormData();
    // uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    // this.selectedFile.imageName = this.selectedFile.name;

    this.productService.updateProduct(this.id, this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product = new Item();
    this.gotoList();

    // this.httpClient.post('http://localhost:8080/upload', uploadData, { observe: 'response' })
    //   .subscribe((response) => {
    //     if (response.status === 200) {
    //       this.productService.updateProduct(this.id , this.product).subscribe(
    //         (data) => {
    //           console.log(data);
    //           this.gotoList();
    //         }
    //       );
    //       console.log('Image uploaded successfully');
    //     } else {
    //       console.log('Image not uploaded successfully');
    //     }
    //   }
    //   );
  }

  onSubmit() {
    this.updateProduct();  
    alert('UPDATE SUCCESSFUL!!');  
  }
  gotoList(){
    this.router.navigate(['system/ViewProducts']);
    
  }

}
