
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export default class UserService {
  
    formData: any= {
     // customerId: null,
      customer_firstname: null,
      customer_lastname: null,
      customer_phoneNo: null,
      customer_email: null,
      customer_location : null,
      customer_state: null,
    };
  

    invalidateData () {
        this.formData = {
          //customerId: null,
          customer_firstname: null,
          customer_lastname: null,
          customer_phoneNo: null,
          customer_email: null,
          customer_location : null,
          customer_state: null,
        };
    }

  readonly rootURL = 'http://localhost:60574/api/customer_info/';


  constructor(private http: HttpClient) { }



  refreshList(){
    return this.http.get(this.rootURL);
  }

  deleteUser(id) {
    return this.http.delete(this.rootURL + id);
  }

  getUser(id) {
    return this.http.get(this.rootURL);
  }

  addUser () {
    console.log(this.formData);
    return this.http.post(this.rootURL, this.formData);
  }

  updateUser (id) {
    return this.http.put(this.rootURL +id, this.formData);
  }

}
