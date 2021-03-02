import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'food-detail-popup',
  templateUrl: './food-detail-popup.component.html',
  styleUrls: ['./food-detail-popup.component.scss']
})
export class FoodDetailPopupComponent implements OnInit {

  title = '';

  constructor(protected dialogRef: NbDialogRef<any>) { }

  close(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
