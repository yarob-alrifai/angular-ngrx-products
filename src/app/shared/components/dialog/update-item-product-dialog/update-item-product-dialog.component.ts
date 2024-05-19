import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { Product, ProductState } from "../../../../store/product/product";
import { updateProductRequest } from "../../../../store/product/product.actions";

@Component({
  selector: 'app-update-item-product-dialog',
  templateUrl: './update-item-product-dialog.component.html',
  styleUrls: ['./update-item-product-dialog.component.css']
})
export class UpdateItemProductDialogComponent {
  // Define properties
  item: Product; // Selected product item
  formData: any; // Form data for file upload

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, // Inject data passed to the dialog
    public dialogRef: MatDialogRef<UpdateItemProductDialogComponent>, // Reference to the dialog
    private storeProduct$: Store<ProductState>, // Inject the product store
  ) {
    // Initialize the item with the data passed to the dialog
    this.item = { ...this.data.product };
  }

  // Method triggered when upload button is clicked
  onUpload() {
    // Dispatch the updateProductRequest action with the updated product data
    this.storeProduct$.dispatch(updateProductRequest({ updatedProduct: this.item }));

    // Close the dialog
    this.dialogRef.close();
  }

  // Method triggered when cancel button is clicked
  onNoClick(): void {
    // Close the dialog
    this.dialogRef.close();
  }
}
