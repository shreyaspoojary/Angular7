
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import UserService from './user-list.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-listcomponent.html',
  styles: []
})
export class UserList implements OnInit {

  constructor(private service:UserService ) { 
     
  }

    data: any = [];
    showModal: boolean = false;
    isUpdate: boolean = false;
    isViewUserOrder: boolean = false;
    userId: any = "Deekshith";
    ngOnInit() {
        this.getData();
    }


    getData() {
        this.service.refreshList().subscribe(data => {
            this.data = data;
        });
        console.log(this.data);
    }

    onRemove(id) {
        console.log(id);
        this.service.deleteUser(id).subscribe(data => {
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
            this.service.updateUser(this.service.formData.customerId).subscribe(data => {
                this.getData();
                this.service.invalidateData();
                this.toggleModal();
                this.isUpdate = !this.isUpdate;
            });

            return;
        }


        this.service.addUser().subscribe(data => {
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

    viewUserOrder(id) {
      this.userId = id;
      this.isViewUserOrder = true;
      this.showModal = false;
    }

}
