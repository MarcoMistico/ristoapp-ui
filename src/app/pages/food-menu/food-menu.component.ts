import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.scss']
})
export class FoodMenuComponent implements OnInit {
  cartQuantity: number;

  atc(){
    this.cartQuantity = JSON.parse(localStorage.getItem("quantity"));
    this.cartQuantity +=1;
    localStorage.setItem("quantity", String(this.cartQuantity));
  }

  constructor() { }

  ngOnInit(): void {
    this.cartQuantity = 0;

  }

}
