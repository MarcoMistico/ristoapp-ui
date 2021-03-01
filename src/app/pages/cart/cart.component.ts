import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  valueprod1: number;

  plusQuantity(value: number){
    value = value + 1;
    this.valueprod1 = value;
  }

  minusQuantity(value: number){
    value = value - 1;
    this.valueprod1 = value;
  }

  constructor() { }

  ngOnInit(): void {
    this.valueprod1 = 1;
  }

}
