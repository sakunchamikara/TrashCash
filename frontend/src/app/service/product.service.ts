import { Injectable } from '@angular/core';
import { Item } from '../pojo/item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from '../modules/confirmation-dialog/confirmation-dialog.component';
// pull
@Injectable({
  providedIn: 'root',
})
// new comment
export class ProductService {
  private baseUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient, private modalService: NgbModal) {}
  createProduct(product: Object): Observable<Object> {
    return this.http.post<any>(`${this.baseUrl}`, product);
  }
  getProductList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateProduct(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  getProductListByCategory(category: string): Observable<any> {
    const uri = `http://localhost:8080/getProduct/${category}`;
    return this.http.get(uri);
  }

  getProductListByEmail(email: string): Observable<any> {
    const uri = `http://localhost:8080/getcompanyproduct/${email}`;
    return this.http.get(uri);
  }

  //
  getProductCatDropdownValues(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  public confirm(
    title: string,
    message: string,
    btnOkText: string = 'OK',
    btnCancelText: string = 'Cancel',
    dialogSize: 'sm' | 'lg' = 'sm'
  ): Promise<boolean> {
    const modalRef = this.modalService.open(ConfirmationDialogComponent, {
      size: dialogSize,
    });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;

    return modalRef.result;
  }
  getRandomProducts(): Observable<any> {
    const url = 'http://localhost:8080/getRandomProduct';
    return this.http.get(url);
  }

  searchProduct(value: string): Observable<any> {
    return this.http.get(`http://localhost:8080/searchProduct/${value}`);
  }

  updateProductQuantity(pid: number, product: Item): Observable<any> {
    return this.http.put<any>(
      `http://localhost:8080/updateProductQuantity/${pid}`, product
    );
  }
}
