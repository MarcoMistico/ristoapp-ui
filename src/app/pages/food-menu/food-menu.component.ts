import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { FoodDetailComponent } from '../food-detail/food-detail.component';
import { FoodDetailPopupComponent } from './food-detail-popup/food-detail-popup.component';

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

  constructor(private dialogService: NbDialogService) { }

  openPopup() {
    const dialogRef = this.dialogService.open(FoodDetailPopupComponent, {
      context: {
        title: 'Dettaglio',
      }
    });
  }

  ngOnInit(): void {
    this.cartQuantity = 0;

  }

}
