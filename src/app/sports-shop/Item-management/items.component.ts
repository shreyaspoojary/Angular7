
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import ProductService from './item-list.service';

@Component({
  selector: 'item-list',
  templateUrl: './item-listcomponent.html',
  styles: []
})
export class ItemList implements OnInit {

  constructor(private service:ProductService ) { 
     
  }

    items: any = [];
    showModal: boolean = false;
    isUpdate: boolean = false;
    ngOnInit() {
        this.getItems();
    }

    getItems() {
        this.service.refreshList().subscribe(data => {
            this.items = data;
        });
        console.log(this.items);
    }

    onRemove(id) {
        console.log(id);
        this.service.deletePaymentDetail(id).subscribe(data => {
            this.getItems();
        });
    }

    toggleModal() {
        this.showModal= !this.showModal;
    }

    onUpdate() {

    }
    addItemClickHandler () {
        this.service.invalidateData();
        this.toggleModal();    
    }
    submitForm  () {
        if(this.isUpdate) {
            this.service.updateItem(this.service.formData.productId).subscribe(data => {
                this.getItems();
                this.service.invalidateData();
                this.toggleModal();
                this.isUpdate = !this.isUpdate;
            });;

            return;
        }


        this.service.addItem().subscribe(data => {
            this.getItems();
            this.service.invalidateData();
            this.toggleModal();
        });;
    }

    updateItemHandler (id) {
        const item = this.items.find(item => item.productId === id);
        console.log("item", item, this.items);
        this.service.formData = item;
        this.toggleModal();
        this.isUpdate = !this.isUpdate;
    }

 /* resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      PMId: 0,
      CardOwnerName: '',
      CardNumber: '',
      ExpirationDate: '',
      CVV: ''
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.PMId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Payment Detail Register');
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Payment Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
*/
}
