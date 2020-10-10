import { Component, OnInit } from '@angular/core';
import { Item} from 'src/app/pojo/item';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductcatService } from 'src/app/service/productcat.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

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

      updateProduct() {

        // const uploadData = new FormData();
        // uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
        // this.selectedFile.imageName = this.selectedFile.name;
    
        this.productService.updateProduct(this.id, this.product)
          .subscribe(data => console.log(data), error => console.log(error));
        this.product = new Item();
        this.gotoList();
      }

      onSubmit() {
        this.updateProduct();  
        alert('UPDATE SUCCESSFUL!!');  
      }
      gotoList(){
        this.router.navigate(['outsource/AddRecycledProduct']);
      }    

}
