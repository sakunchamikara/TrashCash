import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from '../modules/confirmation-dialog/confirmation-dialog.component';
import { AlertDialogComponent } from '../modules/alert-dialog/alert-dialog.component';
//import { ItemCat } from 'src/app/pojo/item-cat';

@Injectable({
  providedIn: "root",
})
export class ProductcatService {
  private baseUrl = "http://localhost:8080/productCats";

  constructor(private http: HttpClient, private modalService: NgbModal) {}

  getProductCatList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createProductCat(productcat: object): Observable<object> {
    return this.http.post<any>("http://localhost:8080/productCats", productcat);
  }
  // public registerUserFromRemote(user: User): Observable<any> {
  //   return this.http.post<any>("http://localhost:8080/registerUser", user);
  // }

  deleteProductCat(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: "text" });
  }

  getProductCat(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateProductCat(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  
  getProductCatDropdownValues(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  public confirm(
    title: string,
    message: string,
    btnOkText: string = 'OK',
    btnCancelText: string = 'Cancel',
    dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
    const modalRef = this.modalService.open(ConfirmationDialogComponent, { size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;

    return modalRef.result;

}

getProductCatNameList(): Observable<any> {
  let url = `http://localhost:8080/productCats/name`;
  return this.http.get(url)
  
}

public alert(
  title: string,
  message: string,
  btnOkText: string = 'OK',
  dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
  const modalRef = this.modalService.open(AlertDialogComponent, { size: dialogSize });
  modalRef.componentInstance.title = title;
  modalRef.componentInstance.message = message;
  modalRef.componentInstance.btnOkText = btnOkText;

  return modalRef.result;

}

}
