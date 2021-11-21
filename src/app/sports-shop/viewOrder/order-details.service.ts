
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export default class OrderDetailsService {
  
    formData: any= {

     // id : null,
     orderId : null,
     customerId : null,
     quantity : null,
     order_address: null,
     order_date_and_time: null,
    };
  

    invalidateData () {
        this.formData = {
          // id : null,
          orderId : null,
          customerId : null,
          quantity : null,
          order_address: null,
          order_date_and_time: null,
        };
    }

  readonly rootURLFindByID = 'http://localhost:60574/api/order_details?orderId=';
  readonly rootURL = 'http://localhost:60574/api/order_info/';
  

  constructor(private http: HttpClient) { }



  getItems(id){
    return this.http.get(this.rootURLFindByID+ id);
  }

  getOrderInfo(id) {
    return this.http.get(this.rootURL+ id);

  }
  /*
  deleteOrder(id) {
    return this.http.delete(this.rootURL + id);
  }

  getOrder(id) {
    return this.http.get(this.rootURL);
  }

  addOrder () {
    console.log(this.formData);
    return this.http.post(this.rootURL, this.formData);
  }

  updateOrder (id) {
    console.group("formadata", this.formData);
    return this.http.put(this.rootURL +id, this.formData);
  }

*/
}
