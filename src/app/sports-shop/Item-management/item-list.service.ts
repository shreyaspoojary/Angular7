
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export default class ProductService {
  
    formData: any= {
        product_name: null,
        colour: null,
        product_prize: null,
        product_sender: null,
        product_specification: null,
        productId: null
    };
  

    invalidateData () {
        this.formData = {
            product_name: null,
            colour: null,
            product_prize: null,
            product_sender: null,
            product_specification: null,
            productId: null
        };
    }

  readonly rootURL = 'http://localhost:60574/api/products/';


  constructor(private http: HttpClient) { }



  refreshList(){

    return this.http.get(this.rootURL);
  }

  deletePaymentDetail(id) {
    return this.http.delete(this.rootURL + id);
  }

  getItem(id) {
    return this.http.get(this.rootURL+id);
  }

  addItem () {
    console.log(this.formData);
    return this.http.post(this.rootURL, this.formData);
  }

  updateItem (id) {
    console.log(this.formData);
    return this.http.put(this.rootURL +id, this.formData);
  }

}
