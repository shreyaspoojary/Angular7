import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { SportsShopDetails } from './sports-shop/sports-shop.component';
import { ItemList } from './sports-shop/Item-management/items.component';
import ProductService from './sports-shop/Item-management/item-list.service';
import { UserList } from './sports-shop/user-management/user.component';
import UserService from './sports-shop/user-management/user-list.service';
import { OrderList } from './sports-shop/order-management/order.component';
import OrderService from './sports-shop/order-management/order.service';
import { OrderDetails } from './sports-shop/viewOrder/order-detailsComponent';
import OrderDetailsService from './sports-shop/viewOrder/order-details.service';

@NgModule({
  declarations: [
    //TODO: remove
    AppComponent,
  
    ItemList,
    SportsShopDetails,
    UserList,
    OrderList,
    OrderDetails
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ ProductService, UserService, OrderService, OrderDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
