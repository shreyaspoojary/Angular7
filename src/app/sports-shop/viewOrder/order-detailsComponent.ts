
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import ProductService from '../Item-management/item-list.service';
import OrderService from './order-details.service';

@Component({
  selector: 'order-details',
  templateUrl: './order-detailsComponent.html',
  styles: []
})
export class OrderDetails implements OnInit {

  constructor(private service:OrderService, private prodService: ProductService ) { 
     
  }

    data: any = [];
    products: any = [];

    @Input() orderId = ''; // decorate the property with @Input()
    ngOnInit() {
        this.getData();
        console.log("userId", this.orderId);
    }

    
    getData() {
        this.service.getOrderInfo(this.orderId).subscribe(data => {
            this.data = data;

        });

        this.service.getItems(this.orderId).subscribe(data => {
            this.products = data;
            this.updateProduct();
        });
        console.log(this.data);
        console.log(this.products);
    }

    updateProduct () {
        let products = [...this.products];
        products.map( item => {
            const pId = item.productId;
            this.prodService.getItem(pId).subscribe(data => {
                item.productInfo = data;
            });
        });

        console.log(products);
    }
}
