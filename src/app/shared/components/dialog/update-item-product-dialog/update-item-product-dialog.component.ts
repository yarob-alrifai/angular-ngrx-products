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
  item: Product
  selectedFile: File | null = null;
  formData: any

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UpdateItemProductDialogComponent>,
    private storeProduct$: Store<ProductState>,
  ) {
    this.item = {...this.data.product};

  }




  onUpload() {
console.log(this.formData)

    // Dispatch the uploadImage action with the selected file
     this.storeProduct$.dispatch(updateProductRequest({updatedProduct: this.item}));

    // Close the dialog
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
