
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import OrderService from './order.service';

@Component({
  selector: 'order-list',
  templateUrl: './order-listcomponent.html',
  styles: []
})
export class OrderList implements OnInit {

  constructor(private service:OrderService ) { 
     
  }

    data: any = [];
    showModal: boolean = false;
    isUpdate: boolean = false;
    isViewOrder: boolean= false;
    orderId: boolean = false;
    @Input() userId = ''; // decorate the property with @Input()
    ngOnInit() {
        this.getData();
        console.log("userId", this.userId);  
        console.log("orderId", this.orderId);
    }

    viewOrder (id) {
        console.log(id);
        this.orderId = id;
        this.isViewOrder = true;
    }
    
    getData() {
        this.service.refreshList(this.userId).subscribe(data => {
            this.data = data;
        });
        console.log(this.data);
    }

    onRemove(id) {
        console.log(id);
        this.service.deleteOrder(id).subscribe(data => {
            this.getData();
        });
    }

    toggleModal() {
        this.showModal= !this.showModal;
    }

    addItemClickHandler () {
        this.service.invalidateData();
        this.toggleModal();    
    }

    submitForm  () {
        console.log(this.service.formData);
        if(this.isUpdate) {
            this.service.updateOrder(this.service.formData.customerId).subscribe(data => {
                this.getData();
                this.service.invalidateData();
                this.toggleModal();
                this.isUpdate = !this.isUpdate;
            });

            return;
        }


        this.service.addOrder().subscribe(data => {
            this.getData();
            this.service.invalidateData();
            this.toggleModal();
        });;
    }

    updateItemHandler (id) {
        const item = this.data.find(item => item.customerId === id);
        console.log("item", item, this.data);
        this.service.formData = item;
        this.toggleModal();
        this.isUpdate = !this.isUpdate;
    }

}
