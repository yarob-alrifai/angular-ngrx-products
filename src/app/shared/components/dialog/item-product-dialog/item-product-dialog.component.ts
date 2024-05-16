import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EMPTY } from 'rxjs';
import { Product } from '../../../../store/product/product';


@Component({
  selector: 'app-item-product-dialog',
  templateUrl: './item-product-dialog.component.html',
  styleUrl: './item-product-dialog.component.css'
})
export class ItemProductDialogComponent {
  item: Product | undefined =undefined
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ItemProductDialogComponent>,) {
    this.item=this.data.item
  }

  ngOnInit(): void {
    window.scrollTo(0, 0)

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
