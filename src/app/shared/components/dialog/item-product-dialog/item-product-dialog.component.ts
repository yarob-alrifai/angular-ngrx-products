import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Product } from '../../../../store/product/product';

@Component({
  selector: 'app-item-product-dialog',
  templateUrl: './item-product-dialog.component.html',
  styleUrl: './item-product-dialog.component.css'
})
export class ItemProductDialogComponent {
  item: Product | undefined = undefined; // Define item property and initialize with undefined
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, // Inject data passed to the dialog
    public dialogRef: MatDialogRef<ItemProductDialogComponent>, // Reference to the dialog
  ) {
    // Initialize item with the data passed to the dialog
    this.item = this.data.item;
  }

  ngOnInit(): void {
    // Scroll to the top of the page when the dialog is opened
    window.scrollTo(0, 0);
  }

  // Method triggered when cancel button is clicked
  onNoClick(): void {
    // Close the dialog
    this.dialogRef.close();
  }
}
