import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sports-shop',
  templateUrl: './sports-shop.component.html',
  styles: []
})
export class SportsShopDetails implements OnInit {

  constructor() { }
  tabName: string = "USER_MNG";
  ngOnInit() {
  }

   handleTabChange( tabName) {
    console.log(tabName);
    this.tabName = tabName;
  }
}
